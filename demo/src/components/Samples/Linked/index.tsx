import React, { Component } from 'react';
import styled from 'styled-components';
import Annotation, { AnnotationType, AnnotationOwnProps } from '../../../../../src';
import Root from '../../Root/index.tsx';
import img from '../../../img.jpeg';
import defaultProps from '../../../../../src/components/defaultProps.tsx';

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

interface LinkedState {
  activeAnnotations: Array<string | number>; // IDs can be string or number
  annotations: AnnotationType[];
  annotation: Partial<AnnotationType>; // For new annotation
  type?: string; // For the selector type, if used for new annotations
}

export default class Linked extends Component<{}, LinkedState> {
  state: LinkedState = {
    activeAnnotations: [],
    annotations: [
      {
        data: { text: 'Hello!', id: 0.5986265691759928 },
        geometry: { type: 'RECTANGLE', x: 25.571428571428573, y: 33, width: 21.142857142857142, height: 34 }
      },
      {
        data: { text: 'Hi!', id: 0.5986265691759929 },
        geometry: { type: 'RECTANGLE', x: 50.571428571428573, y: 33, width: 21.142857142857142, height: 34 }
      }
    ] as AnnotationType[], // Cast initial annotations
    annotation: {},
    // type: RectangleSelector.TYPE // Assuming a default if new annotations can be drawn
  };

  onChange = (annotation: Partial<AnnotationType>) => {
    this.setState({ annotation });
  }

  onSubmit = (annotation: Partial<AnnotationType>) => {
    const { geometry, data } = annotation;
    if (geometry && data && geometry.type && typeof geometry.x === 'number' && typeof geometry.y === 'number') { // Basic checks
      this.setState(prevState => ({
        annotation: {},
        annotations: prevState.annotations.concat({
          geometry: geometry as AnnotationType['geometry'],
          data: {
            ...(data as Partial<AnnotationType['data']>),
            id: data.id || Math.random()
          }
        } as AnnotationType)
      }));
    }
  }

  onMouseOver = (id: string | number) => (e: React.MouseEvent) => {
    this.setState(prevState => ({
      activeAnnotations: [
        ...prevState.activeAnnotations,
        id
      ]
    }));
  }

  onMouseOut = (id: string | number) => (e: React.MouseEvent) => {
    this.setState(prevState => {
      const index = prevState.activeAnnotations.indexOf(id);
      if (index === -1) return prevState; 
      return {
        ...prevState, // Spread previous state
        activeAnnotations: [
          ...prevState.activeAnnotations.slice(0, index),
          ...prevState.activeAnnotations.slice(index + 1)
        ]
      };
    });
  }

  activeAnnotationComparator = (annotation: AnnotationType, activeId: string | number): boolean => {
    return annotation.data.id === activeId;
  }

  render() {
    const annotationProps: AnnotationOwnProps = {
      ...defaultProps, // Spreading default props
      src: img,
      alt: 'Two pebbles anthropomorphized holding hands',
      activeAnnotationComparator: this.activeAnnotationComparator as any, // Cast for now
      activeAnnotations: this.state.activeAnnotations,
      annotations: this.state.annotations,
      type: this.state.type, // This will be undefined if not drawing new annotations
      value: this.state.annotation as any, // Cast for AnnotationValue workaround
      onChange: this.onChange as any,     // Cast
      onSubmit: this.onSubmit as any,     // Cast
    };

    return (
      <Root>
        <Annotation
          {...annotationProps}
        />
        <h4>Annotations</h4>
        <Comments>
          {this.state.annotations.map(annotation => (
            <Comment
              onMouseOver={this.onMouseOver(annotation.data.id)}
              onMouseOut={this.onMouseOut(annotation.data.id)}
              key={annotation.data.id}
            >
              {annotation.data.text}
            </Comment>
          ))}
        </Comments>
      </Root>
    );
  }
} 