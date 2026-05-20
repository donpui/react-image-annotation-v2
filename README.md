React Image Annotation v2
=========================

> **Package notes:** peer dependencies are `react@^19` and `styled-components@^6`

An infinitely customizable image annotation library built on React

![Annotation demo](demo.gif)

## Installation

```bash
npm install react-image-annotation-v2
# or
yarn add react-image-annotation-v2
```

## Usage

```jsx
import Annotation from 'react-image-annotation-v2'

export default class Simple extends Component {
  state = {
    annotations: [],
    annotation: {}
  }

  onChange = (annotation) => {
    this.setState({ annotation })
  }

  onSubmit = (annotation) => {
    const { geometry, data } = annotation

    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random()
        }
      })
    })
  }

  render () {
    return (
      <Root>
        <Annotation
          src={img}
          alt='Two pebbles anthropomorphized holding hands'

          annotations={this.state.annotations}

          type={this.state.type}
          value={this.state.annotation}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </Root>
    )
  }
}
```


### Props

Prop | Description | Default
---- | ----------- | -------
`src` | Image src attribute |
`alt` | Image alt attribute |
`annotations` | Array of annotations |
`value` | Annotation object currently being created. See [annotation object](#annotation-object)  |
`onChange` | `onChange` handler for annotation object |
`onSubmit` | `onSubmit` handler for annotation object |
`type` | Selector type. See [custom shapes](#using-custom-shapes) | `RECTANGLE`
`allowTouch` | Set to `true` to allow the target to handle touch events. This disables one-finger scrolling | `false`
`selectors` | An array of selectors. See [adding custom selector logic](#adding-custom-selector-logic) | `[RectangleSelector, PointSelector, OvalSelector]`
`activeAnnotations` | Array of annotations that will be passed as 'active' (active highlight and shows content) |
`activeAnnotationComparator` | Method to compare annotation and `activeAnnotation` item (from `props.activeAnnotations`). Return `true` if it's the annotations are equal | `(a, b) => a === b`
`disableAnnotation` | Set to `true` to disable creating of annotations (note that no callback methods will be called if this is `true`) | `false`
`disableSelector` | Set to `true` to not render `Selector` | `false`
`disableEditor` | Set to `true` to not render `Editor` | `false`
`disableOverlay` | Set to `true` to not render `Overlay` | `false`
`disableContent` | Set to `true` to not render hover/active annotation content from `renderContent` | `false`
`disableHitTesting` | Set to `true` so the full-size interaction layer does not capture pointer events (for custom `renderContent` UX) | `false`
`drawingCursor` | CSS `cursor` on the interaction layer while drag-drawing (`selection.mode === 'SELECTING'`). Use a plain SVG/PNG (no CSS filters). Helpers: `buildDrawingCursor`, `buildDrawingCursorFromSvg`. | —
`enableEditing` | Expands rectangle hit areas for built-in drag/resize editing (independent of `disableEditor`) | `false`
`enableRemoval` | Shows a delete control on the active annotation (top-right of the box). With `enableEditing`, delete also appears on the draggable editor while hovered. | `false`
`onRemoveAnnotation` | Called when delete is clicked. May be async (e.g. API delete). You update `annotations` in this callback. | —
`canRemoveAnnotation` | `(annotation) => boolean` — per-annotation gate (e.g. replace app-level `allowDelete`) | always `true` when removal is enabled
`renderDelete` | Custom delete UI; receives `{ annotation, onRemove, disabled, active }` | built-in × button
`renderSelector` | Function that renders `Selector` Component | See [custom components](#using-custom-components)
`renderEditor` | Function that renders `Editor` Component | See [custom components](#using-custom-components)
`renderHighlight` | Function that renders `Highlight` Component | See [custom components](#using-custom-components)
`renderContent` | Function that renders `Content` | See [custom components](#using-custom-components)
`renderOverlay` | Function that renders `Overlay` | See [custom components](#using-custom-components)
`onMouseUp` | `onMouseUp` handler on annotation target |
`onMouseDown` | `onMouseDown` handler on annotation target |
`onMouseMove` | `onMouseMove` handler on annotation target |
`onClick` | `onClick` handler on annotation target |
`onImageLoad` | `onLoad` handler on the underlying `<img>` |
`onImageError` | `onError` handler on the underlying `<img>` |

#### Annotation object

An Annotation object is an object that conforms to the object shape

```js
({
  selection: T.object, // temporary object for selector logic
  geometry: T.shape({ // geometry data for annotation
    type: T.string.isRequired // type is used to resolve Highlighter/Selector renderer
  }),
  // auxiliary data object for application.
  // Content data can be stored here (text, image, primary key, etc.)
  data: T.object
})
```

## Using custom components

`Annotation` supports `renderProp`s for almost every internal component.

This allows you to customize everything about the the look of the annotation interface, and you can even use canvas elements for performance or more complex interaction models.

- `renderSelector` - used for selecting annotation area (during annotation creation)
- `renderEditor` - appears after annotation area has been selected (during annotation creation)
- `renderHighlight` - used to render current annotations in the annotation interface. It is passed an object that contains the property `active`, which is true if the mouse is hovering over the higlight
- `renderContent` - interactive UI for the active annotation (toolbars, drag handles, labels). It is passed `{ annotation }` and is rendered **above** the interaction layer so it can receive pointer events
- `renderDraggableHighlight` - when `enableEditing` is enabled, draggable handles render **above** `renderHighlight` (not instead of it), so custom highlight borders stay visible behind the tinted editor layer
- `renderOverlay` - Component overlay for Annotation (i.e. 'Click and Drag to Annotate')

### Highlight vs content layers

The component stacks several absolutely positioned layers over the image:

1. **`renderHighlight`** — visual outline for every annotation (inside a `pointer-events: none` wrapper). Use for shapes, borders, and passive styling only.
2. **Interaction target** — full-size layer for creating new annotations and hover hit-testing. Set `disableHitTesting` when custom content owns all pointer interaction.
3. **`renderContent`** — shown only for the active annotation (hover or `activeAnnotations` / `editModeAnnotationIds`). Put buttons, drag handles, and other controls here with `pointer-events: auto` on the elements that need clicks.

`disableEditor` only hides the built-in creation editor; it does **not** control hover hit areas. Use `enableEditing` for the library’s expanded rectangle hit testing when using built-in drag/resize editing.

**Note**: You cannot use `:hover` selectors in css for components returned by `renderSelector` and `renderHighlight`. This is due to the fact that `Annotation` places DOM layers on top of these components, preventing triggering of `:hover`

## Using custom shapes

`Annotation` supports three shapes by default, `RECTANGLE`, `POINT` and `OVAL`.

You can switch the shape selector by passing the appropriate `type` as a property. Default shape `TYPE`s are accessible on their appropriate selectors:

```jsx
import {
  PointSelector,
  RectangleSelector,
  OvalSelector
} from 'react-image-annotation-v2'

<Annotation
  type={PointSelector.TYPE}
/>
```

### Adding custom selector logic

#### This is an Advanced Topic

The Annotation API allows support for custom shapes that use custom logic such as polygon or freehand selection. This is done by defining your own selection logic and passing it as a selector in the `selectors` property.

Selectors are objects that must have the following properties:

- `TYPE` - string that uniquely identifies this selector (i.e. `RECTANGLE`)
- `intersects` - method that returns true if the mouse point intersects with the annotation geometry
- `area` - method that calculates and returns the area of the annotation geometry
- `methods` - object that can contain various listener handlers (`onMouseUp`, `onMouseDown`, `onMouseMove`, `onClick`). These listener handlers are called when triggered in the annotation area. These handlers must be reducer-like methods - returning a new annotation object depending on the change of the method

You can view a defined `RectangleSelector` [here](src/hocs/RectangleSelector.js)

### Connecting selector logic to Redux/MobX

First see [Selectors](#adding-custom-selector-logic)

You can use `Selector` methods to connect these method logic to your stores. This is due to the fact that selector methods function as reducers, returning new state depending on the event.

***Note that it is not necessary to connect the selector logic with redux/mobx. Connecting the annotation and annotations state is more than enough for most use cases.***

## License

MIT
