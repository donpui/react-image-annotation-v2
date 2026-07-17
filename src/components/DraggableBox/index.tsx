import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  DraggableDot,
  MoveButton,
  DeleteButton,
  ConfirmResetButtons,
} from '../DraggableComponents';
import { deleteCornerBoxStyle } from '../DraggableComponents/deleteButtonPosition';
import type { RenderDraggableHighlightProps } from '../../types/core';

/** Padding around box bounds so moving to handles / ✓ ✕ does not count as "outside". */
const EDIT_CHROME_HIT_PAD_PX = 36;

/** Tint only; handles/buttons set their own pointer-events so draws can start through the fill. */
const BoxContainer = styled.div`
  position: absolute;
  border: none;
  background: rgba(151, 151, 151, 0.3);
  border-radius: 3px;
  pointer-events: none;
  z-index: 10;
  box-sizing: border-box;
`;

export type DraggableBoxProps = RenderDraggableHighlightProps;

export const DraggableBox: React.FC<DraggableBoxProps> = ({
  annotation,
  isDragging,
  hasPendingChanges,
  onDotDragStart,
  onDotDrag,
  onMoveStart,
  onMove,
  onDragEnd,
  enableRemoval,
  onRemoveAnnotation,
  onConfirm,
  onReset,
  onDeleteControlMouseEnter,
  onDeleteControlMouseLeave,
  allowResetOnMouseLeave = true,
}) => {
  const { geometry } = annotation;
  const annotationId = annotation.data?.id;
  const boxRef = useRef<HTMLDivElement>(null);
  const showConfirmReset =
    (isDragging || hasPendingChanges) && onConfirm && onReset;

  useEffect(() => {
    if (
      !allowResetOnMouseLeave ||
      isDragging ||
      hasPendingChanges ||
      !onReset ||
      annotationId == null
    ) {
      return;
    }

    const handleMouseMoveOutside = (event: MouseEvent) => {
      const box = boxRef.current;
      if (!box) return;

      const boxRect = box.getBoundingClientRect();
      const { clientX, clientY } = event;

      const pad = EDIT_CHROME_HIT_PAD_PX;
      if (
        clientX < boxRect.left - pad ||
        clientX > boxRect.right + pad ||
        clientY < boxRect.top - pad ||
        clientY > boxRect.bottom + pad
      ) {
        onReset(annotationId);
      }
    };

    document.addEventListener('mousemove', handleMouseMoveOutside);
    return () => {
      document.removeEventListener('mousemove', handleMouseMoveOutside);
    };
  }, [
    allowResetOnMouseLeave,
    isDragging,
    hasPendingChanges,
    onReset,
    annotationId,
  ]);

  if (
    !geometry ||
    typeof geometry.x !== 'number' ||
    typeof geometry.y !== 'number' ||
    typeof geometry.width !== 'number' ||
    typeof geometry.height !== 'number'
  ) {
    return null;
  }

  const id = String(annotationId ?? '');

  return (
    <BoxContainer
      ref={boxRef}
      className="rectangle-editor-box"
      style={{
        left: `${geometry.x}%`,
        top: `${geometry.y}%`,
        width: `${geometry.width}%`,
        height: `${geometry.height}%`,
      }}
      data-annotation-draggable-box
    >
      <DraggableDot
        position="top"
        onDragStart={onDotDragStart}
        onDrag={onDotDrag}
        onDragEnd={onDragEnd}
        annotationId={id}
      />
      <DraggableDot
        position="right"
        onDragStart={onDotDragStart}
        onDrag={onDotDrag}
        onDragEnd={onDragEnd}
        annotationId={id}
      />
      <DraggableDot
        position="bottom"
        onDragStart={onDotDragStart}
        onDrag={onDotDrag}
        onDragEnd={onDragEnd}
        annotationId={id}
      />
      <DraggableDot
        position="left"
        onDragStart={onDotDragStart}
        onDrag={onDotDrag}
        onDragEnd={onDragEnd}
        annotationId={id}
      />
      <MoveButton
        onMoveStart={onMoveStart}
        onMove={onMove}
        onMoveEnd={onDragEnd}
        annotationId={id}
      />
      {enableRemoval && onRemoveAnnotation && annotationId != null && (
        <div
          style={deleteCornerBoxStyle}
          onMouseEnter={() => onDeleteControlMouseEnter?.(annotationId)}
          onMouseLeave={() => onDeleteControlMouseLeave?.()}
          onPointerEnter={() => onDeleteControlMouseEnter?.(annotationId)}
          onPointerLeave={() => onDeleteControlMouseLeave?.()}
        >
          <DeleteButton
            annotationId={annotationId}
            onRemove={onRemoveAnnotation}
          />
        </div>
      )}
      {showConfirmReset && (
        <ConfirmResetButtons
          onConfirm={() => onConfirm!(annotationId!)}
          onReset={() => onReset!(annotationId!)}
        />
      )}
    </BoxContainer>
  );
};
