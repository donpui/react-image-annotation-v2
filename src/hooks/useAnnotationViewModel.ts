import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useHoveredAnnotation } from './useHoveredAnnotation';
import { useInteractionFocus } from './useInteractionFocus';
import { useSelectorMethods } from './useSelectorMethods';
import { useDragging } from './useDragging';
import { usePinnedControlsHover } from './usePinnedControlsHover';
import { getOffsetCoordPercentage } from '../utils/offsetCoordinates';
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

/** Max pointer travel (px) to treat as click-to-edit instead of a draw. */
const CLICK_EDIT_MOVE_THRESHOLD_PX = 5;

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
  /** Geometry hit on pointer down — used to engage edit only on click (not drag). */
  const pendingEditIdRef = useRef<string | number | null>(null);
  const pointerDownClientRef = useRef<{ x: number; y: number } | null>(null);

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

  const {
    hoveredAnnotation,
    getTopAnnotationAt,
    mouseHandlers: hoveredMouseHandlers,
  } = useHoveredAnnotation({
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

      const pendingId = pendingEditIdRef.current;
      const down = pointerDownClientRef.current;
      pendingEditIdRef.current = null;
      pointerDownClientRef.current = null;

      // Click (no meaningful drag) on existing AOI → edit; drag always draws.
      if (
        pendingId != null &&
        down &&
        enableEditing &&
        showContentOnHover
      ) {
        const dx = Math.abs(e.clientX - down.x);
        const dy = Math.abs(e.clientY - down.y);
        if (dx <= CLICK_EDIT_MOVE_THRESHOLD_PX && dy <= CLICK_EDIT_MOVE_THRESHOLD_PX) {
          engageEdit(pendingId);
          onChange?.({});
        }
      }

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
      enableEditing,
      showContentOnHover,
      engageEdit,
      onChange,
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

      pendingEditIdRef.current = null;
      pointerDownClientRef.current = { x: e.clientX, y: e.clientY };

      // Remember geometry hits for click-to-edit, but always allow a draw to start
      // so new AOIs can be created next to / overlapping existing ones.
      if (
        enableEditing &&
        showContentOnHover &&
        !isCreatingNew &&
        !isCreationEditorOpen
      ) {
        const target = targetRef.current;
        if (target) {
          const { x, y } = getOffsetCoordPercentage(e.nativeEvent, target);
          pendingEditIdRef.current =
            getTopAnnotationAt(x, y)?.data?.id ?? null;
        }
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
      getTopAnnotationAt,
      isCreationEditorOpen,
      value?.selection?.mode,
      value?.selection?.showEditor,
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
