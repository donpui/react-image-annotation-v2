import { useState, useCallback, useRef, useMemo } from 'react';
import { useRelativeMousePosition } from './useRelativeMousePosition';
import { useAnnotationHitDetection } from './useAnnotationHitDetection';
import type { Annotation } from '../types/core';

interface UseHoveredAnnotationProps {
  targetRef: React.RefObject<HTMLElement>;
  imageRef: React.RefObject<HTMLImageElement>;
  annotations: Annotation[];
  selectors: any[];
  enableEditing?: boolean;
  /** Skip hit-testing while drawing a new annotation. */
  suppressHover?: boolean;
  throttleMs?: number;
}

export interface UseHoveredAnnotationReturn {
  hoveredAnnotation: Annotation | undefined;
  /** Hit-test at percent coords (same as hover). Use on mousedown so nearby clicks can still draw. */
  getTopAnnotationAt: (
    x: number | null,
    y: number | null
  ) => Annotation | undefined;
  mouseHandlers: {
    onMouseMove: (e: globalThis.MouseEvent) => void;
    onMouseLeave: (e: globalThis.MouseEvent) => void;
    onTouchMove: (e: globalThis.TouchEvent) => void;
    onTouchLeave: (e: globalThis.TouchEvent) => void;
  };
}

/**
 * Custom hook that combines mouse position tracking with annotation hit detection
 * Only triggers rerenders when the hovered annotation actually changes, not on every mouse move
 */
export function useHoveredAnnotation({
  targetRef,
  imageRef,
  annotations,
  selectors,
  enableEditing,
  suppressHover = false,
  throttleMs = 50, // Increase throttle to reduce frequency
}: UseHoveredAnnotationProps): UseHoveredAnnotationReturn {
  const [hoveredAnnotation, setHoveredAnnotation] = useState<Annotation | undefined>(undefined);
  const lastHoveredAnnotationRef = useRef<Annotation | undefined>(undefined);
  const lastHoveredIdRef = useRef<string | number | undefined>(undefined);
  const [prevAnnotations, setPrevAnnotations] = useState(annotations);
  const [prevSelectors, setPrevSelectors] = useState(selectors);

  if (annotations !== prevAnnotations || selectors !== prevSelectors) {
    setPrevAnnotations(annotations);
    setPrevSelectors(selectors);
    setHoveredAnnotation(undefined);
    lastHoveredAnnotationRef.current = undefined;
    lastHoveredIdRef.current = undefined;
  }

  // Memoize hit detection to avoid recreating on every render
  const { getTopAnnotationAt } = useAnnotationHitDetection({
    annotations,
    selectors,
    imageRef,
    enableEditing,
  });

  // Callback to handle position changes and update hovered annotation
  const handlePositionChange = useCallback((position: { x: number | null; y: number | null }) => {
    if (suppressHover) {
      if (lastHoveredIdRef.current != null) {
        lastHoveredIdRef.current = undefined;
        lastHoveredAnnotationRef.current = undefined;
        setHoveredAnnotation(undefined);
      }
      return;
    }

    const { x, y } = position;
    const newHoveredAnnotation = getTopAnnotationAt(x, y);
    const newHoveredId = newHoveredAnnotation?.data?.id;
    
    // Use ID comparison for better performance and to avoid object comparison issues
    if (newHoveredId !== lastHoveredIdRef.current) {
      lastHoveredIdRef.current = newHoveredId;
      lastHoveredAnnotationRef.current = newHoveredAnnotation;
      setHoveredAnnotation(newHoveredAnnotation);
    }
  }, [getTopAnnotationAt, suppressHover]);

  // Use the optimized mouse position hook with our callback
  const { handlers } = useRelativeMousePosition(targetRef, {
    onPositionChange: handlePositionChange,
    throttleMs,
  });

  // Memoize the return value to prevent unnecessary recreations
  const memoizedHandlers = useMemo(() => handlers, [handlers]);

  return {
    hoveredAnnotation,
    getTopAnnotationAt,
    mouseHandlers: memoizedHandlers,
  };
} 