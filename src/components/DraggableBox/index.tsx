import React, { useCallback, useState, useRef } from 'react';
import styled from 'styled-components';
import { DraggableDot, MoveButton, DeleteButton, ConfirmResetButtons } from '../DraggableComponents';
import { Annotation } from '../../types/core';

interface DraggableBoxProps {
  annotation: Annotation;
  onDragging: () => void;
  onDraggingEnd: () => void;
  onMoveStart: (annotationId: string, initialCursorPosition: { x: number; y: number }) => void;
  onMove: (event: React.MouseEvent, initialCursorPosition: { x: number; y: number }) => void;
  isDragging?: boolean;
  enableRemoval?: boolean;
  onRemoveAnnotation?: (annotationId: string | number) => void;
  onConfirm?: (annotationId: string | number) => void;
  onReset?: (annotationId: string | number) => void;
  onAnnotationUpdate?: (annotationId: string, newGeometry: any) => void;
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
    border: ${props => props.$isDragging ? '1px dashed #FFFFFF' : '1px solid #1e90ff'};
    background: rgba(36, 179, 200, 0.2);
    box-shadow: 0 0 8px rgba(30, 144, 255, 0.4);
  }
`;

export const DraggableBox: React.FC<DraggableBoxProps> = ({
  annotation,
  onDragging,
  onDraggingEnd,
  onMoveStart,
  onMove,
  isDragging,
  enableRemoval,
  onRemoveAnnotation,
  onConfirm,
  onReset,
  onAnnotationUpdate,
}) => {
  const { geometry } = annotation;
  const annotationId = annotation.data?.id;
  const [localGeometry, setLocalGeometry] = useState(geometry);
  const [isDraggingDot, setIsDraggingDot] = useState(false);
  const isDraggingRef = useRef(false);
  const localGeometryRef = useRef(geometry);

  // Handle dot drag operations with local geometry updates
  const handleDotDragStart = useCallback((annotationId: string, initialCursorPosition: { x: number; y: number }) => {
    localGeometryRef.current = geometry;
    setLocalGeometry(geometry);
    setIsDraggingDot(true);
    isDraggingRef.current = true;
    onDragging();
  }, [geometry, onDragging]);

  const handleDotDrag = useCallback((event: React.MouseEvent, position: string, initialCursorPosition: { x: number; y: number }) => {
    // console.log('handleDotDrag called', position, 'isDraggingRef:', isDraggingRef.current);
    if (!isDraggingRef.current) return;
    
    // Find the image element using document query since we can't rely on event.currentTarget
    const imageElement = document.querySelector('img');
    
    let rect: DOMRect;
    let relativeX: number;
    let relativeY: number;
    
    if (imageElement) {
      rect = imageElement.getBoundingClientRect();
      relativeX = ((event.clientX - rect.left) / rect.width) * 100;
      relativeY = ((event.clientY - rect.top) / rect.height) * 100;
    } else {
      console.error('No image element found!');
      return;
    }
    
    // console.log('Mouse position:', event.clientX, event.clientY);
    // console.log('Rect:', rect);
    // console.log('Relative position:', relativeX, relativeY);
    
    const currentGeometry = localGeometryRef.current || geometry;
    let newGeometry = { ...currentGeometry };
    
    // Update geometry based on which dot is being dragged
    switch (position) {
      case 'top':
        const heightDiff = relativeY - (currentGeometry.y || 0);
        newGeometry.y = Math.max(0, Math.min(relativeY, (currentGeometry.y || 0) + (currentGeometry.height || 0) - 1));
        newGeometry.height = Math.max(1, (currentGeometry.height || 0) - heightDiff);
        break;
      case 'right':
        newGeometry.width = Math.max(1, Math.min(100 - (currentGeometry.x || 0), relativeX - (currentGeometry.x || 0)));
        break;
      case 'bottom':
        newGeometry.height = Math.max(1, Math.min(100 - (currentGeometry.y || 0), relativeY - (currentGeometry.y || 0)));
        break;
      case 'left':
        const widthDiff = relativeX - (currentGeometry.x || 0);
        newGeometry.x = Math.max(0, Math.min(relativeX, (currentGeometry.x || 0) + (currentGeometry.width || 0) - 1));
        newGeometry.width = Math.max(1, (currentGeometry.width || 0) - widthDiff);
        break;
    }
    
    localGeometryRef.current = newGeometry;
    setLocalGeometry(newGeometry);
  }, [geometry]);

  const handleDotDragEnd = useCallback(() => {
    setIsDraggingDot(false);
    isDraggingRef.current = false;

    // Update the annotation with the final geometry
    if (localGeometryRef.current && onAnnotationUpdate && annotationId) {
      onAnnotationUpdate(annotationId as string, localGeometryRef.current);
    }
    onDraggingEnd();
  }, [onDraggingEnd, onAnnotationUpdate, annotationId]);

  const handleMoveEnd = useCallback(() => {
    onDraggingEnd();
  }, [onDraggingEnd]);

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
      onDraggingEnd();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Use local geometry during dragging for smooth visual updates
  const displayGeometry = isDraggingDot ? localGeometry : geometry;
  if (
    !displayGeometry ||
    !displayGeometry.type ||
    typeof displayGeometry.x !== 'number' ||
    typeof displayGeometry.y !== 'number' ||
    typeof displayGeometry.width !== 'number' ||
    typeof displayGeometry.height !== 'number'
  ) {
    return null;
  }

  return (
    <BoxContainer
      style={{
        left: `${displayGeometry.x}%`,
        top: `${displayGeometry.y}%`,
        width: `${displayGeometry.width}%`,
        height: `${displayGeometry.height}%`,
        boxSizing: 'border-box',
      }}
      $isDragging={isDragging}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <DraggableDot position="top" onDragStart={handleDotDragStart} onDrag={handleDotDrag} onDragEnd={handleDotDragEnd} annotationId={annotation.data?.id as string} />
      <DraggableDot position="right" onDragStart={handleDotDragStart} onDrag={handleDotDrag} onDragEnd={handleDotDragEnd} annotationId={annotation.data?.id as string} />
      <DraggableDot position="bottom" onDragStart={handleDotDragStart} onDrag={handleDotDrag} onDragEnd={handleDotDragEnd} annotationId={annotation.data?.id as string} />
      <DraggableDot position="left" onDragStart={handleDotDragStart} onDrag={handleDotDrag} onDragEnd={handleDotDragEnd} annotationId={annotation.data?.id as string} />
      <MoveButton onMoveStart={onMoveStart} onMove={onMove} onMoveEnd={handleMoveEnd} annotationId={annotation.data?.id as string} />
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