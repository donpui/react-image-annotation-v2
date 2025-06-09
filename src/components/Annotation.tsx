import React, { useRef, useEffect, useCallback, useState, useMemo } from 'react';
import styled from 'styled-components';

// Import custom hooks
import { useRelativeMousePosition } from '../hooks/useRelativeMousePosition';
import { useMouseHover } from '../hooks/useMouseHover';
import { useSelectorMethods } from '../hooks/useSelectorMethods';
import { useAnnotationHitDetection } from '../hooks/useAnnotationHitDetection';
import { useDragging } from '../utils/useDragging';

// Import components
import Overlay from './Overlay';

// Import types
import type { 
  AnnotationProps, 
  Annotation as AnnotationType,
  AnnotationEvent 
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
  
  touch-action: ${props => props.$allowTouch ? 'pinch-zoom' : 'auto'};
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
  const props = useMemo(() => ({
    ...defaultProps,
    ...incomingProps,
    // Handle selectors explicitly to avoid override issues
    selectors: incomingProps.selectors ?? defaultProps.selectors,
  }), [incomingProps]);

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
    
    // Editing functionality
    enableEditing,
    onAnnotationsChange,
    renderDraggableHighlight,
    
    // Interaction handlers
    enableRemoval,
    onRemoveAnnotation,
    onConfirm,
    onReset,
    
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
  const { mousePosition, handlers: mouseHandlers, setRef: setMouseRef } = useRelativeMousePosition();
  const { isHoveringOver, setRef: setHoverRef } = useMouseHover();
  
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

  // Hit detection hook
  const { getTopAnnotationAt } = useAnnotationHitDetection({
    annotations,
    selectors,
    imageRef: imageRef as React.RefObject<HTMLImageElement>,
    enableEditing,
  });

  // Dragging functionality for editing mode
  const hasConfirmMode = !!(onConfirm && onReset);
  const draggingHook = enableEditing ? 
    useDragging(annotations, onAnnotationsChange || (() => {}), hasConfirmMode) : 
    null;

  // Hover state management for editing
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [stableHoveredId, setStableHoveredId] = useState<string | null>(null);
  const suppressHoverUntilRef = useRef<number>(0);

  // Use annotations from dragging hook (which handles preview mode) or fallback to prop
  const currentAnnotations = draggingHook?.displayAnnotations || annotations;

  // Mouse position values
  const { x: mouseX, y: mouseY } = mousePosition;

  // Touch event handlers
  const handleTouchStart = useCallback((e: globalThis.TouchEvent) => {
    if (navigator.userAgent.toLowerCase().includes('safari') && 
        !navigator.userAgent.toLowerCase().includes('chrome') && 
        allowTouch) {
      e.preventDefault();
    }
    callSelectorMethod('onTouchStart', e);
  }, [allowTouch, callSelectorMethod]);

  const handleTouchEnd = useCallback((e: globalThis.TouchEvent) => {
    callSelectorMethod('onTouchEnd', e);
  }, [callSelectorMethod]);

  const handleTouchMove = useCallback((e: globalThis.TouchEvent) => {
    mouseHandlers.onTouchMove(e);
    if (navigator.userAgent.toLowerCase().includes('safari') && 
        !navigator.userAgent.toLowerCase().includes('chrome') && 
        allowTouch) {
      e.preventDefault();
    }
    callSelectorMethod('onTouchMove', e);
  }, [mouseHandlers, allowTouch, callSelectorMethod]);

  const handleTouchLeave = useCallback((e: globalThis.TouchEvent) => {
    mouseHandlers.onTouchLeave(e);
  }, [mouseHandlers]);

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
  }, [allowTouch, handleTouchStart, handleTouchEnd, handleTouchMove, handleTouchLeave]);

  // Ref setters
  const setImageRef = useCallback((el: HTMLImageElement | null) => {
    imageRef.current = el;
    setMouseRef(el);
  }, [setMouseRef]);

  const setContainerRef = useCallback((el: HTMLDivElement | null) => {
    setHoverRef(el);
    if (containerRef) {
      if (typeof containerRef === 'function') {
        containerRef(el);
      } else {
        (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }
    }
  }, [setHoverRef, containerRef]);

  // Event handlers
  const handleTargetMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    mouseHandlers.onMouseMove(e.nativeEvent);
    onImageMouseMove?.(e as unknown as React.MouseEvent<HTMLElement>);
    callSelectorMethod('onMouseMove', e as unknown as AnnotationEvent);
  }, [mouseHandlers, onImageMouseMove, callSelectorMethod]);

  const handleTargetMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    mouseHandlers.onMouseLeave(e.nativeEvent);
  }, [mouseHandlers]);

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLElement>) => {
    onImageMouseUp?.(e);
    callSelectorMethod('onMouseUp', e);
  }, [onImageMouseUp, callSelectorMethod]);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLElement>) => {
    onImageMouseDown?.(e);
    callSelectorMethod('onMouseDown', e);
  }, [onImageMouseDown, callSelectorMethod]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    onImageClick?.(e);
    callSelectorMethod('onClick', e);
  }, [onImageClick, callSelectorMethod]);

  const handleSubmit = useCallback(() => {
    if (onSubmit && value) {
      onSubmit(value);
    }
  }, [onSubmit, value]);

  // Keyboard event handling
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && onChange) {
      if (value?.selection?.showEditor || value?.geometry) {
        onChange({
          selection: undefined,
          geometry: undefined,
          data: undefined,
        });
      }
    }
  }, [value, onChange]);

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

  // Active annotation detection
  const shouldAnnotationBeActive = useCallback((annotation: AnnotationType, topAnnotation?: AnnotationType): boolean => {
    if (activeAnnotations) {
      const isActive = activeAnnotations.some(active => 
        activeAnnotationComparator
          ? activeAnnotationComparator(annotation, active)
          : annotation.data.id === active
      );
      return isActive || topAnnotation === annotation;
    }
    return topAnnotation === annotation;
  }, [activeAnnotations, activeAnnotationComparator]);

  const topAnnotationAtMouse = getTopAnnotationAt(mouseX, mouseY);
  console.log('topAnnotationAtMouse', topAnnotationAtMouse);
  // Wrapped confirm/reset handlers for editing mode
  const wrappedHandleConfirm = useCallback((annotationId: string | number) => {
    suppressHoverUntilRef.current = Date.now() + 50;
    setStableHoveredId(null);
    if (draggingHook) {
      draggingHook.handleConfirm(annotationId);
    } else {
      onConfirm?.(annotationId);
    }
  }, [draggingHook, onConfirm]);

  const wrappedHandleReset = useCallback((annotationId: string | number) => {
    suppressHoverUntilRef.current = Date.now() + 50;
    setStableHoveredId(null);
    if (draggingHook) {
      draggingHook.handleReset(annotationId);
    } else {
      onReset?.(annotationId);
    }
  }, [draggingHook, onReset]);

  return (
    <AnnotationContainer
      ref={setContainerRef}
      style={style}
      className={className}
      onMouseLeave={handleTargetMouseLeave}
      onTouchCancel={handleTouchLeave as unknown as React.TouchEventHandler<HTMLDivElement>}
      onMouseMove={handleTargetMouseMove}
      $allowTouch={allowTouch}
    >
      <AnnotationImage
        ref={setImageRef}
        src={src}
        alt={alt}
        draggable={false}
      />
      
      <AnnotationItems>
        {currentAnnotations.map(annotation => {
          if (!annotation.data?.id) {
            console.warn('Annotation missing data.id:', annotation);
            return null;
          }

          const isActive = shouldAnnotationBeActive(annotation, topAnnotationAtMouse);

          // Handle hover state for editing mode
          if (enableEditing && draggingHook && !draggingHook.isDragging) {
            const now = Date.now();
            const isHoverSuppressed = now < suppressHoverUntilRef.current;
            
            if (isActive && stableHoveredId !== annotation.data.id && !isHoverSuppressed) {
              if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
                hoverTimeoutRef.current = null;
              }
              setStableHoveredId(annotation.data.id as string);
              draggingHook.setDraggingId(annotation.data.id as string);
            } else if (!isActive && stableHoveredId === annotation.data.id) {
              if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
              }
              hoverTimeoutRef.current = setTimeout(() => {
                setStableHoveredId(null);
                draggingHook.setDraggingId(null);
                hoverTimeoutRef.current = null;
              }, 100);
            }
          }

          // Use renderDraggableHighlight when editing is enabled, otherwise use renderHighlight
          if (enableEditing && renderDraggableHighlight && draggingHook) {
            const isHovered = draggingHook.draggingId === annotation.data.id;
            const isBeingDragged = draggingHook.isDragging && draggingHook.draggingId === annotation.data.id;
            const isInEditingState = hasConfirmMode && draggingHook.editingAnnotationId === annotation.data.id;
            
            return renderDraggableHighlight({
              key: annotation.data.id,
              annotation,
              active: isActive,
              isDragging: isBeingDragged,
              isHovered,
              onDotDragStart: draggingHook.handleDotDragStart,
              onDotDrag: draggingHook.handleDotDrag,
              onMoveStart: draggingHook.handleMoveStart,
              onMove: draggingHook.handleMove,
              onDragEnd: draggingHook.handleMouseUp,
              enableRemoval,
              onRemoveAnnotation,
              onConfirm: hasConfirmMode ? wrappedHandleConfirm : onConfirm,
              onReset: hasConfirmMode ? wrappedHandleReset : onReset,
            });
          }

          // Render regular highlight when editing is disabled
          return renderHighlight ? renderHighlight({
            key: annotation.data.id,
            annotation,
            active: isActive,
          }) : null;
        })}

        {!disableSelector && value?.geometry && renderSelector && (
          renderSelector({ annotation: value })
        )}
      </AnnotationItems>

      <InteractionTarget
        ref={targetRef}
        data-testid="annotation-target"
        onClick={handleClick}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
      />

      {!disableOverlay && renderOverlay && (
        renderOverlay({
          type: effectiveType,
          annotation: value,
        })
      )}

      {currentAnnotations.map(annotation => {
        if (!annotation.data?.id) return null;
        
                 return shouldAnnotationBeActive(annotation, topAnnotationAtMouse) && renderContent != null ? (
           renderContent({
             key: annotation.data.id,
             annotation,
           })
         ) : null;
      })}

      {!disableEditor && 
       value?.selection?.showEditor && 
       renderEditor && 
       onChange && (
        renderEditor({
          annotation: value,
          onChange,
          onSubmit: handleSubmit,
        })
      )}

      {children}
    </AnnotationContainer>
  );
};

export default Annotation; 