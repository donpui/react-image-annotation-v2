import React from 'react';
import styled from 'styled-components';
import Overlay from './Overlay';
import { AnnotationDeleteControl } from './AnnotationDeleteControl';
import { RectangleSelector } from '../selectors';
import type {
  Annotation as AnnotationType,
  AnnotationValue,
  CanRemoveAnnotation,
  OnRemoveAnnotation,
  RenderContentProps,
  RenderDeleteProps,
  RenderDraggableHighlightProps,
  RenderEditorProps,
  RenderHighlightProps,
  RenderOverlayProps,
  RenderSelectorProps,
} from '../types/core';

const AnnotationContainer = styled.div<{
  $allowTouch?: boolean;
  $cursor?: string;
}>`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${Overlay} {
    opacity: 1;
  }

  touch-action: ${(p) => (p.$allowTouch ? 'pinch-zoom' : 'auto')};
  ${(p) => (p.$cursor ? `cursor: ${p.$cursor};` : '')}
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

const InteractionTarget = styled.div<{
  $hitTestingDisabled?: boolean;
  $cursor?: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: ${(p) => (p.$hitTestingDisabled ? 'none' : 'auto')};
  ${(p) => (p.$cursor ? `cursor: ${p.$cursor};` : '')}
`;

/** Above the interaction target so `renderContent` / Editor stay visible over the tinted editor box. */
const AnnotationPointerPassthroughLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  pointer-events: none;
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
  renderDraggableHighlight?: (
    props: RenderDraggableHighlightProps
  ) => React.ReactNode;
  renderSelector?: (props: RenderSelectorProps) => React.ReactNode;
  renderOverlay?: (props: RenderOverlayProps) => React.ReactNode;
  renderContent?: (props: RenderContentProps) => React.ReactNode;
  renderEditor?: (props: RenderEditorProps) => React.ReactNode;
  renderDelete?: (props: RenderDeleteProps) => React.ReactNode;
}

export interface AnnotationLayoutOptions {
  touchEnabled?: boolean;
  selectorDisabled: boolean;
  overlayDisabled: boolean;
  editorDisabled: boolean;
  contentDisabled?: boolean;
  hitTestingDisabled?: boolean;
  enableEditing?: boolean;
  /** Applied while `value.selection.mode === 'SELECTING'` (and on mousedown before re-render). */
  drawingCursor?: string;
  disableAnnotation?: boolean;
}

export interface AnnotationLayoutAnnotationState {
  getIsActive: (
    annotation: AnnotationType,
    topAnnotation?: AnnotationType
  ) => boolean;
  topAnnotation: AnnotationType | undefined;
  editModeIds?: (string | number)[];
  isDragging?: boolean;
  draggingAnnotationId?: string | number;
  hasPendingChanges?: (annotationId: string | number) => boolean;
  getEffectiveAnnotation?: (annotation: AnnotationType) => AnnotationType;
  draggingHandlers?: Pick<
    RenderDraggableHighlightProps,
    | 'onDotDragStart'
    | 'onDotDrag'
    | 'onMoveStart'
    | 'onMove'
    | 'onDragEnd'
  >;
  onConfirm?: (annotationId: string | number) => void;
  onReset?: (annotationId: string | number) => void;
  enableRemoval?: boolean;
  onRemoveAnnotation?: OnRemoveAnnotation;
  canRemoveAnnotation?: CanRemoveAnnotation;
  onDeleteControlMouseEnter?: (annotationId: string | number) => void;
  onDeleteControlMouseLeave?: () => void;
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
  isDrawing?: boolean;
  setTargetRef: React.RefCallback<HTMLDivElement>;
  onInteractionTargetClick: (e: React.MouseEvent<HTMLElement>) => void;
  onInteractionTargetMouseUp: (e: React.MouseEvent<HTMLElement>) => void;
  onInteractionTargetMouseDown: (e: React.MouseEvent<HTMLElement>) => void;
  effectiveType: string | undefined;
  onChange?: (value: AnnotationValue) => void;
  onEditorSubmit: () => void;
  onImageLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onImageError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  children?: React.ReactNode;
}

