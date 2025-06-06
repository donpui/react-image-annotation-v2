# Editing Functionality

The library now supports editing annotations through dragging and resizing. This functionality can be enabled by setting the `enableEditing` prop to `true`.

## Quick Start (Using Defaults)

The simplest way to enable editing is to just provide the `enableEditing` and `onAnnotationsChange` props:

```tsx
import React, { useState, useCallback } from 'react';
import Annotation, { AnnotationType, AnnotationValue } from 'react-image-annotation-v2';

const EditableAnnotationComponent = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([]);

  const handleAnnotationsChange = useCallback((newAnnotations: AnnotationType[]) => {
    setAnnotations(newAnnotations);
  }, []);

  return (
    <Annotation
      src={imageUrl}
      annotations={annotations}
      // ... other required props
      enableEditing={true}
      onAnnotationsChange={handleAnnotationsChange}
      // renderDraggableHighlight will use the default implementation
    />
  );
};
```

## Custom Implementation

For more control, you can provide a custom `renderDraggableHighlight`:

```tsx
import React, { useState, useCallback } from 'react';
import Annotation, { 
  AnnotationType, 
  AnnotationValue, 
  RectangleSelector, 
  DraggableBox 
} from 'react-image-annotation-v2';

const EditableAnnotationComponent = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([]);
  const [annotation, setAnnotation] = useState<AnnotationValue>({});

  const handleAnnotationsChange = useCallback((newAnnotations: AnnotationType[]) => {
    setAnnotations(newAnnotations);
  }, []);

  const renderDraggableHighlight = useCallback(({
    annotation,
    active,
    isDragging,
    onDotDragStart,
    onDotDrag,
    onMoveStart,
    onMove,
    onDragEnd
  }) => {
    // Only show draggable box for existing annotations that are active
    if (!annotation.data?.id || !active) {
      return (
        <Rectangle
          annotation={annotation}
          active={active}
        />
      );
    }
    
    return (
      <DraggableBox
        annotation={annotation}
        onDotDragStart={onDotDragStart}
        onDotDrag={onDotDrag}
        onMoveStart={onMoveStart}
        onMove={onMove}
        onDragEnd={onDragEnd}
        isDragging={isDragging}
      />
    );
  }, []);

  return (
    <Annotation
      src={imageUrl}
      annotations={annotations}
      value={annotation}
      onChange={setAnnotation}
      onSubmit={handleSubmit}
      enableEditing={true}
      onAnnotationsChange={handleAnnotationsChange}
      renderDraggableHighlight={renderDraggableHighlight}
      // ... other required props
    />
  );
};
```

## Props

### New Props for Editing

- `enableEditing?: boolean` - Enables the editing functionality (default: `false`)
- `onAnnotationsChange?: (annotations: AnnotationType[]) => void` - Callback when annotations are modified through dragging (default: warning message)
- `renderDraggableHighlight?: (props) => React.ReactNode` - Custom renderer for draggable annotations (default: DraggableBox for rectangles, regular highlight for others)

### DraggableBox Component

The `DraggableBox` component provides dragging and resizing functionality:

- **Move**: Click and drag anywhere on the annotation box to move it
- **Resize**: Use the dots on the edges to resize the annotation
- **Center handle**: Use the center move button for precise positioning

## Features

1. **Hover to Edit**: Annotations become draggable immediately when you hover over them
2. **Drag to Move**: Click and drag annotations to reposition them
3. **Resize**: Use corner and edge handles to resize annotations
4. **Live Updates**: Annotations update in real-time during dragging
5. **Boundary Constraints**: Annotations are constrained within the image boundaries
6. **Enhanced Visual Feedback**: Improved styling on hover and during drag operations

## Integration

The editing functionality is fully integrated into the main annotation component. When `enableEditing` is enabled:

- The internal state management handles annotation updates
- The `useDragging` hook manages drag operations
- Visual feedback is provided during interactions
- All changes are propagated through the `onAnnotationsChange` callback

This allows for seamless editing while maintaining backward compatibility with existing implementations. 