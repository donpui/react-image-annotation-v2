import React, { useState, useCallback } from 'react'
import Annotation from '../../../../../src/components/Annotation'
import { Annotation as AnnotationType, AnnotationValue } from '../../../../../src/components/Annotation'
import { RectangleSelector } from '../../../../../src/selectors'
import { DraggableBox } from '../../../../../src/components/DraggableBox'
import img from '../../../img.jpeg'
import Editor from '../../../../../src/components/Editor'
import FancyRectangle from '../../../../../src/components/FancyRectangle'
import Rectangle from '../../../../../src/components/Rectangle'
import Content from '../../../../../src/components/Content'
import Overlay from '../../../../../src/components/Overlay'

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

  const renderDraggableHighlight = useCallback(({
    annotation,
    active,
    isDragging,
    isHovered,
    onDotDragStart,
    onDotDrag,
    onMoveStart,
    onMove,
    onDragEnd,
    allowDelete,
    onRemoveAnnotation
  }: {
    annotation: AnnotationType;
    active: boolean;
    isDragging: boolean;
    isHovered: boolean;
    onDotDragStart: (annotationId: string, initialCursorPosition: { x: number; y: number }) => void;
    onDotDrag: (event: React.MouseEvent, position: string, initialCursorPosition: { x: number; y: number }) => void;
    onMoveStart: (annotationId: string, initialCursorPosition: { x: number; y: number }) => void;
    onMove: (event: React.MouseEvent, initialCursorPosition: { x: number; y: number }) => void;
    onDragEnd: () => void;
    allowDelete?: boolean;
    onRemoveAnnotation?: (annotationId: string | number) => void;
  }) => {
    // Show draggable box for existing annotations that are hovered
    if (!annotation.data?.id || !isHovered) {
      return <Rectangle
        key={annotation.data?.id || 'new-annotation'}
        annotation={annotation as any}
        active={active}
      />
    }
    
    return (
      <DraggableBox
        annotation={annotation as any}
        onDotDragStart={onDotDragStart}
        onDotDrag={onDotDrag}
        onMoveStart={onMoveStart}
        onMove={onMove}
        onDragEnd={onDragEnd}
        isDragging={isDragging}
        allowDelete={allowDelete}
        onRemoveAnnotation={onRemoveAnnotation}
      />
    )
   }, [])

   const renderContent = useCallback(({ annotation }: { key: string | number; annotation: AnnotationType }) => {
     return <Content key={annotation.data?.id} annotation={annotation} />
   }, [])

   const renderOverlay = useCallback(({ type }: { type?: string; annotation?: AnnotationValue }) => {
     return <Overlay>Click and Drag to Annotate</Overlay>
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
          renderHighlight={renderHighlight}
          renderEditor={renderEditor}
          renderSelector={renderSelector}
          renderContent={renderContent}
          renderOverlay={renderOverlay}
          enableEditing={true}
          onAnnotationsChange={handleAnnotationsChange}
          allowDelete={true}
          onRemoveAnnotation={handleRemoveAnnotation}
        />
      </div>
    </div>
  )
}

export default Drag
