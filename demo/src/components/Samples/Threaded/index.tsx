import React, { useState, useCallback } from 'react';
import Annotation from '../../../../../src';
import type { AnnotationType, AnnotationOwnProps } from '../../../../../src';
import styled, { keyframes } from 'styled-components';
import { RectangleSelector } from '../../../../../src/selectors.ts';
import TextEditor from '../../../../../src/components/TextEditor';
import Root from '../../Root/Root.tsx';
import img from '../../../img.jpeg';
import defaultProps from '../../../../../src/components/defaultProps.tsx';

// Interfaces
interface CommentData {
  id: number;
  text: string;
}

// Direct use of AnnotationType['data'] which is AnnotationData from the core component
type BaseAnnotationData = AnnotationType['data'];

interface AnnotationDataWithComments extends BaseAnnotationData {
  id: string | number;
  comments: CommentData[];
}

interface AnnotationWithComments extends Omit<AnnotationType, 'data'> {
  data: AnnotationDataWithComments;
}

interface ThreadedEditorProps {
  annotation: AnnotationWithComments;
  onChange: (annotation: AnnotationWithComments) => void;
  onSubmit: () => void;
  className?: string;
  style?: React.CSSProperties;
}

interface ThreadedContentProps {
  annotation: AnnotationWithComments;
  annotations: AnnotationWithComments[];
  onFocus: (id: any) => (e: any) => void;
  onBlur: (id: any) => (e: any) => void;
  setAnnotations: (annotations: AnnotationWithComments[]) => void;
  key?: any;
}

interface ThreadedState {
  activeAnnotations: string[]; 
  annotations: AnnotationWithComments[];
  annotation: Partial<AnnotationType>; 
}

let nextThreadedAnnotationId = 1;
let nextThreadedCommentId = 1;

const createThreadedAnnotationId = () => `threaded-annotation-${nextThreadedAnnotationId++}`;
const createThreadedCommentId = () => nextThreadedCommentId++;

// Styled Components (remain the same)
const Content = styled.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin: 8px 0;
`;

const ContentClearanceTop = styled.div`
  position: absolute;
  height: 8px;
  top: -8px;
  left: -17px;
  right: -17px;
`;

const ContentClearanceLeft = styled.div`
  position: absolute;
  height: 100%;
  left: -17px;
  width: 20px;
`;

const ContentClearanceRight = styled.div`
  position: absolute;
  height: 100%;
  right: 0px;
  width: 20px;
`;

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const EditorContainer = styled.div`
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
`;

const CommentDisplay = styled.div`
  border-bottom: 1px solid whitesmoke;
  padding: 8px 16px;
`;

const CommentDescription = styled.div`
  margin: 10px 0;
`;

const UserPill = styled.span`
  background-color: #2FB3C6;
  border-radius: 4px;
  color: white;
  padding: 2px 4px;
  font-size: 13.5px;
