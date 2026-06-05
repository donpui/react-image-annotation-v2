import React from 'react';
import styled from 'styled-components';
import { MoveIcon } from './MoveIcon';

interface DraggableDotProps {
  position: 'top' | 'right' | 'bottom' | 'left';
  onDragStart: (
    annotationId: string,
    initialCursorPosition: { x: number; y: number }
  ) => void;
  onDrag: (
    event: React.MouseEvent,
    position: string,
    initialCursorPosition: { x: number; y: number }
  ) => void;
  onDragEnd?: () => void;
  annotationId: string;
}

interface MoveButtonProps {
  onMoveStart: (
    annotationId: string,
    initialCursorPosition: { x: number; y: number }
  ) => void;
  onMove: (
    event: React.MouseEvent,
    initialCursorPosition: { x: number; y: number }
  ) => void;
  onMoveEnd?: () => void;
  annotationId: string;
}

const Dot = styled.div<{ $position: DraggableDotProps['position'] }>`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: white;
  cursor: pointer;
  border-radius: 50%;
  z-index: 15;
  pointer-events: auto;

  ${(props) => {
    switch (props.$position) {
      case 'top':
        return `
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'right':
        return `
          right: -5px;
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'bottom':
        return `
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'left':
        return `
          left: -5px;
          top: 50%;
          transform: translateY(-50%);
        `;
      default:
        return '';
    }
  }}
`;

const MoveButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  width: 20px;
  height: 20px;
  cursor: move;
  z-index: 15;
  pointer-events: auto;
`;

export const DraggableDot: React.FC<DraggableDotProps> = ({
  position,
  onDragStart,
  onDrag,
  onDragEnd,
  annotationId,
}) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const initialCursorPosition = { x: e.clientX, y: e.clientY };
    onDragStart(annotationId, initialCursorPosition);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      onDrag(moveEvent as unknown as React.MouseEvent, position, initialCursorPosition);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      onDragEnd?.();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <Dot
      $position={position}
      onMouseDown={handleMouseDown}
      onClick={(e) => e.stopPropagation()}
      data-type="dot"
    />
  );
};

export const MoveButton: React.FC<MoveButtonProps> = ({
  onMoveStart,
  onMove,
  onMoveEnd,
  annotationId,
}) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const initialCursorPosition = { x: e.clientX, y: e.clientY };
    onMoveStart(annotationId, initialCursorPosition);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      onMove(moveEvent as unknown as React.MouseEvent, initialCursorPosition);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      onMoveEnd?.();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <MoveButtonContainer
      onMouseDown={handleMouseDown}
      onClick={(e) => e.stopPropagation()}
      data-type="move-button"
    >
      <MoveIcon />
    </MoveButtonContainer>
  );
};

export { DeleteButton } from './DeleteButton';
export {
  DeleteCrossIcon,
  DELETE_BUTTON_SIZE_PX,
  DELETE_BUTTON_HIT_AREA_PX,
} from './DeleteCrossIcon';
export {
  getDeleteCornerPosition,
  deleteCornerBoxStyle,
} from './deleteButtonPosition';
export { ConfirmResetButtons } from './ConfirmResetButtons';
