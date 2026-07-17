import React from 'react'
import styled from 'styled-components'
import { EMPTY_STYLE } from '../../reactStableDefaults'
import type { AnnotationValue } from '../../types/core'

const Box = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

interface FancyRectangleProps {
  annotation: AnnotationValue;
  className?: string;
  style?: React.CSSProperties;
}

function FancyRectangle ({
  annotation,
  className = '',
  style = EMPTY_STYLE,
}: FancyRectangleProps) {
  const { geometry } = annotation

  if (
    !geometry ||
    typeof geometry.x !== 'number' ||
    typeof geometry.y !== 'number' ||
    typeof geometry.width !== 'number' ||
    typeof geometry.height !== 'number'
  ) {
    return null
  }

  return (
    <Container
      className={className}
      style={style}
    >
      <Box
        style={{
          height: `${geometry.y}%`,
          width: '100%'
        }}
      />
      <Box
        style={{
          top: `${geometry.y}%`,
          height: `${geometry.height}%`,
          width: `${geometry.x}%`
        }}
      />
      <Box
        style={{
          top: `${geometry.y}%`,
          left: `${geometry.x + geometry.width}%`,
          height: `${geometry.height}%`,
          width: `${100 - (geometry.x + geometry.width)}%`
        }}
      />
      <Box
        style={{
          top: `${geometry.y + geometry.height}%`,
          height: `${100 - (geometry.y + geometry.height)}%`,
          width: '100%'
        }}
      />
    </Container>
  )
}

export default FancyRectangle 