import React from 'react';
import styled from 'styled-components';
import { DeleteCrossIcon, DELETE_BUTTON_SIZE_PX } from './DeleteCrossIcon';

const DeleteContainer = styled.button<{ $disabled?: boolean }>`
  border-radius: 10px;
  position: relative;
  border: none !important;
  box-shadow: 0 0 10px rgba(119, 127, 152, 0.2);
  z-index: 1;
  background-color: white;
  height: ${DELETE_BUTTON_SIZE_PX}px;
  width: ${DELETE_BUTTON_SIZE_PX}px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    pointer-events: auto;
  }

  opacity: ${(p) => (p.$disabled ? 0.5 : 1)};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};

  &:hover:not(:disabled) {
    background-color: lightgray;
    transform: scale(1.1);
  }
`;

const CrossIcon = styled(DeleteCrossIcon)`
  width: 12px;
  height: 12px;
  color: #0f0f0f;
  flex-shrink: 0;
`;

interface DeleteButtonProps {
  annotationId: string | number;
  onRemove: (annotationId: string | number) => void | Promise<void>;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  annotationId,
  onRemove,
  disabled,
  className,
  style,
}) => {
  const handleRemoveAnnotationClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;
    void onRemove(annotationId);
  };

  return (
    <DeleteContainer
      type="button"
      className={className}
      style={style}
      onClick={handleRemoveAnnotationClick}
      disabled={disabled}
      aria-label="Remove annotation"
      $disabled={disabled}
      data-testid="annotation-delete-button"
    >
      <CrossIcon />
    </DeleteContainer>
  );
};

export default DeleteButton;
