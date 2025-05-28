import React, { useState } from 'react';
import Annotation, { AnnotationType } from '../../../../../src';
import { RectangleSelector, PointSelector, OvalSelector } from '../../../../../src';
import defaultProps from '../../../../../src/components/defaultProps.tsx';

import Button from '../../Button/index.tsx';
import img from '../../../img.jpeg';

const Multiple: React.FC = () => {
  const [type, setType] = useState<string>(RectangleSelector.TYPE);
  const [annotations, setAnnotations] = useState<AnnotationType[]>([]);
  const [annotation, setAnnotation] = useState<Partial<AnnotationType>>({});

  const onChange = (annotation: Partial<AnnotationType>) => {
    setAnnotation(annotation);
  };

  const onSubmit = (annotation: Partial<AnnotationType>) => {
    const { geometry, data } = annotation;
    if (
      geometry &&
      data &&
      geometry.type &&
      typeof geometry.x === 'number' &&
      typeof geometry.y === 'number'
    ) {
      setAnnotations(prevAnnotations =>
        prevAnnotations.concat({
          geometry: geometry as AnnotationType['geometry'],
          data: {
            ...(data as Partial<AnnotationType['data']>),
            id: Math.random()
          }
        } as AnnotationType)
      );
      setAnnotation({});
    }
  };

  const onChangeType = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnnotation({});
    setType(e.currentTarget.innerHTML);
  };

  return (
    <div>
      <Button
        onClick={onChangeType}
        active={RectangleSelector.TYPE === type}
      >
        {RectangleSelector.TYPE}
      </Button>
      <Button
        onClick={onChangeType}
        active={PointSelector.TYPE === type}
      >
        {PointSelector.TYPE}
      </Button>
      <Button
        onClick={onChangeType}
        active={OvalSelector.TYPE === type}
      >
        {OvalSelector.TYPE}
      </Button>

      <Annotation
        {...defaultProps}
        src={img}
        alt="Two pebbles anthropomorphized holding hands"
        annotations={annotations}
        type={type}
        value={annotation as any}
        onChange={onChange as any}
        onSubmit={onSubmit as any}
      />
    </div>
  );
};

export default Multiple; 