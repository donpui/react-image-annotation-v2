import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: absolute;
  bottom: -25px;
  right: 0;
  display: flex;
  gap: 5px;
`;

const Button = styled.button<{ $variant: 'confirm' | 'reset' }>`
  width: 20px;
  height: 20px;
  background-color: white;
  border: none;
  border-radius: 50%;
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
  const handleConfirm = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering drag events
    onConfirm();
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering drag events
    onReset();
  };

  return (
    <ButtonContainer>
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