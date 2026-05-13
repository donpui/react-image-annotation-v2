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

interface AnnotationHighlightItemProps {
  annotationId: string | number;
  annotation: AnnotationType;
  active: boolean;
  slot: (props: RenderHighlightProps) => React.ReactNode;
}

function AnnotationHighlightItem({
  annotationId,
  annotation,
  active,
  slot,
}: AnnotationHighlightItemProps) {
  return (
    <>
      {slot({
        key: annotationId,
        annotation,
        active,
      })}
    </>
  );
}

interface AnnotationContentItemProps {
  annotationId: string | number;
  annotation: AnnotationType;
  slot: (props: RenderContentProps) => React.ReactNode;
}

function AnnotationContentItem({
  annotationId,
  annotation,
  slot,
}: AnnotationContentItemProps) {
  return (
    <>
      {slot({
        key: annotationId,
        annotation,
      })}
    </>
  );
}

/** One prop on the layout tree instead of many `render*` props (react-doctor / readability). */
export interface AnnotationLayoutRenderSlots {
  renderHighlight?: (props: RenderHighlightProps) => React.ReactNode;
  renderSelector?: (props: RenderSelectorProps) => React.ReactNode;
  renderOverlay?: (props: RenderOverlayProps) => React.ReactNode;
  renderContent?: (props: RenderContentProps) => React.ReactNode;
  renderEditor?: (props: RenderEditorProps) => React.ReactNode;
}

export interface AnnotationLayoutOptions {
  touchEnabled?: boolean;
  selectorDisabled: boolean;
  overlayDisabled: boolean;
  editorDisabled: boolean;
}

export interface AnnotationLayoutAnnotationState {
  getIsActive: (
    annotation: AnnotationType,
    topAnnotation?: AnnotationType
  ) => boolean;
  topAnnotation: AnnotationType | undefined;
  editModeIds?: (string | number)[];
}

export interface AnnotationLayoutProps {
  setContainerRef: React.RefCallback<HTMLDivElement>;
  style?: React.CSSProperties;
  className?: string;
  onContainerMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
  onContainerTouchCancel: React.TouchEventHandler<HTMLDivElement>;
  onContainerMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  setImageRef: React.RefCallback<HTMLImageElement>;
  src: string;
  alt: string;
  annotations: AnnotationType[];
  renderSlots: AnnotationLayoutRenderSlots;
  layoutOptions: AnnotationLayoutOptions;
  annotationState: AnnotationLayoutAnnotationState;
  value: AnnotationValue | undefined;
  setTargetRef: React.RefCallback<HTMLDivElement>;
  onInteractionTargetClick: (e: React.MouseEvent<HTMLElement>) => void;
  onInteractionTargetMouseUp: (e: React.MouseEvent<HTMLElement>) => void;
  onInteractionTargetMouseDown: (e: React.MouseEvent<HTMLElement>) => void;
  effectiveType: string | undefined;
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
  setImageRef,
  src,
  alt,
  annotations,
  renderSlots,
  layoutOptions,
  annotationState,
  value,
  setTargetRef,
  onInteractionTargetClick,
  onInteractionTargetMouseUp,
  onInteractionTargetMouseDown,
  effectiveType,
  onChange,
  onEditorSubmit,
  children,
}: AnnotationLayoutProps) {
  const {
    renderHighlight: highlightSlot,
    renderSelector,
    renderOverlay,
    renderContent: contentSlot,
    renderEditor,
  } = renderSlots;
  const {
    touchEnabled,
    selectorDisabled,
    overlayDisabled,
    editorDisabled,
  } = layoutOptions;
  const {
    getIsActive,
    topAnnotation,
    editModeIds,
  } = annotationState;

  return (
    <AnnotationContainer
      ref={setContainerRef}
      style={style}
      className={className}
      onMouseLeave={onContainerMouseLeave}
      onTouchCancel={onContainerTouchCancel}
      onMouseMove={onContainerMouseMove}
      $allowTouch={touchEnabled}
    >
      <AnnotationImage ref={setImageRef} src={src} alt={alt} />

      <AnnotationItems>
        {annotations.map((annotation) => {
          const annotationId = annotation.data?.id;

          if (!annotationId) {
            return null;
          }

          const isActive = getIsActive(
            annotation,
            topAnnotation
          );

          return highlightSlot ? (
            <AnnotationHighlightItem
              key={annotationId}
              annotationId={annotationId}
              annotation={annotation}
              active={isActive}
              slot={highlightSlot}
            />
          ) : null;
        })}

        {!selectorDisabled &&
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

      {!overlayDisabled &&
        renderOverlay &&
        renderOverlay({
          type: effectiveType,
          annotation: value,
        })}

      {annotations.map((annotation) => {
        const annotationId = annotation.data?.id;

        if (!annotationId) return null;

        const isInEditMode =
          editModeIds?.includes(annotationId) || false;

        return (getIsActive(annotation, topAnnotation) ||
          isInEditMode) &&
          contentSlot != null ? (
          <AnnotationContentItem
            key={annotationId}
            annotationId={annotationId}
            annotation={annotation}
            slot={contentSlot}
          />
        ) : null;
      })}

      {!editorDisabled &&
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
