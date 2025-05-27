import React, { Component } from 'react'
import Annotation, { AnnotationType, AnnotationOwnProps } from '../../../../../src'
import {
  PointSelector,
  RectangleSelector,
  OvalSelector
} from '../../../../../src/selectors.ts'

import Button from '../../Button/index.tsx'
import defaultProps from '../../../../../src/components/defaultProps.tsx'

import mocks from '../../../mocks'
import img from '../../../img.jpeg'

interface TouchState {
  type: string;
  annotations: AnnotationType[];
  annotation: Partial<AnnotationType>;
  allowTouch: boolean;
}

export default class Touch extends Component<{}, TouchState> {
  state: TouchState = {
    type: RectangleSelector.TYPE,
    annotations: mocks.annotations as AnnotationType[],
    annotation: {},
    allowTouch: true
  }

  onChange = (annotation: Partial<AnnotationType>) => {
    this.setState({ annotation })
  }

  onSubmit = (annotation: Partial<AnnotationType>) => {
    const { geometry, data } = annotation

    if (geometry && data && geometry.type && typeof geometry.x === 'number' && typeof geometry.y === 'number' && typeof geometry.width === 'number' && typeof geometry.height === 'number') {
      this.setState({
        annotation: {},
        annotations: this.state.annotations.concat({
          geometry: geometry as AnnotationType['geometry'],
          data: {
            ...(data as Partial<AnnotationType['data']>),
            id: Math.random()
          }
        } as AnnotationType)
      })
    } else {
      this.setState({ annotation })
      console.warn("Attempted to submit an incomplete annotation", annotation)
    }
  }

  onChangeType = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      annotation: {},
      type: e.currentTarget.innerHTML
    })
  }

  toggleAllowTouch = () => {
    this.setState(prevState => ({ allowTouch: !prevState.allowTouch }))
  }

  render() {
    const annotationProps: AnnotationOwnProps = {
      ...defaultProps,
      src: img,
      alt: "Two pebbles anthropomorphized holding hands",
      annotations: this.state.annotations,
      allowTouch: this.state.allowTouch,
      type: this.state.type,
      value: this.state.annotation as any,
      onChange: this.onChange as any,
      onSubmit: this.onSubmit as any,
    };

    return (
      <div>
        <div>
          <Button onClick={this.toggleAllowTouch}>
            {this.state.allowTouch
              ? 'Stop allowing touch'
              : 'Start allowing touch'}
          </Button>
        </div>
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
        </div>
        <Annotation
          {...annotationProps}
        />
      </div>
    )
  }
} 