import React, { useState } from 'react'
import Annotation from 'react-image-annotation-v2'
import { AnnotationType, AnnotationValue, RectangleSelector } from 'react-image-annotation-v2'
import img from '../../../img.jpeg'

const Simple: React.FC = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([])
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
        id: Math.random()
      }
    } as AnnotationType))
    setAnnotation({})
  }

  return ( 
      <Annotation
        src={img}
        alt='Two pebbles anthropomorphized holding hands'
        annotations={annotations}
        type={RectangleSelector.TYPE}
        value={annotation}
        onChange={onChange}
        onSubmit={onSubmit}
      />
  )
}

export default Simple
