import React, { useState, useCallback } from 'react'
import Annotation from '../../../../../src/components/Annotation'
import { Annotation as AnnotationType, AnnotationValue } from '../../../../../src/types/core'
import { RectangleSelector } from '../../../../../src/selectors'
import img from '../../../img.jpeg'
import Editor from '../../../../../src/components/Editor'
import FancyRectangle from '../../../../../src/components/FancyRectangle'
import Rectangle from '../../../../../src/components/Rectangle'
import Content from '../../../../../src/components/Content'
import Overlay from '../../../../../src/components/Overlay'
import { DraggableBox } from '../../../../../src/components/DraggableBox'

const Drag: React.FC = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([
    // Add a test annotation to start with
    {
      geometry: { type: 'RECTANGLE', x: 10, y: 10, width: 30.2, height: 20.2 },
      data: { id: 'test-1', text: 'Test annotation - hover me!' }
    }
  ])
  const [annotation, setAnnotation] = useState<AnnotationValue>({})

  const onChange = (annotation: AnnotationValue) => {
    setAnnotation(annotation)
  }

  const onSubmit = (annotation: AnnotationValue) => {
    const { geometry, data } = annotation
    if (!geometry || !geometry.type) return

    setAnnotations(prev => prev.concat({
      geometry: geometry as any,
      data: {
        ...data,
        id: Math.random().toString()
      }
    } as AnnotationType))
    setAnnotation({})
  }

  const renderCustomContent = useCallback(({ annotation }: { annotation: AnnotationValue }) => {
    const { geometry, data } = annotation;
  if (!geometry || !data || typeof geometry.x !== 'number' || typeof geometry.y !== 'number' || typeof geometry.height !== 'number' || typeof geometry.width !== 'number') return null;
  return (
    <div>
    <DraggableBox
      annotation={annotation}
      onDotDragStart={()=>{}}
      onDotDrag={()=>{}}
      onMoveStart={()=>{}}
      onMove={()=>{}}
      onDragEnd={()=>{}}
      onConfirm={()=>{}}
      onReset={()=>{}}
      enableRemoval={false}
      onRemoveAnnotation={()=>{}}
    />
    <div style={{ 
      position: 'absolute', 
      top: geometry.y + geometry.height + 5, 
      left: geometry.x,
      background: 'rgba(0,0,0,0.8)', 
      color: 'white', 
      padding: '4px 8px', 
      borderRadius: '4px',
      fontSize: '12px',
      fontFamily: 'monospace',
      pointerEvents: 'none',
      zIndex: 1000
    }}>
      x: {Math.round(geometry.x)}, y: {Math.round(geometry.y)}, w: {Math.round(geometry.width)}, h: {Math.round(geometry.height)}
    </div>
    </div>
  )
  }, [])

  return (
    <div>
      <div className="annotation-container" style={{ position: 'relative'}}>
        <Annotation
          src={img}
          alt='Two pebbles anthropomorphized holding hands'
          annotations={annotations}
          type={RectangleSelector.TYPE}
          selectors={[RectangleSelector]}
          value={annotation}
          onChange={onChange}
          onSubmit={onSubmit}
          renderContent={renderCustomContent}
        />
      </div>
    </div>
  )
}

export default Drag
