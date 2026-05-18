import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useHoveredAnnotation } from './useHoveredAnnotation';
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
    disableSelector,
    disableEditor,
    disableOverlay,
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

  const { hoveredAnnotation, mouseHandlers: hoveredMouseHandlers } =
    useHoveredAnnotation({
      targetRef: targetRef as React.RefObject<HTMLElement>,
      imageRef: internalImageRef as React.RefObject<HTMLImageElement>,
      annotations,
      selectors,
      enableEditing,
      throttleMs: 50,
    });

  const previewMode = !!(onConfirm && onReset);

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
    },
    [handleConfirm, onConfirm]
  );

  const handleResetWithCallback = useCallback(
    (annotationId: string | number) => {
      handleReset(annotationId);
      onReset?.(annotationId);
    },
    [handleReset, onReset]
  );

  const effectiveType = type || selectors[0]?.TYPE;

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
    },
    [hoveredMouseHandlers]
  );

  const handleInteractionTargetMouseUp = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onImageMouseUp?.(e);
      callSelectorMethod('onMouseUp', e);
    },
    [onImageMouseUp, callSelectorMethod]
  );

  const handleInteractionTargetMouseDown = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onImageMouseDown?.(e);
      callSelectorMethod('onMouseDown', e);
    },
    [onImageMouseDown, callSelectorMethod]
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
    if (value?.selection?.showEditor) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [value?.selection?.showEditor, handleKeyDown]);

  const topAnnotationAtMouse = hoveredAnnotation;

  const {
    pinnedControlsId,
    onDeleteControlMouseEnter,
    onDeleteControlMouseLeave,
  } = usePinnedControlsHover(hoveredAnnotation);

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
      editorDisabled: !!disableEditor || (enableEditing && isDragging),
      contentDisabled: !!disableContent,
      hitTestingDisabled: !!disableHitTesting || (enableEditing && isDragging),
      enableEditing,
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
      onConfirm: enableEditing ? handleConfirmWithCallback : undefined,
      onReset: enableEditing ? handleResetWithCallback : undefined,
      enableRemoval,
      onRemoveAnnotation,
      canRemoveAnnotation,
      onDeleteControlMouseEnter,
      onDeleteControlMouseLeave,
    },
    value,
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
