import Point from './Point'
import Editor from './Editor'
import FancyRectangle from './FancyRectangle'
import Rectangle from './Rectangle'
import Oval from './Oval'
import Content from './Content'
import Overlay from './Overlay'
import { DraggableBox } from './DraggableBox'

import {
  RectangleSelector,
  PointSelector,
  OvalSelector
} from '../selectors'

export default {
  innerRef: () => {},
  onChange: () => {},
  onSubmit: () => {},
  type: RectangleSelector.TYPE,
  selectors: [
    RectangleSelector,
    PointSelector,
    OvalSelector
  ],
  disableAnnotation: false,
  disableSelector: false,
  disableEditor: false,
  disableOverlay: false,
  activeAnnotationComparator: (a: any, b: any) => a === b,
  renderSelector: ({ annotation }: any) => {
    switch (annotation.geometry.type) {
      case RectangleSelector.TYPE:
        return (
          <FancyRectangle
            annotation={annotation}
          />
        )
      case PointSelector.TYPE:
        return (
          <Point
            annotation={annotation}
          />
        )
      case OvalSelector.TYPE:
        return (
          <Oval
            annotation={annotation}
          />
        )
      default:
        return null
    }
  },
  renderEditor: ({ annotation, onChange, onSubmit }: any) => (
    <Editor
      annotation={annotation}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  ),
  renderHighlight: ({ key, annotation, active }: any) => {
    switch (annotation.geometry.type) {
      case RectangleSelector.TYPE:
        return (
          <Rectangle
            key={key}
            annotation={annotation}
            active={active}
          />
        )
              case PointSelector.TYPE:
          return (
            <Point
              key={key}
              annotation={annotation}
            />
          )
      case OvalSelector.TYPE:
        return (
          <Oval
            key={key}
            annotation={annotation}
            active={active}
          />
        )
      default:
        return null
    }
  },
  renderContent: ({ key, annotation }: any) => (
    <Content
      key={key}
      annotation={annotation}
    />
  ),
  renderOverlay: ({ type, annotation }: any = {}) => {
    switch (type) {
      case PointSelector.TYPE:
        return (
          <Overlay>
            Click to Annotate
          </Overlay>
        )
      default:
        return (
          <Overlay>
            Click and Drag to Annotate
          </Overlay>
        )
    }
  },
  
  // Editing functionality defaults
  enableEditing: false,
  onAnnotationsChange: () => {
    // Default empty implementation - users should provide their own for editing to work
    console.warn('onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.');
  },
    renderDraggableHighlight: ({ key, annotation, active, isDragging, isHovered, onDotDragStart, onDotDrag, onMoveStart, onMove, onDragEnd, allowDelete, onRemoveAnnotation, onConfirm, onReset }: any) => {
    // Show draggable box for existing annotations that are hovered
    if (!annotation.data?.id || !isHovered) {
      // For inactive or new annotations, use regular highlight
      switch (annotation.geometry.type) {
        case RectangleSelector.TYPE:
          return (
            <Rectangle
              key={key}
              annotation={annotation}
              active={active}
            />
          )
        case PointSelector.TYPE:
          return (
            <Point
              key={key}
              annotation={annotation}
            />
          )
        case OvalSelector.TYPE:
          return (
            <Oval
              key={key}
              annotation={annotation}
              active={active}
            />
          )
        default:
          return null
      }
    }
    
    // For active existing annotations, use DraggableBox (only for rectangles currently)
    if (annotation.geometry.type === RectangleSelector.TYPE) {
      return (
        <DraggableBox
          key={key}
          annotation={annotation}
          onDotDragStart={onDotDragStart}
          onDotDrag={onDotDrag}
          onMoveStart={onMoveStart}
          onMove={onMove}
          onDragEnd={onDragEnd}
          isDragging={isDragging}
          allowDelete={allowDelete}
          onRemoveAnnotation={onRemoveAnnotation}
          onConfirm={onConfirm}
          onReset={onReset}
        />
      )
    }
    
    // Fallback to regular highlight for non-rectangle types
    return (
      <Rectangle
        key={key}
        annotation={annotation}
        active={active}
      />
    )
  }
} 