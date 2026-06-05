import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: absolute;
  bottom: -25px;
  right: 0;
  display: flex;
  gap: 5px;
  z-index: 20;
`;

const Button = styled.button`
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

  &:hover {
    background-color: lightgray;
  }
`;

interface ConfirmResetButtonsProps {
  onConfirm: () => void;
  onReset: () => void;
}

export const ConfirmResetButtons: React.FC<ConfirmResetButtonsProps> = ({
  onConfirm,
  onReset,
}) => {
  return (
    <ButtonContainer onMouseDown={(e) => e.stopPropagation()}>
      <Button type="button" onClick={(e) => { e.stopPropagation(); onConfirm(); }}>
        ✓
      </Button>
      <Button type="button" onClick={(e) => { e.stopPropagation(); onReset(); }}>
        ✕
      </Button>
    </ButtonContainer>
  );
};

export default ConfirmResetButtons;
