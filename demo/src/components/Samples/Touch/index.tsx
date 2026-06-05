import React, { useState, useCallback } from 'react'
import Annotation, { AnnotationType, AnnotationOwnProps } from '../../../../../src'
import {
  PointSelector,
  RectangleSelector,
  OvalSelector
} from '../../../../../src/selectors.ts'

import Button from '../../Button/Button.tsx';
import defaultProps from '../../../../../src/components/defaultProps.tsx'

import mocks from '../../../mocks.js'
import img from '../../../img.jpeg'

const annotationsData = (mocks as any).annotations;

const Touch: React.FC = () => {
  const [type, setType] = useState<string>(RectangleSelector.TYPE);
  const [annotations, setAnnotations] = useState<AnnotationType[]>(annotationsData as AnnotationType[]);
  const [annotation, setAnnotation] = useState<Partial<AnnotationType>>({});
  const [allowTouch, setAllowTouch] = useState<boolean>(true);

  const onChange = useCallback((annotation: Partial<AnnotationType>) => {
    setAnnotation(annotation);
  }, []);

  const onSubmit = useCallback((annotation: Partial<AnnotationType>) => {
    const { geometry, data } = annotation;
    if (
      geometry &&
      data &&
      geometry.type &&
      typeof geometry.x === 'number' &&
      typeof geometry.y === 'number' &&
      typeof geometry.width === 'number' &&
      typeof geometry.height === 'number'
    ) {
      setAnnotations(prevAnnotations => prevAnnotations.concat({
        geometry: geometry as AnnotationType['geometry'],
        data: {
          ...(data as Partial<AnnotationType['data']>),
          id: Math.random()
        }
      } as AnnotationType));
      setAnnotation({});
    } else {
      setAnnotation(annotation);
      console.warn('Attempted to submit an incomplete annotation', annotation);
    }
  }, []);

  const onChangeType = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setAnnotation({});
    setType(e.currentTarget.innerHTML);
  }, []);

  const toggleAllowTouch = useCallback(() => {
    setAllowTouch(prev => !prev);
  }, []);

  const annotationProps: AnnotationOwnProps = {
    ...defaultProps,
    src: img,
    alt: 'Two pebbles anthropomorphized holding hands',
    annotations,
    allowTouch,
    type,
    value: annotation as any,
    onChange: onChange as any,
    onSubmit: onSubmit as any,
  };

  return (
    <div>
      <div>
        <Button onClick={toggleAllowTouch}>
          {allowTouch ? 'Stop allowing touch' : 'Start allowing touch'}
        </Button>
      </div>
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
      </div>
      <Annotation {...annotationProps} />
    </div>
  );
};

export default Touch; 