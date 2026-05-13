import React from 'react';
import styled from 'styled-components';

const DeleteContainer = styled.div`
  border-radius: 10px;
  position: absolute;
  border: none !important;
  box-shadow: 0 0 10px rgba(119, 127, 152, 0.2);
  font-size: 16px;
  z-index: 20;
  background-color: white;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: -10px;
  right: -10px;
  pointer-events: auto;
  transition: all 0.2s ease;

  /* Add larger hover area using pseudo-element */
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: -5px;
    left: -5px;
    z-index: -1;
    pointer-events: auto;
  }

  &:hover {
    background-color: #f5f5f5;
    transform: scale(1.1);
  }
`;

const DeleteIcon = styled.div`
  &::before {
    content: "×";
    font-size: 14px;
    font-weight: bold;
    color: #666;
    line-height: 1;
  }
`;

interface DeleteButtonProps {
  annotationId: string | number;
  onRemove: (annotationId: string | number) => void;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ annotationId, onRemove }) => {
  const handleRemoveAnnotationClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering drag events
    onRemove(annotationId);
  };

  return (
    <DeleteContainer onClick={handleRemoveAnnotationClick}>
      <DeleteIcon />
    </DeleteContainer>
  );
};

export default DeleteButton; 