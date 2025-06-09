import { useState, useCallback, useRef, useEffect } from 'react';
import { Annotation } from '../components/Annotation';

interface DraggingState {
  isDragging: boolean;
  draggingId: string | null;
  activeAnnotationId: string | null;
  initialGeometry: any | null;
}

export const useDragging = (
  annotations: Annotation[],
  onAnnotationsUpdate: (annotations: Annotation[]) => void,
  hasConfirmMode?: boolean
) => {
  const [isDragging, setIsDragging] = useState(false);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [activeAnnotationId, setActiveAnnotationId] = useState<string | null>(null);
  const [editingAnnotationId, setEditingAnnotationId] = useState<string | null>(null); // Global editing state for confirm mode
  const initialGeometry = useRef<any | null>(null);
  const currentAnnotations = useRef<Annotation[]>(annotations);
  
  // For confirm mode - store original and preview states
  const originalAnnotations = useRef<Annotation[]>(annotations);
  const [previewAnnotations, setPreviewAnnotations] = useState<Annotation[]>(annotations);
  
  // Keep ref in sync with prop
  currentAnnotations.current = hasConfirmMode ? previewAnnotations : annotations;
  
  // Update original and preview when annotations change externally (using useEffect to prevent infinite renders)
  useEffect(() => {
    if (!hasConfirmMode || !isDragging) {
      originalAnnotations.current = annotations;
      if (hasConfirmMode) {
        setPreviewAnnotations(annotations);
      }
    }
  }, [annotations, hasConfirmMode, isDragging]);

  const handleDrag = useCallback((id: string, isDragging: boolean) => {
    const updatedAnnotations = currentAnnotations.current.map(ann => 
      ann.data.id === id ? { ...ann, isDragging } : ann
    );
    currentAnnotations.current = updatedAnnotations;
    
    if (hasConfirmMode) {
      // In confirm mode, only update preview
      setPreviewAnnotations(updatedAnnotations);
    } else {
      // In normal mode, immediately update parent
      onAnnotationsUpdate(updatedAnnotations);
    }
    
    setIsDragging(isDragging);
    setDraggingId(isDragging ? id : null);
  }, [onAnnotationsUpdate, hasConfirmMode]);

  const handleDotDragStart = useCallback((annotationId: string, initialCursorPosition: { x: number; y: number }) => {
    if (hasConfirmMode) {
      setEditingAnnotationId(annotationId); // Set global editing state for confirm mode
    }
    handleDrag(annotationId, true);
    const annotation = currentAnnotations.current.find(a => a.data.id === annotationId);
    if (annotation) {
      initialGeometry.current = { ...annotation.geometry, initialCursorPosition };
    }
  }, [handleDrag, hasConfirmMode]);

  const handleDotDrag = useCallback((event: React.MouseEvent, position: string, initialCursorPosition: { x: number; y: number }) => {
    if (!draggingId || !initialGeometry.current) return;

    const deltaX = event.clientX - initialCursorPosition.x;
    const deltaY = event.clientY - initialCursorPosition.y;
    const container = document.querySelector('.annotation-container');
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const slideWidth = containerRect.width;
    const slideHeight = containerRect.height;
    const HUNDRED = 100;

    const newGeometry = { ...initialGeometry.current };

    switch (position) {
      case 'top':
        newGeometry.height = Math.min(
          initialGeometry.current.height - (deltaY / slideHeight) * HUNDRED,
          initialGeometry.current.y + initialGeometry.current.height
        );
        newGeometry.y = Math.max(initialGeometry.current.y + (deltaY / slideHeight) * HUNDRED, 0);
        break;
      case 'right':
        newGeometry.width = Math.min(
          initialGeometry.current.width + (deltaX / slideWidth) * HUNDRED,
          HUNDRED - initialGeometry.current.x
        );
        break;
      case 'bottom':
        newGeometry.height = Math.min(
          initialGeometry.current.height + (deltaY / slideHeight) * HUNDRED,
          HUNDRED - initialGeometry.current.y
        );
        break;
      case 'left':
        newGeometry.width = Math.min(
          initialGeometry.current.width - (deltaX / slideWidth) * HUNDRED,
          initialGeometry.current.x + initialGeometry.current.width
        );
        newGeometry.x = Math.max(initialGeometry.current.x + (deltaX / slideWidth) * HUNDRED, 0);
        break;
    }

    newGeometry.width = Math.max(newGeometry.width, 0);
    newGeometry.height = Math.max(newGeometry.height, 0);
    newGeometry.x = Math.min(newGeometry.x, HUNDRED - newGeometry.width);
    newGeometry.y = Math.min(newGeometry.y, HUNDRED - newGeometry.height);

    const updatedAnnotations = currentAnnotations.current.map(a => 
      a.data.id === draggingId 
        ? { ...a, geometry: newGeometry }
        : a
    );
    currentAnnotations.current = updatedAnnotations;
    
    if (hasConfirmMode) {
      // In confirm mode, only update preview
      setPreviewAnnotations(updatedAnnotations);
    } else {
      // In normal mode, immediately update parent
      onAnnotationsUpdate(updatedAnnotations);
    }
  }, [draggingId, onAnnotationsUpdate, hasConfirmMode]);

  const handleMoveStart = useCallback((annotationId: string, initialCursorPosition: { x: number; y: number }) => {
    if (hasConfirmMode) {
      setEditingAnnotationId(annotationId); // Set global editing state for confirm mode
    }
    handleDrag(annotationId, true);
    const annotation = currentAnnotations.current.find(a => a.data.id === annotationId);
    if (annotation) {
      initialGeometry.current = { ...annotation.geometry, initialCursorPosition };
    }
  }, [handleDrag, hasConfirmMode]);

  const handleMove = useCallback((event: React.MouseEvent, initialCursorPosition: { x: number; y: number }) => {
    if (!draggingId || !initialGeometry.current) return;

    const deltaX = event.clientX - initialCursorPosition.x;
    const deltaY = event.clientY - initialCursorPosition.y;
    const container = document.querySelector('.annotation-container');
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const slideWidth = containerRect.width;
    const slideHeight = containerRect.height;
    const HUNDRED = 100;

    const newGeometry = { ...initialGeometry.current };
    newGeometry.x = Math.max(
      Math.min(
        initialGeometry.current.x + (deltaX / slideWidth) * HUNDRED,
        HUNDRED - initialGeometry.current.width
      ),
      0
    );
    newGeometry.y = Math.max(
      Math.min(
        initialGeometry.current.y + (deltaY / slideHeight) * HUNDRED,
        HUNDRED - initialGeometry.current.height
      ),
      0
    );

    const updatedAnnotations = currentAnnotations.current.map(a => 
      a.data.id === draggingId 
        ? { ...a, geometry: newGeometry }
        : a
    );
    currentAnnotations.current = updatedAnnotations;
    
    if (hasConfirmMode) {
      // In confirm mode, only update preview
      setPreviewAnnotations(updatedAnnotations);
    } else {
      // In normal mode, immediately update parent
      onAnnotationsUpdate(updatedAnnotations);
    }
  }, [draggingId, onAnnotationsUpdate, hasConfirmMode]);

  const handleMouseUp = useCallback(() => {
    if (draggingId) {
      // Don't call handleDrag here as it might use stale annotations
      // Just update the local state
      setIsDragging(false);
      setDraggingId(null);
    }
    initialGeometry.current = null;
  }, [draggingId]);

  const handleConfirm = useCallback((annotationId: string | number) => {
    console.log('handleConfirm hasConfirmMode', hasConfirmMode);
    
      onAnnotationsUpdate(previewAnnotations);
      originalAnnotations.current = previewAnnotations;
      setEditingAnnotationId(null); // Clear editing state
      setDraggingId(null); // Clear hover state to exit edit mode
      setIsDragging(false); // Clear dragging state
  }, [onAnnotationsUpdate, previewAnnotations]);

  const handleReset = useCallback((annotationId: string | number) => {
    setPreviewAnnotations(originalAnnotations.current);
    currentAnnotations.current = originalAnnotations.current;
    setEditingAnnotationId(null); // Clear editing state
    setDraggingId(null); // Clear hover state to exit edit mode
    setIsDragging(false); // Clear dragging state
  }, []);

  return {
    isDragging,
    draggingId,
    activeAnnotationId,
    editingAnnotationId,
    setActiveAnnotationId,
    setDraggingId,
    handleDotDragStart,
    handleDotDrag,
    handleMoveStart,
    handleMove,
    handleMouseUp,
    handleConfirm,
    handleReset,
    // Return the appropriate annotations for display
    displayAnnotations: hasConfirmMode ? previewAnnotations : annotations,
  };
}; 