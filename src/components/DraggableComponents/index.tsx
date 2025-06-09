import React from 'react';
import styled from 'styled-components';

interface DraggableDotProps {
  position: 'top' | 'right' | 'bottom' | 'left';
  onDragStart: (annotationId: string, initialCursorPosition: { x: number; y: number }) => void;
  onDrag: (event: React.MouseEvent, position: string, initialCursorPosition: { x: number; y: number }) => void;
  onDragEnd?: () => void;
  annotationId: string;
}

interface MoveButtonProps {
  onMoveStart: (annotationId: string, initialCursorPosition: { x: number; y: number }) => void;
  onMove: (event: React.MouseEvent, initialCursorPosition: { x: number; y: number }) => void;
  onMoveEnd?: () => void;
  annotationId: string;
}

const Dot = styled.div<{ position: string }>`
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border: 1px solid #24B3C8;
  border-radius: 50%;
  cursor: move;
  z-index: 15;
  pointer-events: auto;
  transition: all 0.2s ease;

  /* Add larger hover area using pseudo-element */
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: -5px;
    left: -5px;
    z-index: -1;
    pointer-events: auto;
  }

  &:hover {
    width: 12px;
    height: 12px;
    background: #1e90ff;
    border: 2px solid #ffffff;
    box-shadow: 0 0 4px rgba(30, 144, 255, 0.6);
  }

  ${props => {
    switch (props.position) {
      case 'top':
        return `
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          
          &:hover {
            top: -6px;
            transform: translateX(-50%);
          }
        `;
      case 'right':
        return `
          top: 50%;
          right: -5px;
          transform: translateY(-50%);
          
          &:hover {
            right: -6px;
            transform: translateY(-50%);
          }
        `;
      case 'bottom':
        return `
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          
          &:hover {
            bottom: -6px;
            transform: translateX(-50%);
          }
        `;
      case 'left':
        return `
          top: 50%;
          left: -5px;
          transform: translateY(-50%);
          
          &:hover {
            left: -6px;
            transform: translateY(-50%);
          }
        `;
      default:
        return '';
    }
  }}
`;

const MoveButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: white;
  border: 1px solid #24B3C8;
  border-radius: 50%;
  cursor: move;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #24B3C8;
  pointer-events: auto;
  transition: all 0.2s ease;
  
  &:hover {
    width: 24px;
    height: 24px;
    background: #1e90ff;
    border: 2px solid #ffffff;
    color: white;
    font-size: 14px;
    box-shadow: 0 0 6px rgba(30, 144, 255, 0.6);
  }
`;

export const DraggableDot: React.FC<DraggableDotProps> = ({ position, onDragStart, onDrag, onDragEnd, annotationId }) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const initialCursorPosition = { x: e.clientX, y: e.clientY };
    onDragStart(annotationId, initialCursorPosition);

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onDrag(e as any, position, initialCursorPosition);
    };

    const handleMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      onDragEnd?.();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return <Dot position={position} onMouseDown={handleMouseDown} onClick={handleClick} data-type="dot" />;
};

export const MoveButton: React.FC<MoveButtonProps> = ({ onMoveStart, onMove, onMoveEnd, annotationId }) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const initialCursorPosition = { x: e.clientX, y: e.clientY };
    onMoveStart(annotationId, initialCursorPosition);

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onMove(e as any, initialCursorPosition);
    };

    const handleMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      onMoveEnd?.();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <MoveButtonContainer onMouseDown={handleMouseDown} onClick={handleClick} data-type="move-button">
      ↕
    </MoveButtonContainer>
  );
};

export { DeleteButton } from './DeleteButton';
export { ConfirmResetButtons } from './ConfirmResetButtons'; 