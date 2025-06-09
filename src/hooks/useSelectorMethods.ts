import { useCallback } from 'react';
import type { 
  Selector, 
  AnnotationValue, 
  AnnotationEvent 
} from '../types/core';

interface UseSelectorMethodsProps {
  selectors: Selector[];
  effectiveType?: string;
  value?: AnnotationValue;
  onChange?: (value: AnnotationValue) => void;
  disableAnnotation?: boolean;
}

export interface UseSelectorMethodsReturn {
  callSelectorMethod: (
    methodName: keyof Selector['methods'], 
    event: AnnotationEvent | globalThis.TouchEvent
  ) => void;
  getSelectorByType: (type?: string) => Selector | undefined;
}

/**
 * Custom hook for handling selector method calls
 * Centralizes the logic for finding and calling selector methods
 */
export function useSelectorMethods({
  selectors,
  effectiveType,
  value,
  onChange,
  disableAnnotation,
}: UseSelectorMethodsProps): UseSelectorMethodsReturn {
  
  const getSelectorByType = useCallback((typeToFind?: string): Selector | undefined => {
    if (!typeToFind) return undefined;
    return selectors.find(selector => selector.TYPE === typeToFind);
  }, [selectors]);

  const callSelectorMethod = useCallback((
    methodName: keyof Selector['methods'], 
    event: AnnotationEvent | globalThis.TouchEvent
  ) => {
    if (disableAnnotation) {
      return;
    }

    const selector = getSelectorByType(effectiveType);
    if (!selector?.methods[methodName]) {
      return;
    }

    const method = selector.methods[methodName] as (
      annotationValue: AnnotationValue, 
      event: any
    ) => AnnotationValue | undefined;

    try {
      const resultValue = method(value || {}, event);
      
      if (typeof resultValue === 'undefined') {
        if (process.env.NODE_ENV !== 'production') {
          console.error(
            `Selector method ${String(methodName)} of type ${effectiveType} returned undefined. ` +
            'Make sure to explicitly return the previous state or new state.'
          );
        }
        return;
      }

      onChange?.(resultValue);
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(`Error calling selector method ${String(methodName)}:`, error);
      }
    }
  }, [disableAnnotation, getSelectorByType, effectiveType, value, onChange]);

  return {
    callSelectorMethod,
    getSelectorByType,
  };
} 