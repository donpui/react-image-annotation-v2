import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: absolute;
  bottom: -22px;
  right: 0;
  display: flex;
  gap: 4px;
  z-index: 1;
`;

const Button = styled.button<{ $variant: 'confirm' | 'reset' }>`
  min-width: 28px;
  height: 22px;
  background-color: white;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(119, 127, 152, 0.2);
  font-size: 13px;
  font-weight: 600;
  pointer-events: auto;
  transition: all 0.2s ease;

  &:hover {
    background-color: lightgray;
    transform: scale(1.1);
  }
`;

interface ConfirmResetButtonsProps {
  onConfirm: () => void;
  onReset: () => void;
}

export const ConfirmResetButtons: React.FC<ConfirmResetButtonsProps> = ({ onConfirm, onReset }) => {
  const stopDragStart = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleConfirm = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering drag events
    onConfirm();
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering drag events
    onReset();
  };

  return (
    <ButtonContainer onMouseDown={stopDragStart}>
      <Button $variant="confirm" onClick={handleConfirm}>
        ✓
      </Button>
      <Button $variant="reset" onClick={handleReset}>
        ✕
      </Button>
    </ButtonContainer>
  );
};

export default ConfirmResetButtons; 