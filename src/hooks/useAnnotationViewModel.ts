import React, { useCallback, useEffect, useRef } from 'react';
import { useHoveredAnnotation } from './useHoveredAnnotation';
import { useSelectorMethods } from './useSelectorMethods';
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
    allowTouch,
    renderSelector,
    renderEditor,
    renderHighlight,
    renderContent,
    renderOverlay,
    onImageMouseUp,
    onImageMouseDown,
    onImageMouseMove,
    onImageClick,
  } = props;

  const internalImageRef = useRef<HTMLImageElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const { hoveredAnnotation, mouseHandlers: hoveredMouseHandlers } =
    useHoveredAnnotation({
      targetRef: targetRef as React.RefObject<HTMLElement>,
      imageRef: internalImageRef as React.RefObject<HTMLImageElement>,
      annotations,
      selectors,
      enableEditing: !disableEditor,
      throttleMs: 50,
    });

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

  const shouldAnnotationBeActive = useCallback(
    (annotation: AnnotationType, topAnnotation?: AnnotationType): boolean => {
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
    [activeAnnotations, activeAnnotationComparator]
  );

  return {
    setContainerRef,
    style,
    className,
    onContainerMouseLeave: handleTargetMouseLeave,
    onContainerTouchCancel:
      handleTouchLeave as unknown as React.TouchEventHandler<HTMLDivElement>,
    onContainerMouseMove: handleTargetMouseMove,
    allowTouch,
    setImageRef,
    src,
    alt,
    annotations,
    shouldAnnotationBeActive,
    topAnnotationAtMouse,
    disableSelector: !!disableSelector,
    value,
    setTargetRef,
    onInteractionTargetClick: handleInteractionTargetClick,
    onInteractionTargetMouseUp: handleInteractionTargetMouseUp,
    onInteractionTargetMouseDown: handleInteractionTargetMouseDown,
    disableOverlay: !!disableOverlay,
    effectiveType,
    editModeAnnotationIds,
    disableEditor: !!disableEditor,
    onChange,
    onEditorSubmit: handleEditorSubmit,
    renderSlots: {
      renderHighlight,
      renderSelector,
      renderOverlay,
      renderContent,
      renderEditor,
    },
  };
}
