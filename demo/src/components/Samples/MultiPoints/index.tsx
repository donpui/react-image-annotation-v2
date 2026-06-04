import React, { useState } from 'react';
import Annotation from '../../../../../src/components/Annotation';
import { PolygonSelector } from '../../../../../src/selectors';
import Polygon from '../../../../../src/components/Polygon';
import Editor from '../../../../../src/components/Editor';
import Content from '../../../../../src/components/Content';
import Overlay from '../../../../../src/components/Overlay';
import type {
  Annotation as AnnotationType,
  AnnotationValue,
} from '../../../../../src/types/core';
import img from '../../../img.jpeg';

const MultiPoints: React.FC = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([]);
  const [annotation, setAnnotation] = useState<AnnotationValue>({});

  const onChange = (value: AnnotationValue) => {
    setAnnotation(value);
  };

  const onSubmit = (value: AnnotationValue) => {
    const { geometry, data } = value;
    if (!geometry || !geometry.type || !geometry.points || geometry.points.length < 3) return;
    setAnnotations(prev =>
      prev.concat({
        geometry: geometry as AnnotationType['geometry'],
        data: {
          ...data,
          id: Math.random(),
        },
      } as AnnotationType)
    );
    setAnnotation({});
  };

  const pointCount = annotation?.geometry?.points?.length ?? 0;
  const isCollecting = annotation?.selection?.mode === 'COLLECTING_POINTS';

  return (
    <div>
      <h3>Multi-point Polygon Annotation</h3>
      <p>
        Click to place points (min 3, max {PolygonSelector.MAX_POINTS}). Double-click or click
        the first point (highlighted in green) to close the polygon. Press <kbd>Esc</kbd> to
        cancel.
      </p>
      {isCollecting && (
        <p style={{ color: '#555', fontSize: 13 }}>
          {pointCount} point{pointCount !== 1 ? 's' : ''} placed
          {pointCount >= 3 ? ' — double-click or click the first point to finish' : ''}
        </p>
      )}
      <Annotation
        src={img}
        alt="Two pebbles anthropomorphized holding hands"
        annotations={annotations}
        type={PolygonSelector.TYPE}
        selectors={[PolygonSelector]}
        value={annotation}
        onChange={onChange}
        onSubmit={onSubmit}
        renderSelector={({ annotation: ann }) =>
          ann.geometry?.type === PolygonSelector.TYPE ? (
            <Polygon annotation={ann as any} />
          ) : null
        }
        renderHighlight={({ key, annotation: ann, active }) =>
          ann.geometry?.type === PolygonSelector.TYPE ? (
            <Polygon key={key} annotation={ann as any} active={active} />
          ) : null
        }
        renderEditor={({ annotation: ann, onChange: onEditorChange, onSubmit: onEditorSubmit }) => (
          <Editor
            annotation={ann}
            onChange={onEditorChange}
            onSubmit={onEditorSubmit}
          />
        )}
        renderContent={({ key, annotation: ann }) => (
          <Content key={key} annotation={ann} />
        )}
        renderOverlay={({ type }) =>
          type === PolygonSelector.TYPE ? (
            <Overlay>
              Click to add points · Double-click or click first point to finish · Esc to cancel
            </Overlay>
          ) : null
        }
      />
    </div>
  );
};

export default MultiPoints;
