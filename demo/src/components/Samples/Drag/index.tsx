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
      geometry: { type: 'RECTANGLE', x: 10, y: 10, width: 30, height: 20 },
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

  const handleAnnotationsChange = useCallback((newAnnotations: AnnotationType[]) => {
    setAnnotations(newAnnotations)
  }, [])

  const handleRemoveAnnotation = useCallback((annotationId: string | number) => {
    setAnnotations(prev => prev.filter(ann => ann.data.id !== annotationId))
  }, [])

  const handleConfirm = useCallback((annotationId: string | number) => {
    // Changes are automatically applied by the dragging hook
    // This works silently, just like normal annotation changes
  }, [])

  const handleReset = useCallback((annotationId: string | number) => {
    // Changes are automatically reverted by the dragging hook
    // This works silently, just like canceling normal annotation changes
  }, [])

  const renderEditor = useCallback(({ annotation, onChange, onSubmit }: { 
    annotation: AnnotationValue; 
    onChange: (annotation: AnnotationValue) => void;
    onSubmit: () => void;
  }) => {
    return <Editor annotation={annotation as any} onChange={onChange} onSubmit={onSubmit} />
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
          renderEditor={renderEditor}
          enableEditing={true}
          enableRemoval={false}
          onAnnotationsChange={handleAnnotationsChange}
          onRemoveAnnotation={handleRemoveAnnotation}
          onConfirm={handleConfirm}
          onReset={handleReset}
        />
      </div>
    </div>
  )
}

export default Drag
