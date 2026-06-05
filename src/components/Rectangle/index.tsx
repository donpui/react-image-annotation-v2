import React from 'react'
import styled from 'styled-components'
import { EMPTY_STYLE } from '../../reactStableDefaults'

const Container = styled.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`

interface RectangleProps {
  annotation: {
    geometry?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
  className?: string;
  style?: React.CSSProperties;
  active?: boolean;
}

function Rectangle ({
  annotation,
  className = '',
  style = EMPTY_STYLE,
  active,
}: RectangleProps) {
  const { geometry } = annotation
  if (!geometry) return null

  return (
    <Container
      className={className}
      style={{
        position: 'absolute',
        left: `${geometry.x}%`,
        top: `${geometry.y}%`,
        height: `${geometry.height}%`,
        width: `${geometry.width}%`,
        boxShadow: active ? '0 0 1px 1px yellow inset' : undefined,
        ...style
      }}
    />
  )
}

export default Rectangle 