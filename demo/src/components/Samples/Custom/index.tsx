import React, { Component } from 'react';
import Annotation, { AnnotationType, AnnotationOwnProps } from '../../../../../src';
import {
  // PointSelector, // Not used directly in this example's state/logic
  // RectangleSelector,
  // OvalSelector
} from '../../../../../src/selectors.ts';
// import Button from '../../Button/index.tsx'; // Button not used for type selection here
const mocks: any = { annotations: [] }; // Temporary untyped mock with default
import img from '../../../img.jpeg';
import defaultProps from '../../../../../src/components/defaultProps.tsx';

// Type for Box component props
interface BoxProps {
  children?: React.ReactNode;
  geometry: AnnotationType['geometry']; // Use a non-partial geometry for rendering
  style?: React.CSSProperties;
}

const Box: React.FC<BoxProps> = ({ children, geometry, style }) => (
  <div
    style={{
      ...style,
      position: 'absolute',
      left: `${geometry.x}%`,
      top: `${geometry.y}%`,
      height: `${geometry.height}%`,
      width: `${geometry.width}%`,
    }}
  >
    {children}
  </div>
);

// Types for render functions' props
interface RenderSelectorProps {
  annotation: Partial<AnnotationType>; // Changed from AnnotationValue
  active?: boolean; // active is passed by some renderers
}

interface RenderHighlightProps {
  annotation: AnnotationType; // highlight usually gets a full annotation
  active: boolean;
}

interface RenderContentProps {
  annotation: AnnotationType; // content usually gets a full annotation
}

interface RenderEditorProps {
  annotation: Partial<AnnotationType>; // Changed from AnnotationValue
  onChange: (value: Partial<AnnotationType>) => void; // Changed from AnnotationValue
  onSubmit: () => void;
}

function renderSelector({ annotation }: RenderSelectorProps) {
  const { geometry } = annotation;
  if (!geometry || typeof geometry.x === 'undefined' || typeof geometry.y === 'undefined' || typeof geometry.width === 'undefined' || typeof geometry.height === 'undefined') return null;

  return (
    <Box
      geometry={geometry as AnnotationType['geometry']} // Cast to full geometry for Box
      style={{
        background: 'rgba(255, 255, 255, 0.5)',
        border: 'solid 1px red'
      }}
    >
      Custom Selector
    </Box>
  );
}

function renderHighlight({ annotation, active }: RenderHighlightProps) {
  const { geometry } = annotation;
  if (!geometry) return null;

  return (
    <Box
      key={annotation.data.id}
      geometry={geometry}
      style={{
        border: 'solid 1px black',
        boxShadow: active
          ? '0 0 20px 20px rgba(255, 255, 255, 0.3) inset'
          : undefined
      }}
    >
      Custom Highlight
    </Box>
  );
}

function renderContent({ annotation }: RenderContentProps) {
  const { geometry, data } = annotation;
  if (!geometry || !data || typeof geometry.x !== 'number' || typeof geometry.y !== 'number' || typeof geometry.height !== 'number') return null;
  return (
    <div
      key={data.id}
      style={{
        background: 'black',
        color: 'white',
        padding: 10,
        position: 'absolute',
        fontSize: 12,
        left: `${geometry.x}%`,
        top: `${geometry.y + geometry.height}%`
      }}
    >
      <div>Custom Content</div>
      {data.text}
    </div>
  );
}

function renderEditor(props: RenderEditorProps) {
  const { annotation, onChange, onSubmit } = props;
  const { geometry, data } = annotation;
  if (!geometry || typeof geometry.x !== 'number' || typeof geometry.y !== 'number' || typeof geometry.height !== 'number') return null;

  return (
    <div
      style={{
        background: 'white',
        borderRadius: 3,
        position: 'absolute',
        left: `${geometry.x}%`,
        top: `${geometry.y + geometry.height}%`,
      }}
    >
      <div>Custom Editor</div>
      <input
        value={data?.text || ''} // Controlled input
        onChange={e => onChange({
          ...annotation,
          data: {
            ...(data || {}),
            id: data?.id || Math.random(), // Ensure id exists
            text: e.target.value
          }
        })}
      />
      <button onClick={onSubmit}>Comment</button>
    </div>
  );
}

function renderOverlay() {
  return (
    <div
      style={{
        background: 'rgba(0, 0, 0, 0.3)',
        color: 'white',
        padding: 5,
        pointerEvents: 'none',
        position: 'absolute',
        top: 5,
        left: 5
      }}
    >
      Custom Overlay
    </div>
  );
}

interface CustomState {
  annotations: AnnotationType[];
  annotation: Partial<AnnotationType>; // For new annotation creation
  type?: string; // Optional: if you want to change selector type
}

export default class Custom extends Component<{}, CustomState> {
  state: CustomState = {
    annotations: (mocks.annotations[0] ? [mocks.annotations[0]] : []) as AnnotationType[], // Ensure mocks.annotations[0] exists
    annotation: {},
    // type: RectangleSelector.TYPE // Default type if allowing new annotations
  };

  onChange = (annotation: Partial<AnnotationType>) => {
    this.setState({ annotation });
  }

  onSubmit = (annotation: Partial<AnnotationType>) => {
    const { geometry, data } = annotation;
    if (geometry && data && geometry.type && typeof geometry.x === 'number' && typeof geometry.y === 'number') { // Basic checks
      this.setState(prevState => ({
        annotation: {},
        annotations: prevState.annotations.concat({
          geometry: geometry as AnnotationType['geometry'],
          data: {
            ...(data as Partial<AnnotationType['data']>),
            id: data.id || Math.random()
          }
        } as AnnotationType)
      }));
    }
  }

  // onChangeType is not used as there are no buttons to change type in this example

  render() {
    const annotationProps: AnnotationOwnProps = {
      ...defaultProps, // Removed Partial cast
      src: img,
      alt: 'Two pebbles anthropomorphized holding hands',
      annotations: this.state.annotations,
      type: this.state.type, // Can be set if you add type selection
      value: this.state.annotation as any, // Workaround for AnnotationValue
      onChange: this.onChange as any,      // Workaround
      onSubmit: this.onSubmit as any,      // Workaround
      renderSelector: renderSelector as any, // Cast because internal AnnotationValue vs our types
      renderEditor: renderEditor as any,
      renderHighlight: renderHighlight as any,
      renderContent: renderContent as any,
      renderOverlay: renderOverlay,
    };

    return (
      <div>
        <Annotation
          {...annotationProps}
        />
      </div>
    );
  }
} 