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

  const handleRemoveAnnotation = useCallback((annotationId: string | number) => {
    setAnnotations(prev => prev.filter(ann => ann.data.id !== annotationId));
  }, []);

  const handleConfirm = useCallback((annotationId: string | number) => {
    console.log('Confirmed changes for annotation:', annotationId);
    // Save changes to backend, show success message, etc.
  }, []);

  const handleReset = useCallback((annotationId: string | number) => {
    console.log('Reset changes for annotation:', annotationId);
    // Revert to original state
  }, []);

  return (
    <Annotation
      src={imageUrl}
      annotations={annotations}
      // ... other required props
      enableEditing={true}
      onAnnotationsChange={handleAnnotationsChange}
      enableRemoval={true}
      onRemoveAnnotation={handleRemoveAnnotation}
      onConfirm={handleConfirm}
      onReset={handleReset}
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

### New Props for Delete Functionality

- `enableRemoval?: boolean` - Enables the delete functionality (default: `false`)
- `onRemoveAnnotation?: (annotationId: string | number) => void` - Callback when an annotation is deleted

### New Props for Confirm/Reset Functionality

- `onConfirm?: (annotationId: string | number) => void` - Callback when user confirms changes (enables preview mode when provided with onReset)
- `onReset?: (annotationId: string | number) => void` - Callback when user resets changes (both callbacks required for preview mode)

**Preview Mode**: When both `onConfirm` and `onReset` are provided, the component enters "preview mode" where:
- Drag operations show visual changes but don't immediately apply them
- Changes are only applied to the parent state when the ✓ (confirm) button is clicked  
- The ✕ (reset) button reverts to the original state before any edits
- `onAnnotationsChange` is only called when changes are confirmed

### DraggableBox Component

The `DraggableBox` component provides dragging and resizing functionality:

- **Move**: Click and drag anywhere on the annotation box to move it
- **Resize**: Use the dots on the edges to resize the annotation
- **Center handle**: Use the center move button for precise positioning

## Features

1. **Hover to Edit**: Annotations become draggable immediately when you hover over them
2. **Drag to Move**: Click and drag annotations to reposition them
3. **Resize**: Use corner and edge handles to resize annotations
4. **Delete**: Optional delete button appears on hovered annotations (when enabled)
5. **Confirm/Reset**: Optional confirm (✓) and reset (✕) buttons with preview mode - changes are only applied when confirmed
6. **Live Updates**: Annotations update in real-time during dragging
7. **Boundary Constraints**: Annotations are constrained within the image boundaries
8. **Enhanced Visual Feedback**: Improved styling on hover and during drag operations
9. **Improved Hover Areas**: Larger interactive zones around control elements to prevent accidental loss of hover state

## Integration

The editing functionality is fully integrated into the main annotation component. When `enableEditing` is enabled:

- The internal state management handles annotation updates
- The `useDragging` hook manages drag operations
- Visual feedback is provided during interactions
- All changes are propagated through the `onAnnotationsChange` callback

This allows for seamless editing while maintaining backward compatibility with existing implementations. 