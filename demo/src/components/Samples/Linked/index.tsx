import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Annotation, { AnnotationType, AnnotationOwnProps } from '../../../../../src';
import Root from '../../Root/index.tsx';
import img from '../../../img.jpeg';
import defaultProps from '../../../../../src/components/defaultProps.tsx';
import { RectangleSelector } from '../../../../../src/selectors.ts';

// Styled Components (same as before)
const Comments = styled.div`
  border: 1px solid black;
  max-height: 80px;
  overflow: auto;
`;

const Comment = styled.div`
  padding: 8px;

  &:nth-child(even) {
    background: rgba(0, 0, 0, .05);
  }
  &:hover {
    background: #ececec;
  }
`;

const initialAnnotations: AnnotationType[] = [
  {
    data: { text: 'Hello!', id: 0.5986265691759928 },
    geometry: { type: 'RECTANGLE', x: 25.571428571428573, y: 33, width: 21.142857142857142, height: 34 }
  },
  {
    data: { text: 'Hi!', id: 0.5986265691759929 },
    geometry: { type: 'RECTANGLE', x: 50.571428571428573, y: 33, width: 21.142857142857142, height: 34 }
  }
];

const Linked: React.FC = () => {
  const [activeAnnotations, setActiveAnnotations] = useState<Array<string | number>>([]);
  const [annotations, setAnnotations] = useState<AnnotationType[]>(initialAnnotations);
  const [annotation, setAnnotation] = useState<Partial<AnnotationType>>({});
  const [type] = useState<string>(RectangleSelector.TYPE);

  const onChange = useCallback((annotation: Partial<AnnotationType>) => {
    setAnnotation(annotation);
  }, []);

  const onSubmit = useCallback((annotation: Partial<AnnotationType>) => {
    const { geometry, data } = annotation;
    if (geometry && data && geometry.type && typeof geometry.x === 'number' && typeof geometry.y === 'number') {
      setAnnotations(prevAnnotations => prevAnnotations.concat({
        geometry: geometry as AnnotationType['geometry'],
        data: {
          ...(data as Partial<AnnotationType['data']>),
          id: data.id || Math.random()
        }
      } as AnnotationType));
      setAnnotation({});
    }
  }, []);

  const onMouseOver = useCallback((id: string | number) => (e: React.MouseEvent) => {
    setActiveAnnotations(prev => [...prev, id]);
  }, []);

  const onMouseOut = useCallback((id: string | number) => (e: React.MouseEvent) => {
    setActiveAnnotations(prev => {
      const index = prev.indexOf(id);
      if (index === -1) return prev;
      return [
        ...prev.slice(0, index),
        ...prev.slice(index + 1)
      ];
    });
  }, []);

  const activeAnnotationComparator = useCallback((annotation: AnnotationType, activeId: string | number): boolean => {
    return annotation.data.id === activeId;
  }, []);

  const annotationProps: AnnotationOwnProps = {
    ...defaultProps,
    src: img,
    alt: 'Two pebbles anthropomorphized holding hands',
    activeAnnotationComparator: activeAnnotationComparator as any,
    activeAnnotations,
    annotations,
    type: type || RectangleSelector.TYPE,
    value: annotation as any,
    onChange: onChange as any,
    onSubmit: onSubmit as any,
  };

  return (
    <Root>
      <Annotation {...annotationProps} />
      <h4>Annotations</h4>
      <Comments>
        {annotations.map(annotation => (
          <Comment
            onMouseOver={onMouseOver(annotation.data.id)}
            onMouseOut={onMouseOut(annotation.data.id)}
            key={annotation.data.id}
          >
            {annotation.data.text}
          </Comment>
        ))}
      </Comments>
    </Root>
  );
};

export default Linked; 