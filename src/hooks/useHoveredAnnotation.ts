import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { useRelativeMousePosition } from './useRelativeMousePosition';
import { useAnnotationHitDetection } from './useAnnotationHitDetection';
import type { Annotation } from '../types/core';

interface UseHoveredAnnotationProps {
  targetRef: React.RefObject<HTMLElement>;
  imageRef: React.RefObject<HTMLImageElement>;
  annotations: Annotation[];
  selectors: any[];
  enableEditing?: boolean;
  throttleMs?: number;
}

export interface UseHoveredAnnotationReturn {
  hoveredAnnotation: Annotation | undefined;
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
  throttleMs = 50, // Increase throttle to reduce frequency
}: UseHoveredAnnotationProps): UseHoveredAnnotationReturn {
  const [hoveredAnnotation, setHoveredAnnotation] = useState<Annotation | undefined>(undefined);
  const lastHoveredAnnotationRef = useRef<Annotation | undefined>(undefined);
  const lastHoveredIdRef = useRef<string | number | undefined>(undefined);

  // Memoize hit detection to avoid recreating on every render
  const { getTopAnnotationAt } = useAnnotationHitDetection({
    annotations,
    selectors,
    imageRef,
    enableEditing,
  });

  // Callback to handle position changes and update hovered annotation
  const handlePositionChange = useCallback((position: { x: number | null; y: number | null }) => {
    const { x, y } = position;
    const newHoveredAnnotation = getTopAnnotationAt(x, y);
    const newHoveredId = newHoveredAnnotation?.data?.id;
    
    // Use ID comparison for better performance and to avoid object comparison issues
    if (newHoveredId !== lastHoveredIdRef.current) {
      lastHoveredIdRef.current = newHoveredId;
      lastHoveredAnnotationRef.current = newHoveredAnnotation;
      setHoveredAnnotation(newHoveredAnnotation);
    }
  }, [getTopAnnotationAt]);

  // Use the optimized mouse position hook with our callback
  const { handlers } = useRelativeMousePosition(targetRef, {
    onPositionChange: handlePositionChange,
    throttleMs,
  });

  // Clear hovered annotation when annotations or selectors change
  useEffect(() => {
    setHoveredAnnotation(undefined);
    lastHoveredAnnotationRef.current = undefined;
    lastHoveredIdRef.current = undefined;
  }, [annotations, selectors]);

  // Memoize the return value to prevent unnecessary recreations
  const memoizedHandlers = useMemo(() => handlers, [handlers]);

  return {
    hoveredAnnotation,
    mouseHandlers: memoizedHandlers,
  };
} 