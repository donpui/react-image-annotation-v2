import React, { Component } from 'react';
import Annotation, { AnnotationType, AnnotationOwnProps } from '../../../../../src';
import {
  PointSelector,
  RectangleSelector,
  OvalSelector
} from '../../../../../src/selectors.ts';
import Button from '../../Button/index.tsx';
import defaultProps from '../../../../../src/components/defaultProps.tsx';
// import mocks from '../../../mocks'; // Comment out typed import
const mocks: any = {}; // Temporary untyped mock
import img from '../../../img.jpeg';

interface MultipleState {
  type: string;
  annotations: AnnotationType[];
  annotation: Partial<AnnotationType>; // For the annotation being created
}

export default class Multiple extends Component<{}, MultipleState> {
  state: MultipleState = {
    type: RectangleSelector.TYPE,
    annotations: (mocks.annotations || []) as AnnotationType[], // Use || [] and keep AnnotationType cast
    annotation: {}
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
          geometry: geometry as AnnotationType['geometry'], // Ensure geometry is not partial
          data: {
            ...(data as Partial<AnnotationType['data']>),
            id: Math.random()
          }
        } as AnnotationType)
      }));
    }
  }

  onChangeType = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      annotation: {},
      type: e.currentTarget.innerHTML
    });
  }

  render() {
    const annotationProps: AnnotationOwnProps = {
      ...defaultProps,
      src: img,
      alt: 'Two pebbles anthropomorphized holding hands',
      annotations: this.state.annotations,
      type: this.state.type,
      value: this.state.annotation as any,
      onChange: this.onChange as any,
      onSubmit: this.onSubmit as any,
    };

    return (
      <div>
        <Button
          onClick={this.onChangeType}
          active={RectangleSelector.TYPE === this.state.type}
        >
          {RectangleSelector.TYPE}
        </Button>
        <Button
          onClick={this.onChangeType}
          active={PointSelector.TYPE === this.state.type}
        >
          {PointSelector.TYPE}
        </Button>
        <Button
          onClick={this.onChangeType}
          active={OvalSelector.TYPE === this.state.type}
        >
          {OvalSelector.TYPE}
        </Button>

        <Annotation
          {...annotationProps}
        />
      </div>
    );
  }
} 