function shouldShowBuiltInDeleteControl({
  enableRemoval,
  onRemoveAnnotation,
  isActive,
  annotation,
  canRemoveAnnotation,
  enableEditing,
  draggableHighlightSlot,
  isHovered,
}: {
  enableRemoval?: boolean;
  onRemoveAnnotation?: OnRemoveAnnotation;
  isActive: boolean;
  annotation: AnnotationType;
  canRemoveAnnotation?: CanRemoveAnnotation;
  enableEditing?: boolean;
  draggableHighlightSlot?: AnnotationLayoutRenderSlots['renderDraggableHighlight'];
  isHovered: boolean;
}) {
  if (!enableRemoval || !onRemoveAnnotation || !isActive) {
    return false;
  }

  if (canRemoveAnnotation && !canRemoveAnnotation(annotation)) {
    return false;
  }

  const deleteOnDraggableBox =
    enableEditing &&
    !!draggableHighlightSlot &&
    isHovered &&
    annotation.geometry?.type === RectangleSelector.TYPE;

  return !deleteOnDraggableBox;
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
  isDrawing,
  setTargetRef,
  onInteractionTargetClick,
  onInteractionTargetMouseUp,
  onInteractionTargetMouseDown,
  effectiveType,
  onChange,
  onEditorSubmit,
  onImageLoad,
  onImageError,
  children,
}: AnnotationLayoutProps) {
  const {
    renderHighlight: highlightSlot,
    renderDraggableHighlight: draggableHighlightSlot,
    renderSelector,
    renderOverlay,
    renderContent: contentSlot,
    renderEditor,
    renderDelete,
  } = renderSlots;
  const {
    touchEnabled,
    selectorDisabled,
    overlayDisabled,
    editorDisabled,
    contentDisabled,
    hitTestingDisabled,
    enableEditing,
    drawingCursor,
    disableAnnotation,
  } = layoutOptions;

  const interactionCursor =
    !!drawingCursor && !disableAnnotation ? drawingCursor : undefined;
  const {
    getIsActive,
    topAnnotation,
    editModeIds,
    isDragging,
    draggingAnnotationId,
    hasPendingChanges,
    getEffectiveAnnotation,
    draggingHandlers,
    onConfirm,
    onReset,
    enableRemoval,
    onRemoveAnnotation,
    canRemoveAnnotation,
    onDeleteControlMouseEnter,
    onDeleteControlMouseLeave,
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
      $cursor={isDrawing ? drawingCursor : undefined}
    >
      <AnnotationImage
        ref={setImageRef}
        src={src}
        alt={alt}
        onLoad={onImageLoad}
        onError={onImageError}
      />

      <AnnotationItems>
        {annotations.map((annotation) => {
          const annotationId = annotation.data?.id;

          if (!annotationId) {
            return null;
          }

          const isActive = getIsActive(annotation, topAnnotation);
          const isHovered = topAnnotation?.data?.id === annotationId;
          const isDraggingThis =
            isDragging && draggingAnnotationId === annotationId;
          const hasPendingChangesThis = !!hasPendingChanges?.(annotationId);
          const effectiveAnnotation = getEffectiveAnnotation
            ? getEffectiveAnnotation(annotation)
            : annotation;
          const useDraggableSlot =
            enableEditing &&
            draggableHighlightSlot &&
            draggingHandlers &&
            (isHovered || isDraggingThis || hasPendingChangesThis);

          /** Keep passive `renderHighlight` (your border/fill) and layer draggable UI on top. */
          const highlightSlotToUse = useDraggableSlot
            ? (props: RenderHighlightProps) => (
                <React.Fragment>
                  {highlightSlot ? highlightSlot(props) : null}
                  {draggableHighlightSlot!({
                    ...props,
                    annotation: effectiveAnnotation,
                    isHovered,
                    isDragging: !!isDraggingThis,
                    hasPendingChanges: hasPendingChangesThis,
                    ...draggingHandlers!,
                    enableRemoval,
                    onRemoveAnnotation,
                    onConfirm,
                    onReset,
                    onDeleteControlMouseEnter,
                    onDeleteControlMouseLeave,
                  })}
                </React.Fragment>
              )
            : highlightSlot;

          return highlightSlotToUse ? (
            <AnnotationHighlightItem
              key={annotationId}
              annotationId={annotationId}
              annotation={effectiveAnnotation}
              active={isActive}
              slot={highlightSlotToUse}
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
        data-is-drawing={isDrawing && drawingCursor ? true : undefined}
        $hitTestingDisabled={hitTestingDisabled}
        $cursor={interactionCursor}
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

      <AnnotationPointerPassthroughLayer>
        {annotations.map((annotation) => {
          const annotationId = annotation.data?.id;

          if (!annotationId) return null;

          const isInEditMode =
            editModeIds?.includes(annotationId) || false;
          const isActive = getIsActive(annotation, topAnnotation);
          const isHovered = topAnnotation?.data?.id === annotationId;
          const showContent =
            !contentDisabled && (isActive || isInEditMode) && contentSlot != null;
          const showDelete = shouldShowBuiltInDeleteControl({
            enableRemoval,
            onRemoveAnnotation,
            isActive,
            annotation,
            canRemoveAnnotation,
            enableEditing,
            draggableHighlightSlot,
            isHovered,
          });

          if (!showContent && !showDelete) {
            return null;
          }

          return (
            <React.Fragment key={annotationId}>
              {showContent ? (
                <AnnotationContentItem
                  annotationId={annotationId}
                  annotation={annotation}
                  slot={contentSlot!}
                />
              ) : null}
              {showDelete && onRemoveAnnotation ? (
                <AnnotationDeleteControl
                  annotation={annotation}
                  onRemove={onRemoveAnnotation}
                  renderDelete={renderDelete}
                  onDeleteControlMouseEnter={onDeleteControlMouseEnter}
                  onDeleteControlMouseLeave={onDeleteControlMouseLeave}
                />
              ) : null}
            </React.Fragment>
          );
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
      </AnnotationPointerPassthroughLayer>

      {children}
    </AnnotationContainer>
  );
}
