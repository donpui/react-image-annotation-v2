import React, { useState } from 'react';
import Annotation from '../../../../../src/components/Annotation';
import { RectangleSelector } from '../../../../../src/selectors';
import type {
  Annotation as AnnotationType,
  AnnotationValue,
} from '../../../../../src/types/core';
import img from '../../../img.jpeg';
import { analysisDrawingCursor } from '../../../utils/analysisDrawingCursor';

const DrawingCursor: React.FC = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([]);
  const [draft, setDraft] = useState<AnnotationValue>({});

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
          id: Math.random().toString(),
        },
      } as AnnotationType)
    );
    setDraft({});
  };

  return (
    <div>
      <p>
        Click and drag on the image to draw a rectangle. While dragging, the cursor
        switches to a custom crosshair via <code>drawingCursor</code>.
      </p>
      <Annotation
        src={img}
        alt="Annotation with custom drawing cursor"
        annotations={annotations}
        type={RectangleSelector.TYPE}
        selectors={[RectangleSelector]}
        value={draft}
        onChange={onChange}
        onSubmit={onSubmit}
        drawingCursor={analysisDrawingCursor}
      />
    </div>
  );
};

export default DrawingCursor;
