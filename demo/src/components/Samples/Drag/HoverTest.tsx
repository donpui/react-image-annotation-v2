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

const HoverTest: React.FC = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([
    // Add a test annotation to start with
    {
      geometry: { type: 'RECTANGLE', x: 10, y: 10, width: 30, height: 20 },
      data: { id: 'test-1', text: 'Test annotation' }
    },
    {
      geometry: { type: 'RECTANGLE', x: 50, y: 30, width: 25, height: 15 },
      data: { id: 'test-2', text: 'Another test' }
    }
  ])
  const [annotation, setAnnotation] = useState<AnnotationValue>({})
  const [activeAnnotationId, setActiveAnnotationId] = useState<string | null>(null)

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
    
    // Track which annotation is active
    if (active && activeAnnotationId !== annotation.data?.id) {
      setActiveAnnotationId(annotation.data?.id as string)
    } else if (!active && activeAnnotationId === annotation.data?.id) {
      setActiveAnnotationId(null)
    }
    
    return <Rectangle
      key={uniqueKey}
      annotation={annotation as any}
      active={active}
      style={{
        border: active ? '3px solid lime' : '2px dashed red',
        boxShadow: active ? '0 0 10px lime' : 'none'
      }}
    />
  }, [activeAnnotationId])

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
    enableRemoval,
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
    enableRemoval?: boolean;
    onRemoveAnnotation?: (annotationId: string | number) => void;
  }) => {
    // Track which annotation is active
    if (active && activeAnnotationId !== annotation.data?.id) {
      setActiveAnnotationId(annotation.data?.id as string)
    } else if (!active && activeAnnotationId === annotation.data?.id) {
      setActiveAnnotationId(null)
    }

    // Show draggable box for existing annotations that are hovered
    if (!annotation.data?.id || !isHovered) {
      return <Rectangle
        key={annotation.data?.id || 'new-annotation'}
        annotation={annotation as any}
        active={active}
        style={{
          border: '2px dashed red',
          boxShadow: 'none'
        }}
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
         enableRemoval={enableRemoval}
         onRemoveAnnotation={onRemoveAnnotation}
       />
     )
   }, [activeAnnotationId])

   const renderContent = useCallback(({ annotation }: { key: string | number; annotation: AnnotationType }) => {
     return <Content key={annotation.data?.id} annotation={annotation} />
   }, [])

   const renderOverlay = useCallback(({ type }: { type?: string; annotation?: AnnotationValue }) => {
     return <Overlay>Hover over rectangles to see them become active</Overlay>
   }, [])

      return (
      <div>
        <h3>Hover Test - Active Annotation: {activeAnnotationId || 'None'}</h3>
        <p>
          Red dashed border = inactive annotation<br/>
          Lime border with glow = active annotation<br/>
          DraggableBox with controls = hovered annotation (editing ready)<br/>
          X button = delete annotation button (click to remove)<br/>
          Move your mouse over the rectangles to see them become draggable immediately
        </p>
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
          renderDraggableHighlight={renderDraggableHighlight}
          enableRemoval={true}
          onRemoveAnnotation={handleRemoveAnnotation}
        />
      </div>
    </div>
  )
}

export default HoverTest 