import { useRef, useEffect } from 'react';

interface UseRenderCountOptions {
  logToConsole?: boolean;
  componentName?: string;
}

/**
 * Custom hook to track how many times a component has rendered
 * Useful for debugging performance issues and unnecessary rerenders
 */
export function useRenderCount(options: UseRenderCountOptions = {}) {
  const { logToConsole = false, componentName = 'Component' } = options;
  const renderCount = useRef(0);
  const previousProps = useRef<any>();

  renderCount.current += 1;

  if (logToConsole && process.env.NODE_ENV !== 'production') {
    console.log(`🔄 ${componentName} rendered ${renderCount.current} times`);
  }

  const logPropsChange = (currentProps: any) => {
    if (process.env.NODE_ENV !== 'production' && logToConsole) {
      if (previousProps.current) {
        const changedProps: string[] = [];
        
        Object.keys(currentProps).forEach(key => {
          if (currentProps[key] !== previousProps.current[key]) {
            changedProps.push(key);
          }
        });

        if (changedProps.length > 0) {
          console.log(`📝 ${componentName} props changed:`, changedProps);
        }
      }
      previousProps.current = currentProps;
    }
  };

  return {
    renderCount: renderCount.current,
    logPropsChange,
  };
} 