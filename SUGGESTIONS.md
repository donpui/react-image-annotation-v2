## 1. Embrace React 18+ features and concurrent patterns

Also consider how annotations might benefit from the new concurrent hooks:

    // e.g. allow low‑priority updates when dragging/selecting
    const [isPending, startTransition] = useTransition();
    const handleMouseMove = (e) => {
      startTransition(() => {
        // expensive annotation update
        updateAnnotation(e);
      });
    };

### b) Leverage useDeferredValue / Suspense for expensive rendering

If rendering lots of annotation highlights/content becomes slow, you can offload non­urgent updates with useDeferredValue or wrap
heavy subtrees in <Suspense> and lazy­load.

------------------------------------------------------------------------------------------------------------------------------------

## 2. Migrate fully to TypeScript for end‑to‑end type safety

#### a) Rename all “.js” selector/HOC files to “.ts”/“.tsx” and type them

Right now your HOCs live as JavaScript:

    // src/hocs/RectangleSelector.js
    export const TYPE = 'RECTANGLE'
    …
    export default { TYPE, intersects, area, methods }

src/hocs/RectangleSelector.js 
(/Users/donataspuidokas/Development/personal/react-image-annotation-v2/src/hocs/RectangleSelector.js)src/hocs/RectangleSelector.js 
(/Users/donataspuidokas/Development/personal/react-image-annotation-v2/src/hocs/RectangleSelector.js)

Convert these to .ts/.tsx files, give them proper generics, and eliminate all any. For example:

    export interface RectangleSelector {
      TYPE: 'RECTANGLE';
      intersects: (point: Point, geometry: Geometry) => boolean;
      area: (geometry: Geometry) => number;
      methods: { … };
    }

#### b) Turn src/types/index.d.ts into co‑located TS module exports

Rather than ambient declarations, co‑locate types next to code and enable "strict": true in your tsconfig. E.g. define your
IAnnotation/ISelector interfaces alongside Annotation.tsx.

    // src/types/index.d.ts —> ideally migrate to src/types/index.ts
    declare module "react-image-annotation" {
      export interface IGeometry { … }
      …
      export default class Annotation extends React.Component<IAnnotationProps> {}
    }

src/types/index.d.ts (/Users/donataspuidokas/Development/personal/react-image-annotation-v2/src/types/index.d.ts)

Co‑locating and exporting these types directly makes maintenance easier and removes the need for a separate ambient file.

------------------------------------------------------------------------------------------------------------------------------------

## 3. Refactor class‑based HOCs into custom hooks + forwardRef

### a) withRelativeMousePos is a class HOC—replace with a hook

    // src/utils/withRelativeMousePos.tsx
    import { PureComponent } from 'react';
    …
    class WithRelativeMousePos extends PureComponent { … }
    …
    export default withRelativeMousePos;

src/utils/withRelativeMousePos.tsx (/Users/donataspuidokas/Development/personal/react-image-annotation-v2/src/utils/withRelativeMouse
Pos.tsx)src/utils/withRelativeMousePos.tsx 
(/Users/donataspuidokas/Development/personal/react-image-annotation-v2/src/utils/withRelativeMousePos.tsx)

→ Proposal: Replace this HOC with a useRelativeMousePosition hook that returns { x, y, ref }. This greatly simplifies the mental
model (hooks compose naturally) and aligns with React 18+ best practices.

    function useRelativeMousePosition() {
      const ref = useRef<HTMLElement>(null);
      const [pos, setPos] = useState<{x:number; y:number}>({ x:0, y:0 });
      useEffect(() => {
        const el = ref.current;
        if (!el) return;
        function onMouseMove(e: MouseEvent) {
          … calculate percentage …
          setPos({ x, y });
        }
        el.addEventListener('mousemove', onMouseMove);
        return () => el.removeEventListener('mousemove', onMouseMove);
      }, []);
      return { ...pos, ref };
    }

### b) isMouseHovering HOC → useHover hook

    // src/utils/isMouseHovering.tsx
    const isMouseHovering = <P extends object>(…) => { … }
    export default isMouseHovering;

src/utils/isMouseHovering.tsx 
(/Users/donataspuidokas/Development/personal/react-image-annotation-v2/src/utils/isMouseHovering.tsx)src/utils/isMouseHovering.tsx 
(/Users/donataspuidokas/Development/personal/react-image-annotation-v2/src/utils/isMouseHovering.tsx)

→ Replace with a useHover hook that simply tracks hover state and returns [hoverRef, isHovering]. You’ll remove the need for your
compose() utility altogether.

------------------------------------------------------------------------------------------------------------------------------------

## 4. Simplify HOC composition (drop compose)

You’re using a small compose util to wire up HOCs here:

    // src/utils/compose.ts
    export function compose(...funcs: Function[]) { … }
    export default compose;

