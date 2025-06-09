import React from 'react';
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

import type {
  AnnotationProps,
  RenderSelectorProps,
  RenderEditorProps,
  RenderHighlightProps,
  RenderContentProps,
  RenderOverlayProps,
  renderDraggableHighlightProps,
  Annotation as AnnotationType,
  AnnotationValue
} from '../types/core';

// Type guard to ensure annotation has required geometry properties
const isValidAnnotation = (annotation: AnnotationType | AnnotationValue): annotation is AnnotationType => {
  return !!(annotation.geometry && annotation.data?.id);
};

// Updated default props with proper typing and React 19 patterns
export const defaultProps: Partial<AnnotationProps> = {
  // Basic settings
  disableAnnotation: false,
  disableSelector: false,
  disableEditor: false,
  disableOverlay: false,
  allowTouch: false,

  // Selectors configuration
  type: RectangleSelector.TYPE,
  selectors: [
    RectangleSelector,
    PointSelector,
    OvalSelector
  ],

  // Comparator for active annotations
  activeAnnotationComparator: (a, b) => a === b,

  // Editing functionality defaults
  enableEditing: false,
  onAnnotationsChange: () => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        'onAnnotationsChange not provided. Annotation editing will not persist changes. ' +
        'Please provide an onAnnotationsChange prop to handle annotation updates.'
      );
    }
  },

  // Render functions with improved typing
  renderSelector: ({ annotation }: RenderSelectorProps) => {
    switch (annotation.geometry?.type) {
      case RectangleSelector.TYPE:
        return (
          <FancyRectangle
            annotation={annotation as any}
          />
        )
      case PointSelector.TYPE:
        return (
          <Point
            annotation={annotation as any}
          />
        )
      case OvalSelector.TYPE:
        return (
          <Oval
            annotation={annotation as any}
          />
        )
      default:
        return null
    }
  },

  renderEditor: ({ annotation, onChange, onSubmit }: RenderEditorProps) => (
    <Editor
      annotation={annotation}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  ),

  renderHighlight: ({ key, annotation, active }: RenderHighlightProps) => {
    switch (annotation.geometry.type) {
      case RectangleSelector.TYPE:
        return (
          <Rectangle
            key={key}
            annotation={annotation as any}
            active={active}
          />
        )
      case PointSelector.TYPE:
        return (
          <Point
            key={key}
            annotation={annotation as any}
          />
        )
      case OvalSelector.TYPE:
        return (
          <Oval
            key={key}
            annotation={annotation as any}
            active={active}
          />
        )
      default:
        return null
    }
  },

  renderContent: ({ key, annotation }: RenderContentProps) => (
    <Content
      key={key}
      annotation={annotation}
    />
  ),

  renderOverlay: ({ type, annotation }: RenderOverlayProps = {}) => {
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

  renderDraggableHighlight: ({ 
    key, 
    annotation, 
    active, 
    isDragging, 
    isHovered, 
    onDotDragStart, 
    onDotDrag, 
    onMoveStart, 
    onMove, 
    onDragEnd, 
    enableRemoval, 
    onRemoveAnnotation, 
    onConfirm, 
    onReset 
  }: renderDraggableHighlightProps) => {
    // Show draggable box for existing annotations that are hovered
    if (!annotation.data?.id || !isHovered) {
      // For inactive or new annotations, use regular highlight
      switch (annotation.geometry.type) {
        case RectangleSelector.TYPE:
          return (
            <Rectangle
              key={key}
              annotation={annotation as any}
              active={active}
            />
          )
        case PointSelector.TYPE:
          return (
            <Point
              key={key}
              annotation={annotation as any}
            />
          )
        case OvalSelector.TYPE:
          return (
            <Oval
              key={key}
              annotation={annotation as any}
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
          enableRemoval={enableRemoval}
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
        annotation={annotation as any}
        active={active}
      />
    )
  }
};

export default defaultProps; 