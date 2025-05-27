import React, { Component } from 'react'
import { Annotation, AnnotationType } from '../../../../../src'

import Root from '../../Root'
import img from '../../../img.jpeg'

interface SimpleState {
  annotations: AnnotationType[]
  annotation: Partial<AnnotationType>
}

export default class Simple extends Component<{}, SimpleState> {
  state: SimpleState = {
    annotations: [],
    annotation: {}
  }

  onChange = (annotation: Partial<AnnotationType>) => {
    this.setState({ annotation })
  }

  onSubmit = (annotation: Partial<AnnotationType>) => {
    const { geometry, data } = annotation

    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry: geometry!,
        data: {
          ...data,
          id: Math.random()
        }
      } as AnnotationType)
    })
  }

  render () {
    return (
      <Root>
        <Annotation
          src={img}
          alt='Two pebbles anthropomorphized holding hands'

          annotations={this.state.annotations}

          type={this.state.type}
          value={this.state.annotation}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          allowTouch
        />
      </Root>
    )
  }
}
