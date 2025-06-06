import React, { useState, useCallback } from 'react'
import Annotation from '../../../../../src/components/Annotation'
import { Annotation as AnnotationType, AnnotationValue } from '../../../../../src/components/Annotation'
import { RectangleSelector } from '../../../../../src/selectors'
import img from '../../../img.jpeg'
import Editor from '../../../../../src/components/Editor'
import FancyRectangle from '../../../../../src/components/FancyRectangle'
import Rectangle from '../../../../../src/components/Rectangle'
import Content from '../../../../../src/components/Content'
import Overlay from '../../../../../src/components/Overlay'

const SimpleDefaultDrag: React.FC = () => {
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
        id: Math.random().toString()
      }
    } as AnnotationType))
    setAnnotation({})
  }

  // Simple annotations change handler
  const handleAnnotationsChange = useCallback((newAnnotations: AnnotationType[]) => {
    setAnnotations(newAnnotations)
  }, [])

  const renderEditor = useCallback(({ annotation, onChange, onSubmit }: { 
    annotation: AnnotationValue; 
    onChange: (annotation: AnnotationValue) => void;
    onSubmit: () => void;
  }) => {
    return <Editor annotation={annotation as any} onChange={onChange} onSubmit={onSubmit} />
  }, [])

  const renderSelector = useCallback(({ annotation }: { annotation: AnnotationValue }) => {
    return <FancyRectangle annotation={annotation as any} />
  }, [])

  const renderHighlight = useCallback(({ annotation, active }: { annotation: AnnotationType; active: boolean }) => {
    const uniqueKey = annotation.data?.id || `annotation-${annotation.geometry?.x || 0}-${annotation.geometry?.y || 0}-${annotation.geometry?.width || 0}-${annotation.geometry?.height || 0}`
    return <Rectangle
      key={uniqueKey}
      annotation={annotation as any}
      active={active}
    />
  }, [])

   const renderContent = useCallback(({ annotation }: { key: string | number; annotation: AnnotationType }) => {
     return <Content key={annotation.data?.id} annotation={annotation} />
   }, [])

   const renderOverlay = useCallback(({ type }: { type?: string; annotation?: AnnotationValue }) => {
     return <Overlay>Click and Drag to Annotate</Overlay>
   }, [])

  return (
    <div>
      <h3>Simple Default Editing</h3>
      <p>This example uses the default renderDraggableHighlight. Just provide onAnnotationsChange!</p>
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
          renderHighlight={renderHighlight}
          renderEditor={renderEditor}
          renderSelector={renderSelector}
          renderContent={renderContent}
          renderOverlay={renderOverlay}
          enableEditing={true}
          onAnnotationsChange={handleAnnotationsChange}
          // renderDraggableHighlight is not provided - uses default!
        />
      </div>
    </div>
  )
}

export default SimpleDefaultDrag 