import React from 'react';
import styled from 'styled-components';
import { DraggableDot, MoveButton, DeleteButton, ConfirmResetButtons } from '../DraggableComponents';
import { Annotation } from '../Annotation';

interface DraggableBoxProps {
  annotation: Annotation;
  onDotDragStart: (annotationId: string, initialCursorPosition: { x: number; y: number }) => void;
  onDotDrag: (event: React.MouseEvent, position: string, initialCursorPosition: { x: number; y: number }) => void;
  onMoveStart: (annotationId: string, initialCursorPosition: { x: number; y: number }) => void;
  onMove: (event: React.MouseEvent, initialCursorPosition: { x: number; y: number }) => void;
  onDragEnd: () => void;
  isDragging?: boolean;
  enableRemoval?: boolean;
  onRemoveAnnotation?: (annotationId: string | number) => void;
  onConfirm?: (annotationId: string | number) => void;
  onReset?: (annotationId: string | number) => void;
}

interface BoxContainerProps {
  $isDragging?: boolean;
}

const BoxContainer = styled.div<BoxContainerProps>`
  position: absolute;
  border: ${props => props.$isDragging ? '1px dashed #FFFFFF' : '1px solid #24B3C8'};
  background: rgba(36, 179, 200, 0.1);
  pointer-events: auto;
  z-index: 10;
  cursor: move;
  
  /* Add padding to create a larger hover area */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    z-index: -1;
    pointer-events: none;
  }
  
  &:hover {
    border: ${props => props.$isDragging ? '1px dashed #FFFFFF' : '2px solid #1e90ff'};
    background: rgba(36, 179, 200, 0.2);
    box-shadow: 0 0 8px rgba(30, 144, 255, 0.4);
  }
`;

export const DraggableBox: React.FC<DraggableBoxProps> = ({
  annotation,
  onDotDragStart,
  onDotDrag,
  onMoveStart,
  onMove,
  onDragEnd,
  isDragging,
  enableRemoval,
  onRemoveAnnotation,
  onConfirm,
  onReset,
}) => {
  const { geometry } = annotation;
  if (!geometry || !geometry.type || typeof geometry.x !== 'number' || typeof geometry.y !== 'number') {
    return null;
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    // Check if the click is on a dot or move button - if so, don't handle move here
    const target = e.target as HTMLElement;
    if (target.closest('[data-type="dot"]') || target.closest('[data-type="move-button"]')) {
      return;
    }
    
    e.preventDefault();
    e.stopPropagation();
    
    // Start move operation for the entire box
    const initialCursorPosition = { x: e.clientX, y: e.clientY };
    const annotationId = annotation.data?.id as string;
    if (annotationId) {
      onMoveStart(annotationId, initialCursorPosition);
    }

    const handleMouseMove = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      onMove(event as any, initialCursorPosition);
    };

    const handleMouseUp = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <BoxContainer
      style={{
        left: `${geometry.x}%`,
        top: `${geometry.y}%`,
        width: `${geometry.width}%`,
        height: `${geometry.height}%`,
      }}
      $isDragging={isDragging}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <DraggableDot position="top" onDragStart={onDotDragStart} onDrag={onDotDrag} onDragEnd={onDragEnd} annotationId={annotation.data?.id as string} />
      <DraggableDot position="right" onDragStart={onDotDragStart} onDrag={onDotDrag} onDragEnd={onDragEnd} annotationId={annotation.data?.id as string} />
      <DraggableDot position="bottom" onDragStart={onDotDragStart} onDrag={onDotDrag} onDragEnd={onDragEnd} annotationId={annotation.data?.id as string} />
      <DraggableDot position="left" onDragStart={onDotDragStart} onDrag={onDotDrag} onDragEnd={onDragEnd} annotationId={annotation.data?.id as string} />
      <MoveButton onMoveStart={onMoveStart} onMove={onMove} onMoveEnd={onDragEnd} annotationId={annotation.data?.id as string} />
      {enableRemoval && onRemoveAnnotation && (
        <DeleteButton annotationId={annotation.data?.id as string} onRemove={onRemoveAnnotation} />
      )}
      {onConfirm && onReset && (
        <ConfirmResetButtons 
          onConfirm={() => onConfirm(annotation.data?.id as string)}
          onReset={() => onReset(annotation.data?.id as string)}
        />
      )}
    </BoxContainer>
  );
}; 