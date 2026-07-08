import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useHoveredAnnotation } from './useHoveredAnnotation';
import { useInteractionFocus } from './useInteractionFocus';
import { useSelectorMethods } from './useSelectorMethods';
import { useDragging } from './useDragging';
import { usePinnedControlsHover } from './usePinnedControlsHover';
import type {
  AnnotationProps,
  Annotation as AnnotationType,
  AnnotationEvent,
} from '../types/core';
import type { AnnotationLayoutProps } from '../components/AnnotationLayout';

function assignRef<T>(ref: React.Ref<T> | undefined, value: T | null) {
  if (!ref) return;
  if (typeof ref === 'function') {
    ref(value);
  } else {
    ref.current = value;
  }
}

type ViewModelArgs = Omit<AnnotationProps, 'children'>;

/**
 * Pointer, touch, refs, and selector wiring for {@link AnnotationLayout}.
 */
export function useAnnotationViewModel(
  props: ViewModelArgs,
  forwardedImageRef: React.Ref<HTMLImageElement | null> | undefined
): Omit<AnnotationLayoutProps, 'children'> {
  const {
    src,
    alt = 'Annotation Image',
    style,
    className,
    containerRef,
    imageRef,
    annotations,
    type,
    selectors,
    value,
    onChange,
    onSubmit,
    activeAnnotationComparator,
    activeAnnotations,
    editModeAnnotationIds,
    disableAnnotation,
    drawingCursor,
    disableSelector,
    disableEditor,
    disableOverlay,
    showOverlayOnce,
    disableContent,
    disableHitTesting,
    allowTouch,
    enableEditing = false,
    onAnnotationsChange,
    renderSelector,
    renderEditor,
    renderHighlight,
    renderDraggableHighlight,
    renderContent,
    renderOverlay,
    enableRemoval,
    onRemoveAnnotation,
    canRemoveAnnotation,
    renderDelete,
    onConfirm,
    onReset,
    onImageMouseUp,
    onImageMouseDown,
    onImageMouseMove,
    onImageClick,
    onImageLoad,
    onImageError,
  } = props;

  const internalImageRef = useRef<HTMLImageElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const previewMode = !!(onConfirm && onReset);
  const isDrawing =
    value?.selection?.mode === 'SELECTING' ||
    value?.selection?.mode === 'COLLECTING_POINTS';
  const isCreationEditorOpen = !!value?.selection?.showEditor;
  const isCreatingAnnotation = isDrawing || isCreationEditorOpen;
  const dismissOverlayTrigger = showOverlayOnce && isCreatingAnnotation;
  const [overlayDismissed, setOverlayDismissed] = useState(false);
  const [prevDismissOverlayTrigger, setPrevDismissOverlayTrigger] = useState(
    dismissOverlayTrigger
  );
  const showContentOnHover = !disableContent && !!renderContent;

  if (dismissOverlayTrigger !== prevDismissOverlayTrigger) {
    setPrevDismissOverlayTrigger(dismissOverlayTrigger);
    if (dismissOverlayTrigger) {
      setOverlayDismissed(true);
    }
  }

  const overlayHoverEnabled =
    !isCreatingAnnotation && !(showOverlayOnce && overlayDismissed);

  const {
    isDragging,
    draggingAnnotationId,
    hasPendingChanges,
    onDotDragStart,
    onDotDrag,
    onMoveStart,
    onMove,
    onDragEnd,
    handleConfirm,
    handleReset,
    getEffectiveAnnotation,
  } = useDragging({
    annotations,
    onAnnotationsChange,
    imageRef: internalImageRef,
    previewMode,
  });

  const { hoveredAnnotation, mouseHandlers: hoveredMouseHandlers } =
    useHoveredAnnotation({
      targetRef: targetRef as React.RefObject<HTMLElement>,
      imageRef: internalImageRef as React.RefObject<HTMLImageElement>,
      annotations,
      selectors,
      enableEditing,
      suppressHover: isDrawing || isCreationEditorOpen,
      throttleMs: 50,
    });

  const {
    effectiveTopAnnotation,
    focusAnnotationId,
    clearEditingSession,
    engageEdit,
    onContainerMouseLeave: clearEditingSessionOnLeave,
  } = useInteractionFocus({
    enableEditing,
    isDrawing,
    isCreationEditorOpen,
    isDragging,
    draggingAnnotationId,
    hasPendingChanges,
    annotations,
    hoveredAnnotation,
    lockEditSessionOnHover: !showContentOnHover,
  });

  useEffect(() => {
    if (isDragging && draggingAnnotationId != null) {
      engageEdit(draggingAnnotationId);
    }
  }, [isDragging, draggingAnnotationId, engageEdit]);

  const draggingHandlers = useMemo(
    () => ({
      onDotDragStart,
      onDotDrag,
      onMoveStart,
      onMove,
      onDragEnd,
    }),
    [onDotDragStart, onDotDrag, onMoveStart, onMove, onDragEnd]
  );

  const handleConfirmWithCallback = useCallback(
    (annotationId: string | number) => {
      handleConfirm(annotationId);
      onConfirm?.(annotationId);
      clearEditingSession();
    },
    [handleConfirm, onConfirm, clearEditingSession]
  );

  const handleResetWithCallback = useCallback(
    (annotationId: string | number) => {
      handleReset(annotationId);
      onReset?.(annotationId);
      clearEditingSession();
    },
    [handleReset, onReset, clearEditingSession]
  );

  const effectiveType = type || selectors[0]?.TYPE;

  const applyDrawingCursorToTarget = useCallback(
    (cursor: string) => {
      if (targetRef.current) {
        targetRef.current.style.cursor = cursor;
      }
    },
    []
  );

  const clearDrawingCursorFromTarget = useCallback(() => {
    if (targetRef.current) {
      targetRef.current.style.removeProperty('cursor');
    }
  }, []);

  useEffect(() => {
    if (!drawingCursor || !isDrawing) {
      document.body.style.removeProperty('cursor');
      return;
    }
    const previous = document.body.style.cursor;
    document.body.style.cursor = drawingCursor;
    return () => {
      document.body.style.cursor = previous;
    };
  }, [drawingCursor, isDrawing]);

  const { callSelectorMethod } = useSelectorMethods({
    selectors,
    effectiveType,
    value,
    onChange,
    disableAnnotation,
  });

  const handleTouchStart = useCallback(
    (e: globalThis.TouchEvent) => {
      if (
        navigator.userAgent.toLowerCase().includes('safari') &&
        !navigator.userAgent.toLowerCase().includes('chrome') &&
        allowTouch
      ) {
        e.preventDefault();
      }
      callSelectorMethod('onTouchStart', e);
    },
    [allowTouch, callSelectorMethod]
  );

  const handleTouchEnd = useCallback(
    (e: globalThis.TouchEvent) => {
      callSelectorMethod('onTouchEnd', e);
    },
    [callSelectorMethod]
  );

  const handleTouchMove = useCallback(
    (e: globalThis.TouchEvent) => {
      hoveredMouseHandlers.onTouchMove(e);
      if (
        navigator.userAgent.toLowerCase().includes('safari') &&
        !navigator.userAgent.toLowerCase().includes('chrome') &&
        allowTouch
      ) {
        e.preventDefault();
      }
      callSelectorMethod('onTouchMove', e);
    },
    [hoveredMouseHandlers, allowTouch, callSelectorMethod]
  );

  const handleTouchLeave = useCallback(
    (e: globalThis.TouchEvent) => {
      hoveredMouseHandlers.onTouchLeave(e);
    },
    [hoveredMouseHandlers]
  );

  useEffect(() => {
    const targetElement = targetRef.current;
    if (!allowTouch || !targetElement) return;

    targetElement.ontouchstart = handleTouchStart;
    targetElement.ontouchend = handleTouchEnd;
    targetElement.ontouchmove = handleTouchMove;
    targetElement.ontouchcancel = handleTouchLeave;

    return () => {
      targetElement.ontouchstart = null;
      targetElement.ontouchend = null;
      targetElement.ontouchmove = null;
      targetElement.ontouchcancel = null;
    };
  }, [
    allowTouch,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
    handleTouchLeave,
  ]);

  const setImageRef = useCallback(
    (el: HTMLImageElement | null) => {
      internalImageRef.current = el;
      assignRef(forwardedImageRef, el);
      assignRef(imageRef, el);
    },
    [forwardedImageRef, imageRef]
  );

  const setTargetRef = useCallback((el: HTMLDivElement | null) => {
    targetRef.current = el;
  }, []);

  const setContainerRef = useCallback(
    (el: HTMLDivElement | null) => {
      assignRef(containerRef, el);
    },
    [containerRef]
  );

  const handleTargetMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      hoveredMouseHandlers.onMouseMove(e.nativeEvent);
      onImageMouseMove?.(e as unknown as React.MouseEvent<HTMLElement>);
      callSelectorMethod('onMouseMove', e as unknown as AnnotationEvent);
    },
    [hoveredMouseHandlers, onImageMouseMove, callSelectorMethod]
  );

  const handleTargetMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      hoveredMouseHandlers.onMouseLeave(e.nativeEvent);
      clearEditingSessionOnLeave();
    },
    [hoveredMouseHandlers, clearEditingSessionOnLeave]
  );

  const handleInteractionTargetMouseUp = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onImageMouseUp?.(e);
      callSelectorMethod('onMouseUp', e);
      if (drawingCursor && !disableAnnotation) {
        clearDrawingCursorFromTarget();
        if (!isDrawing) {
          document.body.style.removeProperty('cursor');
        }
      }
    },
    [
      onImageMouseUp,
      callSelectorMethod,
      drawingCursor,
      disableAnnotation,
      clearDrawingCursorFromTarget,
      isDrawing,
    ]
  );

  const handleInteractionTargetMouseDown = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (drawingCursor && !disableAnnotation) {
        applyDrawingCursorToTarget(drawingCursor);
        document.body.style.cursor = drawingCursor;
      }

      const isCreatingNew =
        value?.selection?.mode === 'SELECTING' ||
        value?.selection?.mode === 'COLLECTING_POINTS' ||
        !!value?.selection?.showEditor;
      const existingId = effectiveTopAnnotation?.data?.id;
      const pointerOverExisting =
        enableEditing &&
        !isCreatingNew &&
        !isCreationEditorOpen &&
        existingId != null;

      if (pointerOverExisting) {
        if (showContentOnHover) {
          engageEdit(existingId);
        }
        onImageMouseDown?.(e);
        return;
      }

      onImageMouseDown?.(e);
      callSelectorMethod('onMouseDown', e);
    },
    [
      drawingCursor,
      disableAnnotation,
      applyDrawingCursorToTarget,
      enableEditing,
      showContentOnHover,
      effectiveTopAnnotation?.data?.id,
      isCreationEditorOpen,
      value?.selection?.mode,
      value?.selection?.showEditor,
      engageEdit,
      onImageMouseDown,
      callSelectorMethod,
    ]
  );

  const handleInteractionTargetClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onImageClick?.(e);
      callSelectorMethod('onClick', e);
    },
    [onImageClick, callSelectorMethod]
  );

  const handleEditorSubmit = useCallback(() => {
    if (onSubmit && value) {
      onSubmit(value);
    }
  }, [onSubmit, value]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onChange) {
        if (value?.selection?.showEditor || value?.geometry) {
          onChange({
            selection: undefined,
            geometry: undefined,
            data: undefined,
          });
        }
      }
    },
    [value, onChange]
  );

  useEffect(() => {
    const active =
      value?.selection?.showEditor ||
      value?.selection?.mode === 'COLLECTING_POINTS';
    if (active) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [value?.selection?.showEditor, value?.selection?.mode, handleKeyDown]);

  const topAnnotationAtMouse = effectiveTopAnnotation;

  const {
    pinnedControlsId,
    onDeleteControlMouseEnter,
    onDeleteControlMouseLeave,
  } = usePinnedControlsHover(effectiveTopAnnotation);

  const shouldAnnotationBeActive = useCallback(
    (annotation: AnnotationType, topAnnotation?: AnnotationType): boolean => {
      const annotationId = annotation.data?.id;
      if (
        annotationId != null &&
        pinnedControlsId != null &&
        annotationId === pinnedControlsId
      ) {
        return true;
      }

      if (activeAnnotations) {
        const isActive = activeAnnotations.some((active) =>
          activeAnnotationComparator
            ? activeAnnotationComparator(annotation, active)
            : annotation.data.id === active
        );
        return isActive || topAnnotation === annotation;
      }
      return topAnnotation === annotation;
    },
    [activeAnnotations, activeAnnotationComparator, pinnedControlsId]
  );

  return {
    setContainerRef,
    style,
    className,
    onContainerMouseLeave: handleTargetMouseLeave,
    onContainerTouchCancel:
      handleTouchLeave as unknown as React.TouchEventHandler<HTMLDivElement>,
    onContainerMouseMove: handleTargetMouseMove,
    setImageRef,
    src,
    alt,
    annotations,
    layoutOptions: {
      touchEnabled: allowTouch,
      selectorDisabled: !!disableSelector || (enableEditing && isDragging),
      overlayDisabled: !!disableOverlay,
      overlayHoverEnabled,
      editorDisabled: !!disableEditor || (enableEditing && isDragging),
      contentDisabled: !!disableContent,
      hitTestingDisabled:
        !!disableHitTesting ||
        (enableEditing && isDragging) ||
        isCreationEditorOpen,
      enableEditing,
      drawingCursor,
      disableAnnotation,
    },
    onImageLoad,
    onImageError,
    annotationState: {
      getIsActive: shouldAnnotationBeActive,
      topAnnotation: topAnnotationAtMouse,
      editModeIds: editModeAnnotationIds,
      isDragging,
      draggingAnnotationId,
      hasPendingChanges,
      getEffectiveAnnotation: enableEditing ? getEffectiveAnnotation : undefined,
      draggingHandlers: enableEditing ? draggingHandlers : undefined,
      focusAnnotationId,
      showContentOnHover,
      engageEdit:
        enableEditing && showContentOnHover ? engageEdit : undefined,
      onConfirm: enableEditing ? handleConfirmWithCallback : undefined,
      onReset: enableEditing ? handleResetWithCallback : undefined,
      enableRemoval,
      onRemoveAnnotation,
      canRemoveAnnotation,
      onDeleteControlMouseEnter,
      onDeleteControlMouseLeave,
    },
    value,
    isDrawing,
    isCreatingAnnotation,
    setTargetRef,
    onInteractionTargetClick: handleInteractionTargetClick,
    onInteractionTargetMouseUp: handleInteractionTargetMouseUp,
    onInteractionTargetMouseDown: handleInteractionTargetMouseDown,
    effectiveType,
    onChange,
    onEditorSubmit: handleEditorSubmit,
    renderSlots: {
      renderHighlight,
      renderDraggableHighlight,
      renderSelector,
      renderOverlay,
      renderContent,
      renderEditor,
      renderDelete,
    },
  };
}
