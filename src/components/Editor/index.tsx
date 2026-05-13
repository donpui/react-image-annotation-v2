import React from 'react'
import styled, { keyframes } from 'styled-components'
import TextEditor from '../TextEditor'
import { AnnotationValue } from '../Annotation'
import { EMPTY_STYLE } from '../../reactStableDefaults'

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

type EditorPlacement = 'above' | 'below';

const EDITOR_OFFSET_PX = 16;

const Container = styled.div<{ $placement: EditorPlacement }>`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transform-origin: ${({ $placement }) => $placement === 'above' ? 'bottom left' : 'top left'};

  animation: ${fadeInScale} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`

interface EditorProps {
  annotation: AnnotationValue;
  onChange: (annotation: AnnotationValue) => void;
  onSubmit: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Editor: React.FC<EditorProps> = ({
  annotation,
  onChange,
  onSubmit,
  className = '',
  style = EMPTY_STYLE
}) => {
  const { geometry } = annotation;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [placement, setPlacement] = React.useState<EditorPlacement>('below');

  React.useLayoutEffect(() => {
    const editor = containerRef.current;
    const annotationContainer = editor?.parentElement;

    if (!editor || !annotationContainer || !geometry) return;

    const containerRect = annotationContainer.getBoundingClientRect();
    const editorHeight = editor.offsetHeight;
    const annotationBottom = ((geometry.y ?? 0) + (geometry.height ?? 0)) / 100 * containerRect.height;
    const nextPlacement = annotationBottom + EDITOR_OFFSET_PX + editorHeight > containerRect.height ? 'above' : 'below';

    setPlacement(nextPlacement);
  }, [geometry, annotation.data?.text]);

  if (!geometry) return null;

  const positionStyle: React.CSSProperties = placement === 'above'
    ? {
      bottom: `calc(${100 - (geometry.y ?? 0)}% + ${EDITOR_OFFSET_PX}px)`
    }
    : {
      top: `calc(${(geometry.y ?? 0) + (geometry.height ?? 0)}% + ${EDITOR_OFFSET_PX}px)`
    };

  return (
    <Container
      ref={containerRef}
      className={className}
      $placement={placement}
      style={{
        position: 'absolute',
        left: `${geometry.x ?? 0}%`,
        ...positionStyle,
        ...style
      }}
    >
      <TextEditor
        onChange={e => onChange({
          ...annotation,
          data: {
            ...annotation.data,
            text: e.target.value
          }
        })}
        onSubmit={onSubmit}
        value={annotation.data?.text}
      />
    </Container>
  );
};

export default Editor;
