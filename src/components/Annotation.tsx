import React, { useMemo } from 'react';

import { useAnnotationViewModel } from '../hooks/useAnnotationViewModel';

import type { AnnotationProps } from '../types/core';

import defaultProps from './defaultProps';
import { AnnotationLayout } from './AnnotationLayout';

export type AnnotationComponentProps = AnnotationProps & {
  ref?: React.Ref<HTMLImageElement | null>;
};

/**
 * Modern React image annotation component
 * Refactored to use React 19 patterns and custom hooks
 */
export function Annotation({
  ref: forwardedImageRef,
  ...incomingProps
}: AnnotationComponentProps) {
  const props = useMemo(() => {
    const { renderSlots, ...rest } = incomingProps;
    return {
      ...defaultProps,
      ...rest,
      selectors: rest.selectors ?? defaultProps.selectors,
      renderSelector:
        rest.renderSelector ??
        renderSlots?.renderSelector ??
        defaultProps.renderSelector,
      renderEditor:
        rest.renderEditor ??
        renderSlots?.renderEditor ??
        defaultProps.renderEditor,
      renderHighlight:
        rest.renderHighlight ??
        renderSlots?.renderHighlight ??
        defaultProps.renderHighlight,
      renderContent:
        rest.renderContent ??
        renderSlots?.renderContent ??
        defaultProps.renderContent,
      renderOverlay:
        rest.renderOverlay ??
        renderSlots?.renderOverlay ??
        defaultProps.renderOverlay,
      renderDraggableHighlight:
        rest.renderDraggableHighlight ??
        renderSlots?.renderDraggableHighlight ??
        defaultProps.renderDraggableHighlight,
    };
  }, [incomingProps]);

  const { children, ...propsWithoutChildren } = props;
  const layout = useAnnotationViewModel(propsWithoutChildren, forwardedImageRef);

  return (
    <AnnotationLayout {...layout}>
      {children}
    </AnnotationLayout>
  );
}

Annotation.displayName = 'Annotation';

export default Annotation;
