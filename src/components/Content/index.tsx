import React from 'react'
import styled from 'styled-components'
import type { Annotation } from '../../types/core'
import { EMPTY_STYLE } from '../../reactStableDefaults'

const Container = styled.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
  pointer-events: auto;
`

interface ContentProps {
  annotation: Annotation;
  style?: React.CSSProperties;
  className?: string;
}

function Content ({
  annotation,
  style = EMPTY_STYLE,
  className = '',
}: ContentProps) {
  const { geometry } = annotation
  if (!geometry || typeof geometry.x === 'undefined' || typeof geometry.y === 'undefined' || typeof geometry.width === 'undefined' || typeof geometry.height === 'undefined') return null

  return (
    <Container
      style={{
        marginTop: 8,
        marginLeft: 8,
        ...style
      }}
      className={className}
      // geometry={geometry} // Removed as it's not a standard prop for div
    >
      {annotation.data && annotation.data.text}
    </Container>
  )
}

export default Content 
