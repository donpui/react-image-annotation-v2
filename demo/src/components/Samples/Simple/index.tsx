import React, { useState } from 'react'
import Annotation from '../../../../../src/components/Annotation'
import { RectangleSelector } from '../../../../../src/selectors'
import type { Annotation as AnnotationType, AnnotationValue } from '../../../../../src/types/core'
import img from '../../../img.jpeg'

const Simple: React.FC = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([
    {
      geometry: {
        type: 'RECTANGLE',
        x: 10,
        y: 10,
        width: 30,
        height: 20,
      },
      data: {
        id: 'test-1',
        text: 'Test Rectangle 1'
      }
    },
    {
      geometry: {
        type: 'RECTANGLE',
        x: 50,
        y: 40,
        width: 25,
        height: 15,
      },
      data: {
        id: 'test-2',
        text: 'Test Rectangle 2'
      }
    }
  ])
  const [annotation, setAnnotation] = useState<AnnotationValue>({})

  const onChange = (annotation: AnnotationValue) => {
    console.log('✏️ Annotation changed:', annotation)
    setAnnotation(annotation)
  }

  const onSubmit = (annotation: AnnotationValue) => {
    const { geometry, data } = annotation
    if (!geometry || !geometry.type) return

    setAnnotations(prev => prev.concat({
      geometry: geometry as any,
      data: {
        ...data,
        id: Math.random()
      }
    } as AnnotationType))
    setAnnotation({})
  }

  return ( 
    <div>
      <h3>Simple Demo with Test Annotations</h3>
      <p>Hover over the blue rectangles to test hit detection. Check browser console for debug logs.</p>
      <Annotation
        src={img}
        alt='Two pebbles anthropomorphized holding hands'
        annotations={annotations}
        type={RectangleSelector.TYPE}
        selectors={[RectangleSelector]}
        value={annotation}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Simple