src/utils/compose.ts (/Users/donataspuidokas/Development/personal/react-image-annotation-v2/src/utils/compose.ts)

    // src/components/Annotation.tsx (bottom)
    const ComposedAnnotation = compose(
      isMouseHoveringHOC('isMouseHovering'),
      withRelativeMousePosHOC('relativeMousePos')
    )(AnnotationFunc as any) as any as React.ComponentType<AnnotationOwnProps>;
    export default ComposedAnnotation;

src/components/Annotation.tsx (/Users/donataspuidokas/Development/personal/react-image-annotation-v2/src/components/Annotation.tsx)

By migrating to hooks, you can drop compose() entirely and just call your hooks inside AnnotationFunc, reducing indirection.

------------------------------------------------------------------------------------------------------------------------------------

## 5. Replace defaultProps on functional components with defaults in signatures

    // src/components/defaultProps.tsx
    export default {
      innerRef: () => {},
      onChange: () => {},
      type: RectangleSelector.TYPE,
      selectors: [RectangleSelector, PointSelector, OvalSelector],
      disableAnnotation: false,
      …
    }

src/components/defaultProps.tsx 
(/Users/donataspuidokas/Development/personal/react-image-annotation-v2/src/components/defaultProps.tsx)

In modern React, defaultProps on function components is discouraged (and not supported for React.FC). Instead, for each prop you
destructure, give it a default:

    function MyComponent({
      disableAnnotation = false,
      selectors = [/*…*/]
    }: MyComponentProps) { … }

This aligns with TypeScript’s strictness and removes the need for a separate defaults file.

------------------------------------------------------------------------------------------------------------------------------------

## 6. Break down the giant Annotation.tsx for maintainability

The core Annotation component is ~500 lines and handles everything: mouse/touch glue, selecting, rendering highlights/editor/content,
 overlay, children, etc.

Consider splitting it into smaller hooks/components:

    * A `useAnnotationState` hook that encapsulates all selection logic (mode, anchor, geometry).
    * A `SelectorLayer` subcomponent that renders the active selector (`renderSelector`).
    * Separate `OverlayLayer`, `EditorLayer`, `HighlightsLayer`.

This reduces cognitive load and makes each piece easier to test.

------------------------------------------------------------------------------------------------------------------------------------

## 7. Performance optimizations

    * **Memoize renderers.** Components like `Rectangle`, `Oval`, `Point`, `FancyRectangle`, etc., are pure given props. Wrap them in
 `React.memo` to avoid needless re‑renders.
    * **Stable callbacks.** You already use `useCallback`, but audit dependencies to ensure you’re not recreating functions on every
render.
    * **Key prop consistency.** You generate `key={annotation.data.id}` in several places—make sure `id` is stable and unique.

------------------------------------------------------------------------------------------------------------------------------------

## 8. Styling and theming

You rely heavily on styled-components. A few suggestions:

    * **Upgrade to v6** of styled‑components (if you’re not already) to get better performance and TypeScript support.
    * Consider co‑locating style variants with components (e.g. `StyledRectangle` in the same file as `Rectangle.tsx`), rather than a
 separate root directory.
    * Alternatively, evaluate CSS Modules or vanilla‑extract for smaller bundle size and zero runtime CSS-in-JS cost.

------------------------------------------------------------------------------------------------------------------------------------

## 9. Add accessibility and a11y

    * Ensure your annotation targets (e.g., the clickable `<Target>` div) have appropriate `aria-` attributes so screen readers know
this is interactive.
    * Add keyboard support for annotation creation/editing (e.g. allow selecting with Enter/Space, navigating annotations with arrow
keys).

------------------------------------------------------------------------------------------------------------------------------------

## 10. Bolster testing and CI

    * **Unit tests** for your selector logic (`intersects`, `area`, and `methods`) in each selector HOC (e.g. `RectangleSelector`,
`OvalSelector`).
    * **Integration tests** with React Testing Library for the `Annotation` component to simulate mouse/touch flows.
    * Add **ESLint** (with TypeScript support) and **Prettier** to enforce consistent style.
    * Add a `pre-commit` hook to run tests/linting automatically.

------------------------------------------------------------------------------------------------------------------------------------

### Summary of next‑step priorities

    1. **Convert HOCs to hooks** (`useRelativeMousePosition`, `useHover`) and eliminate `compose()`.
    2. **Fully adopt TypeScript**: rename `.js` → `.ts/.tsx`, enable `strict` mode, remove all `any`.
    3. **Break up** the large `Annotation.tsx` into smaller hooks and components.
    4. **Replace `defaultProps`** with ES default parameters.
    5. **Leverage React 18 concurrent features** (`useTransition`, `StrictMode`), add Suspense/code‑splitting where helpful.

These targeted changes will modernize the codebase, improve maintainability, and take full advantage of React 18+ and TypeScript’s
type safety. Let me know if you’d like to dive deeper on any of these points!