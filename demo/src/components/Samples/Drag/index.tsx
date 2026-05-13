import React, { useState, useCallback, useRef } from 'react';
import Annotation from '../../../../../src/components/Annotation';
import {
  Annotation as AnnotationType,
  AnnotationValue,
  Geometry,
  RenderContentProps,
  RenderHighlightProps,
} from '../../../../../src/types/core';
import {
  OvalSelector,
  PointSelector,
  RectangleSelector,
} from '../../../../../src/selectors';
import img from '../../../img.jpeg';
import Rectangle from '../../../../../src/components/Rectangle';
import { DraggableBox } from '../../../../../src/components/DraggableBox';
import Oval from '../../../../../src/components/Oval';
import Point from '../../../../../src/components/Point';

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const Drag: React.FC = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([
    // Add a test annotation to start with
    {
      geometry: { type: 'RECTANGLE', x: 10, y: 10, width: 30.2, height: 20.2 },
      data: { id: 'test-1', text: 'Test annotation - hover me!' },
    },
  ]);
  const [annotation, setAnnotation] = useState<AnnotationValue>({});
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [editModeAnnotationIds, setEditModeAnnotationIds] = useState<string[]>([]);
  const moveStateRef = useRef<{
    annotationId: string;
    geometry: Geometry;
    initialCursorPosition: { x: number; y: number };
  } | null>(null);

  const onChange = (annotation: AnnotationValue) => {
    setAnnotation(annotation);
  };

  const onSubmit = (annotation: AnnotationValue) => {
    const { geometry, data } = annotation;
    if (!geometry || !geometry.type) return;

    setAnnotations((prev) =>
      prev.concat({
        geometry: geometry as any,
        data: {
          ...data,
          id: Math.random().toString(),
        },
      } as AnnotationType)
    );
    setAnnotation({});
  };

  const endDragging = useCallback(() => {
    moveStateRef.current = null;
    setIsDragging(false);
    setEditModeAnnotationIds([]);
  }, []);

  const handleMoveStart = useCallback(
    (
      annotationId: string,
      initialCursorPosition: { x: number; y: number }
    ) => {
      const targetAnnotation = annotations.find(
        (annotation) => annotation.data?.id === annotationId
      );

      if (!targetAnnotation) return;

      moveStateRef.current = {
        annotationId,
        geometry: { ...targetAnnotation.geometry },
        initialCursorPosition,
      };
      setIsDragging(true);
      setEditModeAnnotationIds([annotationId]);
    },
    [annotations]
  );

  const handleMove = useCallback((event: React.MouseEvent) => {
    const moveState = moveStateRef.current;
    if (!moveState) return;

    const imageElement = document.querySelector<HTMLImageElement>(
      '.annotation-container img'
    );
    if (!imageElement) return;

    const rect = imageElement.getBoundingClientRect();
    const deltaX =
      ((event.clientX - moveState.initialCursorPosition.x) / rect.width) * 100;
    const deltaY =
      ((event.clientY - moveState.initialCursorPosition.y) / rect.height) * 100;
    const width = moveState.geometry.width ?? 0;
    const height = moveState.geometry.height ?? 0;

    setAnnotations((prev) =>
      prev.map((annotation) =>
        annotation.data?.id === moveState.annotationId
          ? {
              ...annotation,
              geometry: {
                ...annotation.geometry,
                x: clamp((moveState.geometry.x ?? 0) + deltaX, 0, 100 - width),
                y: clamp(
                  (moveState.geometry.y ?? 0) + deltaY,
                  0,
                  100 - height
                ),
              },
            }
          : annotation
      )
    );
  }, []);

  const renderCustomContent = useCallback(
    ({ annotation }: RenderContentProps) => {
      const { geometry, data } = annotation;
      if (
        !geometry ||
        !data ||
        typeof geometry.x !== 'number' ||
        typeof geometry.y !== 'number' ||
        typeof geometry.height !== 'number' ||
        typeof geometry.width !== 'number'
      )
        return null;
      return (
        <div>
          <DraggableBox
            annotation={annotation}
            onDragging={() => {
              setIsDragging(true);
              setEditModeAnnotationIds([annotation.data?.id as string]);
            }}
            onDraggingEnd={endDragging}
            onMoveStart={handleMoveStart}
            onMove={handleMove}
            onConfirm={() => {
              endDragging();
            }}
            onReset={() => {
              endDragging();
            }}
            enableRemoval={false}
            onRemoveAnnotation={() => {}}
            onAnnotationUpdate={(id, geometry) => {
              setAnnotations((prev) =>
                prev.map((a) => (a.data?.id === id ? { ...a, geometry } : a))
              );
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: geometry.y + geometry.height + 5,
              left: geometry.x,
              background: 'rgba(0,0,0,0.8)',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'monospace',
              pointerEvents: 'none',
              zIndex: 1000,
            }}
          >
            x: {Math.round(geometry.x)}, y: {Math.round(geometry.y)}, w:{' '}
            {Math.round(geometry.width)}, h: {Math.round(geometry.height)}
          </div>
        </div>
      );
    },
    [endDragging, handleMove, handleMoveStart]
  );

  const renderCustomHighlight = useCallback(
    ({ key, annotation, active }: RenderHighlightProps) => {
      if (isDragging) {
        return null;
      }

      switch (annotation.geometry.type) {
        case RectangleSelector.TYPE:
          return (
            <Rectangle
              key={key}
              annotation={annotation as any}
              active={active}
            />
          );
        case PointSelector.TYPE:
          return <Point key={key} annotation={annotation as any} />;
        case OvalSelector.TYPE:
          return (
            <Oval key={key} annotation={annotation as any} active={active} />
          );
        default:
          return null;
      }
    },
    [isDragging]
  );

  return (
    <div>
      <div className="annotation-container" style={{ position: 'relative' }}>
        <Annotation
          src={img}
          alt="Two pebbles anthropomorphized holding hands"
          annotations={annotations}
          type={RectangleSelector.TYPE}
          selectors={[RectangleSelector]}
          value={annotation}
          onChange={onChange}
          onSubmit={onSubmit}
          renderContent={renderCustomContent}
          renderHighlight={renderCustomHighlight}
          disableSelector={isDragging}
          disableEditor={isDragging}
          editModeAnnotationIds={editModeAnnotationIds}
        />
      </div>
    </div>
  );
};

export default Drag;
