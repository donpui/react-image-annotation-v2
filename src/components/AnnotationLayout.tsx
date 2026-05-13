import React from 'react';
import styled from 'styled-components';
import Overlay from './Overlay';
import type {
  Annotation as AnnotationType,
  AnnotationValue,
  RenderContentProps,
  RenderEditorProps,
  RenderHighlightProps,
  RenderOverlayProps,
  RenderSelectorProps,
} from '../types/core';

const AnnotationContainer = styled.div<{ $allowTouch?: boolean }>`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${Overlay} {
    opacity: 1;
  }

  touch-action: ${(p) => (p.$allowTouch ? 'pinch-zoom' : 'auto')};
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

/** One prop on the layout tree instead of many `render*` props (react-doctor / readability). */
export interface AnnotationLayoutRenderSlots {
  renderHighlight?: (props: RenderHighlightProps) => React.ReactNode;
  renderSelector?: (props: RenderSelectorProps) => React.ReactNode;
  renderOverlay?: (props: RenderOverlayProps) => React.ReactNode;
  renderContent?: (props: RenderContentProps) => React.ReactNode;
  renderEditor?: (props: RenderEditorProps) => React.ReactNode;
}

export interface AnnotationLayoutProps {
  setContainerRef: React.RefCallback<HTMLDivElement>;
  style?: React.CSSProperties;
  className?: string;
  onContainerMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
  onContainerTouchCancel: React.TouchEventHandler<HTMLDivElement>;
  onContainerMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  allowTouch?: boolean;
  setImageRef: React.RefCallback<HTMLImageElement>;
  src: string;
  alt: string;
  annotations: AnnotationType[];
  renderSlots: AnnotationLayoutRenderSlots;
  shouldAnnotationBeActive: (
    annotation: AnnotationType,
    topAnnotation?: AnnotationType
  ) => boolean;
  topAnnotationAtMouse: AnnotationType | undefined;
  disableSelector: boolean;
  value: AnnotationValue | undefined;
  setTargetRef: React.RefCallback<HTMLDivElement>;
  onInteractionTargetClick: (e: React.MouseEvent<HTMLElement>) => void;
  onInteractionTargetMouseUp: (e: React.MouseEvent<HTMLElement>) => void;
  onInteractionTargetMouseDown: (e: React.MouseEvent<HTMLElement>) => void;
  disableOverlay: boolean;
  effectiveType: string | undefined;
  editModeAnnotationIds?: (string | number)[];
  disableEditor: boolean;
  onChange?: (value: AnnotationValue) => void;
  onEditorSubmit: () => void;
  children?: React.ReactNode;
}

export function AnnotationLayout({
  setContainerRef,
  style,
  className,
  onContainerMouseLeave,
  onContainerTouchCancel,
  onContainerMouseMove,
  allowTouch,
  setImageRef,
  src,
  alt,
  annotations,
  renderSlots,
  shouldAnnotationBeActive,
  topAnnotationAtMouse,
  disableSelector,
  value,
  setTargetRef,
  onInteractionTargetClick,
  onInteractionTargetMouseUp,
  onInteractionTargetMouseDown,
  disableOverlay,
  effectiveType,
  editModeAnnotationIds,
  disableEditor,
  onChange,
  onEditorSubmit,
  children,
}: AnnotationLayoutProps) {
  const {
    renderHighlight,
    renderSelector,
    renderOverlay,
    renderContent,
    renderEditor,
  } = renderSlots;

  return (
    <AnnotationContainer
      ref={setContainerRef}
      style={style}
      className={className}
      onMouseLeave={onContainerMouseLeave}
      onTouchCancel={onContainerTouchCancel}
      onMouseMove={onContainerMouseMove}
      $allowTouch={allowTouch}
    >
      <AnnotationImage ref={setImageRef} src={src} alt={alt} />

      <AnnotationItems>
        {annotations.map((annotation) => {
          if (!annotation.data?.id) {
            return null;
          }

          const isActive = shouldAnnotationBeActive(
            annotation,
            topAnnotationAtMouse
          );

          return renderHighlight ? (
            <React.Fragment key={annotation.data.id}>
              {renderHighlight({
                key: annotation.data.id,
                annotation,
                active: isActive,
              })}
            </React.Fragment>
          ) : null;
        })}

        {!disableSelector &&
          value?.geometry &&
          renderSelector &&
          renderSelector({ annotation: value })}
      </AnnotationItems>

      <InteractionTarget
        ref={setTargetRef}
        data-testid="annotation-target"
        onClick={onInteractionTargetClick}
        onMouseUp={onInteractionTargetMouseUp}
        onMouseDown={onInteractionTargetMouseDown}
      />

      {!disableOverlay &&
        renderOverlay &&
        renderOverlay({
          type: effectiveType,
          annotation: value,
        })}

      {annotations.map((annotation) => {
        if (!annotation.data?.id) return null;

        const isInEditMode =
          editModeAnnotationIds?.includes(annotation.data.id) || false;

        return (shouldAnnotationBeActive(annotation, topAnnotationAtMouse) ||
          isInEditMode) &&
          renderContent != null ? (
          <React.Fragment key={annotation.data.id}>
            {renderContent({
              key: annotation.data.id,
              annotation,
            })}
          </React.Fragment>
        ) : null;
      })}

      {!disableEditor &&
        value?.selection?.showEditor &&
        renderEditor &&
        onChange &&
        renderEditor({
          annotation: value,
          onChange,
          onSubmit: onEditorSubmit,
        })}

      {children}
    </AnnotationContainer>
  );
}
