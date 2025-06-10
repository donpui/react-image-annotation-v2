import React, {
  useRef,
  useEffect,
  useCallback,
  useMemo,
  Profiler,
} from 'react';
import styled from 'styled-components';

// Import custom hooks
import { useHoveredAnnotation } from '../hooks/useHoveredAnnotation';
import { useSelectorMethods } from '../hooks/useSelectorMethods';

// Import components
import Overlay from './Overlay';

// Import types
import type {
  AnnotationProps,
  Annotation as AnnotationType,
  AnnotationEvent,
} from '../types/core';

// Import default props
import defaultProps from './defaultProps';

// Styled Components with improved naming and typing
const AnnotationContainer = styled.div<{ $allowTouch?: boolean }>`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${Overlay} {
    opacity: 1;
  }

  touch-action: ${(props) => (props.$allowTouch ? 'pinch-zoom' : 'auto')};
`;

const AnnotationImage = styled.img`
  display: block;
  width: 100%;
  user-select: none;
`;

const AnnotationItems = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`;

const InteractionTarget = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

/**
 * Modern React image annotation component
 * Refactored to use React 19 patterns and custom hooks
 */
export const Annotation: React.FC<AnnotationProps> = (incomingProps) => {
  // Merge props with defaults
  const props = useMemo(
    () => ({
      ...defaultProps,
      ...incomingProps,
      // Handle selectors explicitly to avoid override issues
      selectors: incomingProps.selectors ?? defaultProps.selectors,
    }),
    [incomingProps]
  );

  const {
    // Basic props
    src,
    alt = 'Annotation Image',
    style,
    className,
    containerRef,
    children,

    // Core functionality
    annotations,
    type,
    selectors,
    value,
    onChange,
    onSubmit,

    // Active annotation handling
    activeAnnotationComparator,
    activeAnnotations,

    // Feature toggles
    disableAnnotation,
    disableSelector,
    disableEditor,
    disableOverlay,
    allowTouch,

    // Render props
    renderSelector,
    renderEditor,
    renderHighlight,
    renderContent,
    renderOverlay,

    // Event handlers
    onImageMouseUp,
    onImageMouseDown,
    onImageMouseMove,
    onImageClick,
  } = props;

  // Refs
  const imageRef = useRef<HTMLImageElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  // Custom hooks

  // Optimized hovered annotation hook - only rerenders when hovered annotation changes
  const { hoveredAnnotation, mouseHandlers: hoveredMouseHandlers } =
    useHoveredAnnotation({
      targetRef: targetRef as React.RefObject<HTMLElement>,
      imageRef: imageRef as React.RefObject<HTMLImageElement>,
      annotations,
      selectors,
      enableEditing: !disableEditor,
      throttleMs: 50, // Reduced frequency to minimize rerenders
    });

  // Effective type for selectors
  const effectiveType = type || selectors[0]?.TYPE;

  // Selector methods hook
  const { callSelectorMethod } = useSelectorMethods({
    selectors,
    effectiveType,
    value,
    onChange,
    disableAnnotation,
  });

  // Hover state management for editing
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mouse position values (for backwards compatibility and selector methods)
  // const { x: mouseX, y: mouseY } = mousePosition;

  // Touch event handlers
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

  // Set up touch event listeners
  useEffect(() => {
    const targetElement = targetRef.current;
    if (!allowTouch || !targetElement) return;

    targetElement.ontouchstart = handleTouchStart;
    targetElement.ontouchend = handleTouchEnd;
    targetElement.ontouchmove = handleTouchMove;
    targetElement.ontouchcancel = handleTouchLeave;

    return () => {
      if (targetElement) {
        targetElement.ontouchstart = null;
        targetElement.ontouchend = null;
        targetElement.ontouchmove = null;
        targetElement.ontouchcancel = null;
      }
    };
  }, [
    allowTouch,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
    handleTouchLeave,
  ]);

  // Ref setters
  const setImageRef = useCallback((el: HTMLImageElement | null) => {
    imageRef.current = el;
  }, []);

  const setTargetRef = useCallback((el: HTMLDivElement | null) => {
    targetRef.current = el;
  }, []);

  const setContainerRef = useCallback(
    (el: HTMLDivElement | null) => {
      // setHoverRef(el);
      if (containerRef) {
        if (typeof containerRef === 'function') {
          containerRef(el);
        } else {
          (
            containerRef as React.MutableRefObject<HTMLDivElement | null>
          ).current = el;
        }
      }
    },
    [containerRef]
  );

  // Event handlers
  const handleTargetMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Use both handlers: mouse position for selector methods, hovered annotation for optimization
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

  const handleMouseUp = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onImageMouseUp?.(e);
      callSelectorMethod('onMouseUp', e);
    },
    [onImageMouseUp, callSelectorMethod]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onImageMouseDown?.(e);
      callSelectorMethod('onMouseDown', e);
    },
    [onImageMouseDown, callSelectorMethod]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onImageClick?.(e);
      callSelectorMethod('onClick', e);
    },
    [onImageClick, callSelectorMethod]
  );

  const handleSubmit = useCallback(() => {
    if (onSubmit && value) {
      onSubmit(value);
    }
  }, [onSubmit, value]);

  // Keyboard event handling
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

  // Cleanup hover timeout
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Use optimized hovered annotation instead of computing on every render
  const topAnnotationAtMouse = hoveredAnnotation;

  // Active annotation detection - memoized for performance
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

  // Memoize active annotation IDs for performance
  // const activeAnnotationIds = useMemo(() => {
  //   if (!activeAnnotations) return new Set();
  //   return new Set(activeAnnotations.map(active => {
  //     if (typeof active === 'object' && active !== null && 'data' in active) {
  //       const annotationActive = active as AnnotationType;
  //       return annotationActive.data?.id;
  //     }
  //     return active;
  //   }));
  // }, [activeAnnotations]);

  // Profiler callback for measuring rerenders (development only)
  // const onRenderProfiler = useCallback((
  //   id: string,
  //   phase: 'mount' | 'update' | 'nested-update',
  //   actualDuration: number,
  //   baseDuration: number,
  //   startTime: number,
  //   commitTime: number
  // ) => {
  //   if (process.env.NODE_ENV !== 'production') {
  //     console.log('🔄 Annotation Render Profile:', {
  //       id,
  //       phase,
  //       actualDuration: `${actualDuration.toFixed(2)}ms`,
  //       baseDuration: `${baseDuration.toFixed(2)}ms`,
  //       startTime,
  //       commitTime,
  //       annotationsCount: annotations.length,
  //       hasValue: !!value,
  //       showEditor: !!value?.selection?.showEditor,
  //     });
  //   }
  // }, [annotations.length, value]);

  const annotationContent = (
    <AnnotationContainer
      ref={setContainerRef}
      style={style}
      className={className}
      onMouseLeave={handleTargetMouseLeave}
      onTouchCancel={
        handleTouchLeave as unknown as React.TouchEventHandler<HTMLDivElement>
      }
      onMouseMove={handleTargetMouseMove}
      $allowTouch={allowTouch}
    >
      <AnnotationImage ref={setImageRef} src={src} alt={alt} />

      <AnnotationItems>
        {annotations.map((annotation) => {
          if (!annotation.data?.id) {
            return null;
          }

          const isActive = shouldAnnotationBeActive(
            annotation,
            topAnnotationAtMouse
          );

          // Render regular highlight when editing is disabled
          return renderHighlight
            ? renderHighlight({
                key: annotation.data.id,
                annotation,
                active: isActive,
              })
            : null;
        })}

        {!disableSelector &&
          value?.geometry &&
          renderSelector &&
          renderSelector({ annotation: value })}
      </AnnotationItems>

      <InteractionTarget
        ref={setTargetRef}
        data-testid="annotation-target"
        onClick={handleClick}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
      />

      {!disableOverlay &&
        renderOverlay &&
        renderOverlay({
          type: effectiveType,
          annotation: value,
        })}

      {annotations.map((annotation) => {
        if (!annotation.data?.id) return null;

        return shouldAnnotationBeActive(annotation, topAnnotationAtMouse) &&
          renderContent != null
          ? renderContent({
              key: annotation.data.id,
              annotation,
            })
          : null;

      })}

      {!disableEditor &&
        value?.selection?.showEditor &&
        renderEditor &&
        onChange &&
        renderEditor({
          annotation: value,
          onChange,
          onSubmit: handleSubmit,
        })}

      {children}
    </AnnotationContainer>
  );

  // Wrap with Profiler in development for rerender measurement
  // return process.env.NODE_ENV !== 'production' ? (
  //   <Profiler id="Annotation" onRender={onRenderProfiler}>
  //     {annotationContent}
  //   </Profiler>
  // ) : annotationContent;
  return annotationContent;
};

export default Annotation;
