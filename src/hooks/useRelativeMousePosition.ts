import React, { useState, useCallback, useRef, useEffect } from 'react';
import { getOffsetCoordPercentage } from '../utils/offsetCoordinates';
import type { Point } from '../types/core';

export interface UseRelativeMousePositionReturn {
  mousePosition: Point | { x: null; y: null };
  handlers: {
    onMouseMove: (e: globalThis.MouseEvent) => void;
    onMouseLeave: (e: globalThis.MouseEvent) => void;
    onTouchMove: (e: globalThis.TouchEvent) => void;
    onTouchLeave: (e: globalThis.TouchEvent) => void;
  };
  getCurrentMousePosition: () => Point | { x: null; y: null };
}

/**
 * Custom hook for tracking relative mouse position within an element
 * Optimized to reduce rerenders by using refs for mouse position storage
 * and only updating state when explicitly needed
 */
export function useRelativeMousePosition(
  targetRef: React.RefObject<HTMLElement>,
  options: {
    onPositionChange?: (position: Point | { x: null; y: null }) => void;
    throttleMs?: number;
  } = {}
): UseRelativeMousePositionReturn {
  const { onPositionChange, throttleMs = 16 } = options;
  
  // Use ref to store mouse position without triggering rerenders
  const mousePositionRef = useRef<Point | { x: null; y: null }>({ x: null, y: null });
  
  // Only use state if external callback is provided that needs rerender tracking
  const [mousePosition, setMousePosition] = useState<Point | { x: null; y: null }>({ x: null, y: null });
  
  // Throttling refs
  const lastUpdateTimeRef = useRef<number>(0);
  const throttleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updatePosition = useCallback((newPosition: Point | { x: null; y: null }) => {
    mousePositionRef.current = newPosition;
    
    // Only update state and trigger rerenders if callback is provided
    if (onPositionChange) {
      const now = Date.now();
      
      if (throttleMs <= 0 || now - lastUpdateTimeRef.current >= throttleMs) {
        setMousePosition(newPosition);
        onPositionChange(newPosition);
        lastUpdateTimeRef.current = now;
      } else {
        // Throttle the update
        if (throttleTimeoutRef.current) {
          clearTimeout(throttleTimeoutRef.current);
        }
        
        throttleTimeoutRef.current = setTimeout(() => {
          setMousePosition(newPosition);
          onPositionChange(newPosition);
          lastUpdateTimeRef.current = Date.now();
        }, throttleMs - (now - lastUpdateTimeRef.current));
      }
    }
  }, [onPositionChange, throttleMs]);

  const handleMouseMove = useCallback((e: globalThis.MouseEvent) => {
    try {
      const targetElement = targetRef.current;
      if (!targetElement) {
        updatePosition({ x: null, y: null });
        return;
      }
      
      const coordinates = getOffsetCoordPercentage(e, targetElement);
      updatePosition(coordinates);
    } catch (error) {
      // Fallback to null position if calculation fails
      updatePosition({ x: null, y: null });
    }
  }, [targetRef, updatePosition]);

  const handleTouchMove = useCallback((e: globalThis.TouchEvent) => {
    const container = targetRef.current;
    if (!container || e.targetTouches.length !== 1) {
      return;
    }

    const touch = e.targetTouches[0];
    const offsetParent = container.offsetParent as HTMLElement;
    
    if (!offsetParent) {
      return;
    }

    try {
      const offsetX = touch.pageX - offsetParent.offsetLeft;
      const offsetY = touch.pageY - offsetParent.offsetTop;

      // Cast to HTMLImageElement for width/height access
      const imageElement = container as HTMLImageElement;
      const containerWidth = imageElement.width;
      const containerHeight = imageElement.height;

      if (containerWidth > 0 && containerHeight > 0) {
        updatePosition({
          x: (offsetX / containerWidth) * 100,
          y: (offsetY / containerHeight) * 100,
        });
      } else {
        updatePosition({ x: null, y: null });
      }
    } catch (error) {
      updatePosition({ x: null, y: null });
    }
  }, [targetRef, updatePosition]);

  const handleMouseLeave = useCallback((_e: globalThis.MouseEvent) => {
    updatePosition({ x: null, y: null });
  }, [updatePosition]);

  const handleTouchLeave = useCallback((_e: globalThis.TouchEvent) => {
    updatePosition({ x: null, y: null });
  }, [updatePosition]);

  // Function to get current mouse position without triggering rerender
  const getCurrentMousePosition = useCallback(() => {
    return mousePositionRef.current;
  }, []);

  // Cleanup throttle timeout on unmount
  useEffect(() => {
    return () => {
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current);
      }
    };
  }, []);

  return {
    mousePosition: onPositionChange ? mousePosition : mousePositionRef.current,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onTouchMove: handleTouchMove,
      onTouchLeave: handleTouchLeave,
    },
    getCurrentMousePosition,
  };
} 