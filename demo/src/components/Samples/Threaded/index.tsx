import React, { Component } from 'react';
import Annotation, { Annotation as AnnotationType, AnnotationOwnProps } from '../../../../../src';
import styled, { keyframes } from 'styled-components';
import {
  RectangleSelector
} from '../../../../../src/selectors.ts';
import TextEditor from '../../../../../src/components/TextEditor';
import Root from '../../Root/index.tsx';
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
  comments: CommentData[];
}

interface AnnotationWithComments extends AnnotationType {
  data: AnnotationDataWithComments;
}

interface ThreadedEditorProps {
  annotation: AnnotationWithComments; 
  onChange: (annotation: AnnotationWithComments) => void;
  onSubmit: () => void;
  className?: string;
  style?: React.CSSProperties;
}

interface ThreadedEditorState {
  text: string;
}

interface ThreadedContentProps {
  annotation: AnnotationWithComments;
  annotations: AnnotationWithComments[];
  onFocus: (id: any) => (e: any) => void; 
  onBlur: (id: any) => (e: any) => void;  
  setAnnotations: (annotations: AnnotationWithComments[]) => void;
  key?: any;
}

interface ThreadedContentState {
  editorText: string;
}

interface ThreadedState {
  activeAnnotations: string[]; 
  annotations: AnnotationWithComments[];
  annotation: Partial<AnnotationType>; 
}

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

class ThreadedEditor extends Component<ThreadedEditorProps, ThreadedEditorState> {
  state: ThreadedEditorState = { text: '' };

  onUpdateText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { annotation, onChange } = this.props;
    // Ensure annotation and annotation.data are defined before spreading
    if (!annotation || !annotation.data) return;

    onChange({
      ...annotation,
      data: {
        ...annotation.data,
        comments: [
          annotation.data.comments?.[0] // Access after ensuring annotation.data exists
            ? {
                ...annotation.data.comments[0],
                text: e.target.value
              }
            : {
                id: Math.random(),
                text: e.target.value
              }
        ]
      }
    });
  }

  render() {
    const { annotation, onSubmit, className, style } = this.props;
    const { geometry } = annotation; 
    if (!geometry) return null;
    // Ensure annotation.data.comments is at least an empty array for safe access
    const currentCommentText = annotation.data?.comments?.[0]?.text || ''

    return (
      <EditorContainer
        className={className}
        style={{
          position: 'absolute',
          left: `${geometry.x}%`,
          top: `${geometry.y + geometry.height}%`,
          ...style
        }}
      >
        <TextEditor
          onChange={this.onUpdateText}
          onSubmit={onSubmit}
          value={currentCommentText}
        />
      </EditorContainer>
    );
  }
}

class ThreadedContent extends Component<ThreadedContentProps, ThreadedContentState> {
  state: ThreadedContentState = { editorText: '' };

  onUpdateEditorText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ editorText: e.target.value });
  }

  renderComment(comment: CommentData) {
    return (
      <CommentDisplay key={comment.id}>
        {comment.text}
        <CommentDescription>
          <UserPill>User</UserPill>
        </CommentDescription>
      </CommentDisplay>
    );
  }

  render() {
    const { annotation, annotations, onFocus, onBlur, setAnnotations } = this.props;
    const { geometry, data } = annotation; 
    const comments = data?.comments;

    if (!geometry || !data) return null; // Added check for data

    return (
      <React.Fragment>
        <Content
          key={data.id} 
          style={{
            position: 'absolute',
            left: `${geometry.x}%`,
            top: `${geometry.y + geometry.height}%`
          }}
        >
          <ContentClearanceTop />
          <ContentClearanceLeft />
          <ContentClearanceRight />
          {comments && comments.map(c => this.renderComment(c))} {/* Ensured map argument type */}
          <TextEditor
            value={this.state.editorText}
            onChange={this.onUpdateEditorText}
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
                          { id: Math.random(), text: this.state.editorText }
                        ]
                      }
                    }
                  : ann
              );
              this.setState({ editorText: '' });
              setAnnotations(updatedAnnotations);
            }}
          />
        </Content>
      </React.Fragment>
    );
  }
}

export default class Threaded extends Component<{}, ThreadedState> {
  state: ThreadedState = {
    activeAnnotations: [],
    annotations: [],
    annotation: {}
  };

  onChange = (annotation: Partial<AnnotationType>) => { 
    this.setState({ annotation });
  }

  onSubmit = (newAnnotation: Partial<AnnotationType>) => { 
    const { geometry, data } = newAnnotation;
    if (geometry && data && geometry.type && typeof geometry.x === 'number' && typeof geometry.y === 'number') { 
      this.setState(prevState => ({
        annotation: {},
        annotations: [
          ...prevState.annotations,
          {
            geometry: geometry as AnnotationType['geometry'],
            data: {
              ...(data as Partial<BaseAnnotationData>),
              id: data.id || Math.random(), 
              comments: [] 
            } as AnnotationDataWithComments
          } as AnnotationWithComments
        ]
      }));
    }
  }

  renderEditor = (props: { annotation: Partial<AnnotationType>, onChange: any, onSubmit: any }) => { 
    const { annotation, onChange, onSubmit } = props;
    const { geometry } = annotation;
    if (!geometry) return null;

    return (
      <ThreadedEditor
        annotation={annotation as any} // Using any for now due to complexity
        onChange={onChange}
        onSubmit={onSubmit}
      />
    );
  }

  renderContent = ({ key, annotation }: { key: any, annotation: AnnotationWithComments }) => {
    return (
      <ThreadedContent
        key={key}
        annotation={annotation}
        annotations={this.state.annotations}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        setAnnotations={(annotations) => this.setState({ annotations })}
      />
    );
  }

  onFocus = (id: string) => () => { 
    this.setState(prevState => ({
      activeAnnotations: [
        ...prevState.activeAnnotations,
        id
      ]
    }));
  }

  onBlur = (id: string) => () => { 
    this.setState(prevState => {
      const index = prevState.activeAnnotations.indexOf(id);
      return {
        activeAnnotations: [
          ...prevState.activeAnnotations.slice(0, index),
          ...prevState.activeAnnotations.slice(index + 1)
        ]
      };
    });
  }

  activeAnnotationComparator = (annotation: AnnotationWithComments, id: string) => {
    return annotation.data.id === id;
  }

  render() {
    const annotationOwnProps: AnnotationOwnProps = {
      ...(defaultProps as Partial<AnnotationOwnProps>),
      src: img,
      alt: "Two pebbles anthropomorphized holding hands",
      annotations: this.state.annotations as any[], // Using any[] due to AnnotationWithComments vs AnnotationType
      type: RectangleSelector.TYPE, 
      value: this.state.annotation as any, 
      renderEditor: this.renderEditor as any, 
      renderContent: this.renderContent as any, 
      activeAnnotations: this.state.activeAnnotations,
      activeAnnotationComparator: this.activeAnnotationComparator as any, 
      onChange: this.onChange as any, 
      onSubmit: this.onSubmit as any, 
    };

    return (
      <Root>
        <Annotation
          {...annotationOwnProps}
        />
      </Root>
    );
  }
} 