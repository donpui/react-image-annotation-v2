import { useCallback, useMemo } from 'react';
import type { 
  Annotation, 
  Selector,
  Point 
} from '../types/core';

interface UseAnnotationHitDetectionProps {
  annotations: Annotation[];
  selectors: Selector[];
  imageRef: React.RefObject<HTMLImageElement>;
  enableEditing?: boolean;
}

export interface UseAnnotationHitDetectionReturn {
  getTopAnnotationAt: (x: number | null, y: number | null) => Annotation | undefined;
  getSelectorByType: (type?: string) => Selector | undefined;
}

/**
 * Custom hook for annotation hit detection
 * Handles finding which annotation is at a given coordinate
 */
export function useAnnotationHitDetection({
  annotations,
  selectors,
  imageRef,
  enableEditing,
}: UseAnnotationHitDetectionProps): UseAnnotationHitDetectionReturn {

  const selectorMap = useMemo(() => {
    return new Map(selectors.map(selector => [selector.TYPE, selector]));
  }, [selectors]);

  const getSelectorByType = useCallback((type?: string): Selector | undefined => {
    if (!type) return undefined;
    return selectorMap.get(type);
  }, [selectorMap]);

  const getTopAnnotationAt = useCallback((
    xPos: number | null, 
    yPos: number | null
  ): Annotation | undefined => {
    const currentImage = imageRef.current;
    
    if (!currentImage || xPos === null || yPos === null) {
      return undefined;
    }

    const point: Point = { x: xPos, y: yPos };

    const intersectingAnnotations = annotations
      .map((annotation, index) => {
        const { geometry } = annotation;
        
        if (!geometry) {
          return null;
        }
        
        const selector = getSelectorByType(geometry.type);
        if (!selector) {
          console.warn(`🔍 No selector found for type: ${geometry.type}`);
          return null;
        }

        // For editing mode, expand hit area for rectangle annotations
        let testGeometry = geometry;
        if (enableEditing && 
            geometry.type === 'RECTANGLE' && 
            typeof geometry.x === 'number' && 
            typeof geometry.y === 'number' &&
            typeof geometry.width === 'number' && 
            typeof geometry.height === 'number') {
          
          // Add 2% buffer around the rectangle for easier interaction
          const buffer = 2;
          testGeometry = {
            ...geometry,
            x: Math.max(0, geometry.x - buffer),
            y: Math.max(0, geometry.y - buffer),
            width: Math.min(100 - geometry.x + buffer, geometry.width + buffer * 2),
            height: Math.min(100 - geometry.y + buffer, geometry.height + buffer * 2),
          };
        }

        const intersects = selector.intersects(point, testGeometry, currentImage);
        
        if (intersects) {
          console.log(`🎯 Hit detected on annotation ${annotation.data?.id}:`, { point, testGeometry, intersects });
        }
        
        return intersects ? annotation : null;
      })
      .filter((annotation): annotation is Annotation => annotation !== null);

    if (intersectingAnnotations.length === 0) {
      return undefined;
    }

    // Sort by area (smallest first) to get the most specific annotation
    const sortedAnnotations = intersectingAnnotations.sort((a, b) => {
      const selectorA = getSelectorByType(a.geometry.type);
      const selectorB = getSelectorByType(b.geometry.type);

      if (!selectorA || !selectorB) return 0;
      
      return selectorA.area(a.geometry, currentImage) - selectorB.area(b.geometry, currentImage);
    });

    return sortedAnnotations[0];
  }, [annotations, getSelectorByType, imageRef, enableEditing]);

  return {
    getTopAnnotationAt,
    getSelectorByType,
  };
} 