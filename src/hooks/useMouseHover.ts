import { useState, useEffect, useRef, useCallback } from 'react';

interface MousePosition {
  pageX: number;
  pageY: number;
}

export interface UseMouseHoverReturn {
  isHoveringOver: boolean;
  setRef: (el: HTMLElement | null) => void;
}

/**
 * Checks if mouse position is over the given element
 */
function isMouseOverElement(element: HTMLElement | null, mousePos: MousePosition): boolean {
  if (!element || typeof element.getBoundingClientRect !== 'function') {
    return false;
  }

  const { pageX, pageY } = mousePos;
  const { left, right, bottom, top } = element.getBoundingClientRect();

  return pageX > left && pageX < right && pageY > top && pageY < bottom;
}

/**
 * Custom hook for tracking mouse hover state over an element
 * Replaces the isMouseHovering HOC with modern React patterns
 */
export function useMouseHover(): UseMouseHoverReturn {
  const [isHoveringOver, setIsHoveringOver] = useState<boolean>(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: globalThis.MouseEvent) => {
      const element = elementRef.current;
      const mousePosition = { pageX: event.pageX, pageY: event.pageY };
      
      const isOver = isMouseOverElement(element, mousePosition);
      setIsHoveringOver(isOver);
    };

    // Add event listener to document for global mouse tracking
    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array - effect runs once on mount

  const setRef = useCallback((el: HTMLElement | null) => {
    elementRef.current = el;
  }, []);

  return {
    isHoveringOver,
    setRef,
  };
} 