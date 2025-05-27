import React from 'react'
import styled, { keyframes } from 'styled-components'
import TextEditor from '../TextEditor'
import { AnnotationValue } from '../Annotation'

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

const Container = styled.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

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
  style = {}
}) => {
  const { geometry } = annotation;
  if (!geometry) return null;

  return (
    <Container
      className={className}
      style={{
        position: 'absolute',
        left: `${geometry.x}%`,
        top: `${geometry.y + geometry.height}%`,
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
