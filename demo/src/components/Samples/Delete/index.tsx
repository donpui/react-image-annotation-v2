import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Annotation from '../../../../../src/components/Annotation';
import type {
  Annotation as AnnotationType,
  AnnotationValue,
} from '../../../../../src/types/core';
import { RectangleSelector } from '../../../../../src/selectors';
import img from '../../../img.jpeg';

const Panel = styled.div`
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.5;

  label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }
`;

const Delete: React.FC = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([
    {
      geometry: { type: 'RECTANGLE', x: 12, y: 12, width: 28, height: 22 },
      data: { id: 'box-a', text: 'Region A' },
    },
    {
      geometry: { type: 'RECTANGLE', x: 52, y: 35, width: 24, height: 18 },
      data: { id: 'box-b', text: 'Region B', allowDelete: false },
    },
  ]);
  const [draft, setDraft] = useState<AnnotationValue>({});
  const [allowDelete, setAllowDelete] = useState(true);
  const [status, setStatus] = useState<string | null>(null);

  const onChange = (value: AnnotationValue) => {
    setDraft(value);
  };

  const onSubmit = (value: AnnotationValue) => {
    const { geometry, data } = value;
    if (!geometry?.type) return;

    setAnnotations((prev) =>
      prev.concat({
        geometry: geometry as AnnotationType['geometry'],
        data: {
          ...data,
          id: `box-${Date.now()}`,
        },
      } as AnnotationType)
    );
    setDraft({});
  };

  const canRemoveAnnotation = useCallback(
    (annotation: AnnotationType) => {
      if (!allowDelete) return false;
      if (annotation.data?.allowDelete === false) return false;
      return true;
    },
    [allowDelete]
  );

  const onRemoveAnnotation = useCallback(async (id: string | number) => {
    setStatus(`Removing ${id}…`);
    await new Promise((resolve) => setTimeout(resolve, 400));
    setAnnotations((prev) => prev.filter((a) => a.data?.id !== id));
    setStatus(`Removed ${id}`);
  }, []);

  return (
    <div>
      <Panel>
        <p>
          Hover a region to activate it, then click the × in the top-right corner.
          Built-in delete uses <code>enableRemoval</code> and{' '}
          <code>onRemoveAnnotation</code> (async-safe).
        </p>
        <label>
          <input
            type="checkbox"
            checked={allowDelete}
            onChange={(e) => setAllowDelete(e.target.checked)}
          />
          Allow delete (maps to <code>canRemoveAnnotation</code>)
        </label>
        {status ? <p>{status}</p> : null}
      </Panel>
      <div className="annotation-container" style={{ position: 'relative' }}>
        <Annotation
          src={img}
          alt="Sample image with deletable regions"
          annotations={annotations}
          type={RectangleSelector.TYPE}
          selectors={[RectangleSelector]}
          value={draft}
          onChange={onChange}
          onSubmit={onSubmit}
          enableRemoval
          canRemoveAnnotation={canRemoveAnnotation}
          onRemoveAnnotation={onRemoveAnnotation}
        />
      </div>
    </div>
  );
};

export default Delete;
