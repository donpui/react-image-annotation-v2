import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Annotation } from '../types/core';

interface UseInteractionFocusArgs {
  enableEditing: boolean;
  isDrawing: boolean;
  /** New-annotation editor open (e.g. Save description) — ignore other AOIs. */
  isCreationEditorOpen: boolean;
  isDragging: boolean;
  draggingAnnotationId: string | number | undefined;
  hasPendingChanges: (annotationId: string | number) => boolean;
  annotations: Annotation[];
  hoveredAnnotation: Annotation | undefined;
  /**
   * When false (e.g. `renderContent` is used), hover shows content only;
   * call `engageEdit` (mousedown) before locking edit/drag chrome.
   */
  lockEditSessionOnHover?: boolean;
}

export interface UseInteractionFocusReturn {
  /** Annotation that owns hover/edit UI; undefined while drawing a new region. */
  effectiveTopAnnotation: Annotation | undefined;
  /** When set, only this annotation is active / editable. */
  focusAnnotationId: string | number | null;
  clearEditingSession: () => void;
  engageEdit: (annotationId: string | number) => void;
  onContainerMouseLeave: () => void;
}

/**
 * Keeps a single annotation "in focus" while drawing or editing so nearby
 * annotations do not steal hover, labels, or draggable chrome.
 */
export function useInteractionFocus({
  enableEditing,
  isDrawing,
  isCreationEditorOpen,
  isDragging,
  draggingAnnotationId,
  hasPendingChanges,
  annotations,
  hoveredAnnotation,
  lockEditSessionOnHover = true,
}: UseInteractionFocusArgs): UseInteractionFocusReturn {
  const [editingSessionId, setEditingSessionId] = useState<
    string | number | null
  >(null);
  const editingSessionIdRef = useRef<string | number | null>(null);
  const lockExistingAnnotations = isDrawing || isCreationEditorOpen;
  const [prevLockExistingAnnotations, setPrevLockExistingAnnotations] =
    useState(lockExistingAnnotations);

  if (lockExistingAnnotations !== prevLockExistingAnnotations) {
    setPrevLockExistingAnnotations(lockExistingAnnotations);
    if (lockExistingAnnotations) {
      editingSessionIdRef.current = null;
      setEditingSessionId(null);
    }
  }

  const clearEditingSession = useCallback(() => {
    editingSessionIdRef.current = null;
    setEditingSessionId(null);
  }, []);

  const engageEdit = useCallback((annotationId: string | number) => {
    editingSessionIdRef.current = annotationId;
    setEditingSessionId(annotationId);
  }, []);

  const onContainerMouseLeave = useCallback(() => {
    // Click-to-edit (renderContent): keep session until ✓/✕; hover-to-edit clears on leave.
    if (lockEditSessionOnHover) {
      clearEditingSession();
    }
  }, [lockEditSessionOnHover, clearEditingSession]);

  useEffect(() => {
    if (!enableEditing || lockExistingAnnotations || !lockEditSessionOnHover) {
      return;
    }

    const hoveredId = hoveredAnnotation?.data?.id;
    if (hoveredId == null) {
      return;
    }

    if (editingSessionIdRef.current == null) {
      editingSessionIdRef.current = hoveredId;
      setEditingSessionId(hoveredId);
    }
  }, [
    enableEditing,
    lockExistingAnnotations,
    lockEditSessionOnHover,
    hoveredAnnotation?.data?.id,
  ]);

  const pendingAnnotationId = useMemo(() => {
    for (const annotation of annotations) {
      const id = annotation.data?.id;
      if (id != null && hasPendingChanges(id)) {
        return id;
      }
    }
    return undefined;
  }, [annotations, hasPendingChanges]);

  const focusAnnotationId = useMemo((): string | number | null => {
    if (lockExistingAnnotations) {
      return null;
    }
    if (isDragging && draggingAnnotationId != null) {
      return draggingAnnotationId;
    }
    if (pendingAnnotationId != null) {
      return pendingAnnotationId;
    }
    if (enableEditing && editingSessionId != null) {
      return editingSessionId;
    }
    return null;
  }, [
    lockExistingAnnotations,
    isDragging,
    draggingAnnotationId,
    pendingAnnotationId,
    enableEditing,
    editingSessionId,
  ]);

  const effectiveTopAnnotation = useMemo((): Annotation | undefined => {
    if (lockExistingAnnotations) {
      return undefined;
    }
    if (focusAnnotationId != null) {
      return annotations.find(
        (annotation) => annotation.data?.id === focusAnnotationId
      );
    }
    return hoveredAnnotation;
  }, [lockExistingAnnotations, focusAnnotationId, annotations, hoveredAnnotation]);

  return {
    effectiveTopAnnotation,
    focusAnnotationId,
    clearEditingSession,
    engageEdit,
    onContainerMouseLeave,
  };
}