`;

const ThreadedEditor: React.FC<ThreadedEditorProps> = ({ annotation, onChange, onSubmit, className, style }) => {
  const geometry = annotation.geometry;
  if (!geometry) return null;
  const currentCommentText = annotation.data?.comments?.[0]?.text || '';

  const onUpdateText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!annotation || !annotation.data) return;
    onChange({
      ...annotation,
      data: {
        ...annotation.data,
        comments: [
          annotation.data.comments?.[0]
            ? {
                ...annotation.data.comments[0],
                text: e.target.value
              }
            : {
                id: createThreadedCommentId(),
                text: e.target.value
              }
        ]
      }
    });
  };

  return (
    <EditorContainer
      className={className}
      style={{
        position: 'absolute',
        left: `${geometry.x}%`,
        top: `${(geometry.y ?? 0) + (geometry.height ?? 0)}%`,
        ...style
      }}
    >
      <TextEditor
        onChange={onUpdateText}
        onSubmit={onSubmit}
        value={currentCommentText}
      />
    </EditorContainer>
  );
};

const ThreadedContent: React.FC<ThreadedContentProps> = ({ annotation, annotations, onFocus, onBlur, setAnnotations, key }) => {
  const [editorText, setEditorText] = useState('');
  const geometry = annotation.geometry;
  const data = annotation.data;
  const comments = data?.comments;
  if (!geometry || !data) return null;

  const onUpdateEditorText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditorText(e.target.value);
  };

  return (
    <React.Fragment>
      <Content
        key={data.id}
        style={{
          position: 'absolute',
          left: `${geometry.x}%`,
          top: `${(geometry.y ?? 0) + (geometry.height ?? 0)}%`
        }}
      >
        <ContentClearanceTop />
        <ContentClearanceLeft />
        <ContentClearanceRight />
        {comments && comments.map((c: CommentData) => (
          <CommentDisplay key={c.id}>
            {c.text}
            <CommentDescription>
              <UserPill>User</UserPill>
            </CommentDescription>
          </CommentDisplay>
        ))}
        <TextEditor
          value={editorText}
          onChange={onUpdateEditorText}
          onBlur={onBlur(data.id)}
          onFocus={onFocus(data.id)}
          onSubmit={() => {
            const updatedAnnotations = annotations.map(ann =>
              ann.data.id === data.id
                ? {
                    ...ann,
                    data: {
                      ...ann.data,
                      comments: [
                        ...(ann.data.comments || []),
                        { id: createThreadedCommentId(), text: editorText }
                      ]
                    }
                  }
                : ann
            );
            setEditorText('');
            setAnnotations(updatedAnnotations);
          }}
        />
      </Content>
    </React.Fragment>
  );
};

const Threaded: React.FC = () => {
  const [activeAnnotations, setActiveAnnotations] = useState<Array<string | number>>([]);
  const [annotations, setAnnotations] = useState<AnnotationWithComments[]>([]);
  const [annotation, setAnnotation] = useState<Partial<AnnotationType>>({});

  const onChange = useCallback((annotation: Partial<AnnotationType>) => {
    setAnnotation(annotation);
  }, []);

  const onSubmit = useCallback((newAnnotation: Partial<AnnotationType>) => {
    const { geometry, data } = newAnnotation;
    if (geometry && data && geometry.type && typeof geometry.x === 'number' && typeof geometry.y === 'number') {
      setAnnotations(prevAnnotations => [
        ...prevAnnotations,
        {
          geometry: geometry as AnnotationType['geometry'],
          data: {
            ...(data as Partial<BaseAnnotationData>),
            id: data.id || createThreadedAnnotationId(),
            comments: []
          } as AnnotationDataWithComments
        } as AnnotationWithComments
      ]);
      setAnnotation({});
    }
  }, []);

  const onFocus = useCallback((id: string) => () => {
    setActiveAnnotations(prev => [...prev, id]);
  }, []);

  const onBlur = useCallback((id: string) => () => {
    setActiveAnnotations(prev => {
      const index = prev.indexOf(id);
      if (index === -1) return prev;
      return [
        ...prev.slice(0, index),
        ...prev.slice(index + 1)
      ];
    });
  }, []);

  const renderEditor = useCallback((props: { annotation: Partial<AnnotationType>, onChange: any, onSubmit: any }) => {
    const { annotation, onChange, onSubmit } = props;
    const geometry = annotation.geometry;
    if (!geometry) return null;
    return (
      <ThreadedEditor
        annotation={annotation as any}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    );
  }, []);

  const renderContent = useCallback(({ key, annotation }: { key: any, annotation: AnnotationWithComments }) => {
    return (
      <ThreadedContent
        key={key}
        annotation={annotation}
        annotations={annotations}
        onFocus={onFocus}
        onBlur={onBlur}
        setAnnotations={setAnnotations}
      />
    );
  }, [annotations, onFocus, onBlur]);

  const activeAnnotationComparator = useCallback((annotation: AnnotationWithComments, id: string) => {
    return annotation.data.id === id;
  }, []);

  const annotationOwnProps: AnnotationOwnProps = {
    ...defaultProps,
    src: img,
    alt: 'Two pebbles anthropomorphized holding hands',
    annotations: annotations as any[],
    type: RectangleSelector.TYPE,
    value: annotation as any,
    renderEditor: renderEditor as any,
    renderContent: renderContent as any,
    activeAnnotations,
    activeAnnotationComparator: activeAnnotationComparator as any,
    onChange: onChange as any,
    onSubmit: onSubmit as any,
  };

  return (
    <Root>
      <Annotation {...annotationOwnProps} />
    </Root>
  );
};

export default Threaded; 