import { useState, useCallback, useRef } from 'react';
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
}

/**
 * Custom hook for tracking relative mouse position within an element
 * Replaces the withRelativeMousePos HOC with modern React patterns
 */
export function useRelativeMousePosition(targetRef: React.RefObject<HTMLElement>): UseRelativeMousePositionReturn {
  const [mousePosition, setMousePosition] = useState<Point | { x: null; y: null }>({ x: null, y: null });

  const handleMouseMove = useCallback((e: globalThis.MouseEvent) => {
    try {
      const targetElement = targetRef.current;
      if (!targetElement) {
        setMousePosition({ x: null, y: null });
        return;
      }
      
      const coordinates = getOffsetCoordPercentage(e, targetElement);
      setMousePosition(coordinates);
    } catch (error) {
      // Fallback to null position if calculation fails
      setMousePosition({ x: null, y: null });
    }
  }, [targetRef]);

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
        setMousePosition({
          x: (offsetX / containerWidth) * 100,
          y: (offsetY / containerHeight) * 100,
        });
      } else {
        setMousePosition({ x: null, y: null });
      }
    } catch (error) {
      setMousePosition({ x: null, y: null });
    }
  }, [targetRef]);

  const handleMouseLeave = useCallback((_e: globalThis.MouseEvent) => {
    setMousePosition({ x: null, y: null });
  }, []);

  const handleTouchLeave = useCallback((_e: globalThis.TouchEvent) => {
    setMousePosition({ x: null, y: null });
  }, []);

  return {
    mousePosition,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onTouchMove: handleTouchMove,
      onTouchLeave: handleTouchLeave,
    },
  };
} 