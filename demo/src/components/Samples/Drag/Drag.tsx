import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Annotation from '../../../../../src/components/Annotation';
import {
  Annotation as AnnotationType,
  AnnotationValue,
} from '../../../../../src/types/core';
import { RectangleSelector } from '../../../../../src/selectors';
import img from '../../../img.jpeg';

const CoordinateTooltip = styled.div<{ $top: number; $left: number }>`
  position: absolute;
  top: ${(props) => props.$top}%;
  left: ${(props) => props.$left}%;
  transform: translateY(100%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-family: monospace;
  pointer-events: none;
  z-index: 20;
`;

const Drag: React.FC = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([
    {
      geometry: { type: 'RECTANGLE', x: 10, y: 10, width: 30.2, height: 20.2 },
      data: { id: 'test-1', text: 'Hover to edit — drag handles, move icon, ✓/✕' },
    },
  ]);
  const [annotation, setAnnotation] = useState<AnnotationValue>({});

  const onChange = (value: AnnotationValue) => {
    setAnnotation(value);
  };

  const onSubmit = (value: AnnotationValue) => {
    const { geometry, data } = value;
    if (!geometry || !geometry.type) return;

    setAnnotations((prev) =>
      prev.concat({
        geometry: geometry as AnnotationType['geometry'],
        data: {
          ...data,
          id: Math.random().toString(),
        },
      } as AnnotationType)
    );
    setAnnotation({});
  };

  const handleAnnotationsChange = useCallback((next: AnnotationType[]) => {
    setAnnotations(next);
  }, []);

  const handleConfirm = useCallback((annotationId: string | number) => {
    console.log('Confirmed:', annotationId);
  }, []);

  const handleReset = useCallback((annotationId: string | number) => {
    console.log('Reset:', annotationId);
  }, []);

  return (
    <div>
      <p>
        Hover a rectangle to enter edit mode. Resize with edge dots, move with the
        center icon. While dragging, use ✓ to confirm or ✕ to cancel. Moving the
        cursor outside the box (when not dragging) also cancels.
      </p>
      <div className="annotation-container" style={{ position: 'relative' }}>
        <Annotation
          src={img}
          alt="Two pebbles anthropomorphized holding hands"
          annotations={annotations}
          type={RectangleSelector.TYPE}
          selectors={[RectangleSelector]}
          disableContent={true}
          value={annotation}
          onChange={onChange}
          onSubmit={onSubmit}
          enableEditing
          onAnnotationsChange={handleAnnotationsChange}
          onConfirm={handleConfirm}
          onReset={handleReset}
        />
        {annotations.map((item) => {
          const { geometry } = item;
          if (
            !geometry ||
            typeof geometry.x !== 'number' ||
            typeof geometry.y !== 'number'
          ) {
            return null;
          }
          return (
            <CoordinateTooltip
              key={item.data?.id}
              $top={geometry.y + (geometry.height ?? 0)}
              $left={geometry.x}
            >
              x: {Math.round(geometry.x)}, y: {Math.round(geometry.y)}, w:{' '}
              {Math.round(geometry.width ?? 0)}, h: {Math.round(geometry.height ?? 0)}
            </CoordinateTooltip>
          );
        })}
      </div>
    </div>
  );
};

export default Drag;
