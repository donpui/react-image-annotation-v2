import * as React from 'react';
import styled from 'styled-components';
import compose from '../utils/compose';
import isMouseHoveringHOC, { IsMouseHoveringInjectedProps as IHInjectedProps } from '../utils/isMouseHovering.tsx'; // New import, aliased for clarity
import withRelativeMousePosHOC, { RelativeMousePosInjectedProps as IRMInjectedProps } from '../utils/withRelativeMousePos.tsx'; // New import

import initialDefaultProps from './defaultProps'; // Renamed to avoid conflict with static defaultProps
import Overlay from './Overlay'; // Assuming Overlay is or will be typed

// Import components used in default renderers (ensure these have .tsx or .d.ts for best typing)
import Content from './Content';
import Editor from './Editor';
import FancyRectangle from './FancyRectangle';
// Selectors are likely still JS, TS will treat their exports as `any` unless typed
import RectangleSelector from '../hocs/RectangleSelector';
// import PointSelector from '../selectors/PointSelector';
// import OvalSelector from '../selectors/OvalSelector';


// Type Definitions
interface Point {
  x: number;
  y: number;
}

interface Geometry {
  type: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  points?: Point[];
  // Other geometry-specific fields
}

interface AnnotationData {
  id: string | number;
  text?: string;
  [key: string]: any;
}

interface Selection {
  showEditor?: boolean; // Made optional as it might not always be present
  mode?: string;
}

export interface Annotation {
  geometry: Geometry;
  data: AnnotationData;
  selection?: Selection;
}

export interface AnnotationValue {
  geometry?: Partial<Geometry>;
  data?: Partial<AnnotationData>;
  selection?: Partial<Selection>;
}

// Event types for selector methods
type SelectorMouseEvent = React.MouseEvent<HTMLElement>;
type SelectorTouchEvent = React.TouchEvent<HTMLElement>; // Or globalThis.TouchEvent if selectors handle native
type SelectorEvent = SelectorMouseEvent | SelectorTouchEvent;

export interface Selector {
  TYPE: string;
  intersects: (point: Point, geometry: Geometry, container: HTMLImageElement) => boolean;
  area: (geometry: Geometry, container: HTMLImageElement) => number;
  methods: {
    onClick?: (annotationValue: AnnotationValue, e: SelectorEvent) => AnnotationValue | undefined;
    onMouseUp?: (annotationValue: AnnotationValue, e: SelectorEvent) => AnnotationValue | undefined;
    onMouseDown?: (annotationValue: AnnotationValue, e: SelectorEvent) => AnnotationValue | undefined;
    onMouseMove?: (annotationValue: AnnotationValue, e: SelectorEvent) => AnnotationValue | undefined;
    onTouchStart?: (annotationValue: AnnotationValue, e: globalThis.TouchEvent) => AnnotationValue | undefined;
    onTouchEnd?: (annotationValue: AnnotationValue, e: globalThis.TouchEvent) => AnnotationValue | undefined;
    onTouchMove?: (annotationValue: AnnotationValue, e: globalThis.TouchEvent) => AnnotationValue | undefined;
  };
}

// Old RelativeMousePosInjectedProps was an inline interface in Annotation.tsx
// Now IRMInjectedProps is imported from withRelativeMousePos.tsx

// Own props for the Annotation component
export interface AnnotationOwnProps {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
  containerRef?: React.Ref<HTMLDivElement>; // For parent to get ref to the main container div
  children?: React.ReactNode;

  annotations: Annotation[];
  type?: string;
  selectors: Selector[];

  value?: AnnotationValue;
  onChange?: (value: AnnotationValue) => void;
  onSubmit?: (value: AnnotationValue) => void;

  activeAnnotationComparator?: (annotation: Annotation, activeAnnotationIdentifier: any) => boolean;
  activeAnnotations?: any[];

  disableAnnotation?: boolean;
  disableSelector?: boolean;
  renderSelector?: (props: { annotation: AnnotationValue }) => React.ReactNode;
  disableEditor?: boolean;
  renderEditor?: (props: {
    annotation: AnnotationValue;
    onChange: (value: AnnotationValue) => void;
    onSubmit: () => void;
  }) => React.ReactNode;

  renderHighlight: (props: {
    key: string | number;
    annotation: Annotation;
    active: boolean;
  }) => React.ReactNode;
  renderContent: (props: {
    key: string | number;
    annotation: Annotation;
  }) => React.ReactNode;

  disableOverlay?: boolean;
  renderOverlay: (props: { type?: string; annotation?: AnnotationValue }) => React.ReactNode;
  allowTouch?: boolean;

  // Event handlers (renamed to avoid conflicts with internal/selector handlers)
  onImageMouseUp?: (e: React.MouseEvent<HTMLElement>) => void;
  onImageMouseDown?: (e: React.MouseEvent<HTMLElement>) => void;
  onImageMouseMove?: (e: React.MouseEvent<HTMLElement>) => void;
  onImageClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

// Combined props for the class component (OwnProps + HOC-injected props)
type AnnotationComponentProps = AnnotationOwnProps & {
  relativeMousePos: IRMInjectedProps;
  isMouseHovering: IHInjectedProps;
};

// Styled Components
const Container = styled.div<{ allowTouch?: boolean }>`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${Overlay} {
    opacity: 1;
  }
  touch-action: ${(props) => (props.allowTouch ? "pinch-zoom" : "auto")};
`;

const Img = styled.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`;

const Items = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`;

const Target = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`;


class AnnotationClass extends React.Component<AnnotationComponentProps> {
  static displayName = 'AnnotationClass';
  static defaultProps: Partial<AnnotationOwnProps> = {
    ...initialDefaultProps,
    // Ensure all render functions and complex objects from defaultProps are correctly referenced
    // For example, if defaultProps.js exports functions, they are used directly.
    // If it exports instantiated selectors, ensure types match.
    // Type for selectors in defaultProps might need to be `any[]` or cast if they are plain JS objects.
    selectors: initialDefaultProps.selectors as Selector[], // Cast if imported JS selectors
  };

  private container: HTMLImageElement | null = null;
  private targetRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    if (this.props.allowTouch) {
      this.addTargetTouchEventListeners();
    }
    if (this.props.containerRef && typeof this.props.containerRef === 'function') {
      // If containerRef is a callback ref, call it with the main container (not the image)
      // This part is tricky as setInnerRef is on the Img tag.
      // The original innerRef was likely for the top most div (Container).
      // We might need a separate ref for the main Container if parent needs it.
      // For now, this.props.containerRef refers to the main div (Container styled-component).
      // Let's adjust setInnerRef or add another ref for the main div.
    }
  }

  componentDidUpdate(prevProps: AnnotationComponentProps) {
    if (this.props.allowTouch !== prevProps.allowTouch) {
      if (this.props.allowTouch) {
        this.addTargetTouchEventListeners();
      } else {
        this.removeTargetTouchEventListeners();
      }
    }
  }
  
  componentWillUnmount() {
    if (this.props.allowTouch && this.targetRef.current) {
      this.removeTargetTouchEventListeners();
    }
  }

  addTargetTouchEventListeners = () => {
    const target = this.targetRef.current;
    if (target) {
      target.ontouchstart = this.onTouchStart;
      target.ontouchend = this.onTouchEnd;
      target.ontouchmove = this.onTargetTouchMove; // Use target touch move for HOC
      target.ontouchcancel = this.onTargetTouchLeave; // Use target touch leave for HOC
    }
  }

  removeTargetTouchEventListeners = () => {
    const target = this.targetRef.current;
    if (target) {
      target.ontouchstart = null;
      target.ontouchend = null;
      target.ontouchmove = null;
      target.ontouchcancel = null;
    }
  }

  // Called by Img ref
  setImageRef = (el: HTMLImageElement | null) => {
    this.container = el; // For internal geometry calculations
    // Pass ref to withRelativeMousePos HOC (default key 'relativeMousePos')
    if (this.props.relativeMousePos && typeof this.props.relativeMousePos.innerRef === 'function') {
      this.props.relativeMousePos.innerRef(el);
    }
  }

  // Called by Container ref
  setContainerRef = (el: HTMLDivElement | null) => {
    // Pass ref to isMouseHovering HOC (default key 'isMouseHovering')
    if (this.props.isMouseHovering && typeof this.props.isMouseHovering.innerRef === 'function') {
      this.props.isMouseHovering.innerRef(el);
    }
    
    // Handle parent containerRef prop
    if (this.props.containerRef) {
      if (typeof this.props.containerRef === 'function') {
        this.props.containerRef(el);
      } else {
        // @ts-ignore
        (this.props.containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }
    }
  }


  getSelectorByType = (type?: string): Selector | undefined => {
    if (!type) return undefined;
    return this.props.selectors.find(s => s.TYPE === type);
  }

  getTopAnnotationAt = (x: number | null, y: number | null): Annotation | undefined => {
    const { annotations } = this.props;
    const { container, getSelectorByType } = this;

    if (!container || x === null || y === null) return undefined;

    const intersections = annotations
      .map(annotation => {
        const { geometry } = annotation;
        if (!geometry) return false; // Should not happen for stored annotations
        const selector = getSelectorByType(geometry.type);
        
        return selector && selector.intersects({ x, y }, geometry, container)
          ? annotation
          : false;
      })
      .filter((a): a is Annotation => !!a) // Type guard
      .sort((a, b) => {
        const aSelector = getSelectorByType(a.geometry.type);
        const bSelector = getSelectorByType(b.geometry.type);

        if (!aSelector || !bSelector || !this.container) return 0;
        return aSelector.area(a.geometry, this.container) - bSelector.area(b.geometry, this.container);
      });

    return intersections[0];
  }

  // These are attached to the <Container> element to call HOC-provided handlers
  onTargetMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Call handler from withRelativeMousePos HOC
    if (this.props.relativeMousePos && typeof this.props.relativeMousePos.onMouseMove === 'function') {
      this.props.relativeMousePos.onMouseMove(e as unknown as globalThis.MouseEvent);
    }
    // Call own prop handler and selector method
    const syntheticEvent = e as unknown as React.MouseEvent<HTMLElement>; 
    if (this.props.onImageMouseMove) this.props.onImageMouseMove(syntheticEvent);
    this.callSelectorMethod('onMouseMove', syntheticEvent);
  }

  onTargetTouchMove = (e: globalThis.TouchEvent) => { // This is bound to targetRef.current.ontouchmove
    // Call handler from withRelativeMousePos HOC
    if (this.props.relativeMousePos && typeof this.props.relativeMousePos.onTouchMove === 'function') {
      this.props.relativeMousePos.onTouchMove(e);
    }
    // Safari specific behavior & selector method
    if (navigator.userAgent.toLowerCase().includes('safari') && !navigator.userAgent.toLowerCase().includes('chrome') && this.props.allowTouch){
        e.preventDefault();
    }
    this.callSelectorMethod('onTouchMove', e);
  }

  onTargetMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    // Call handler from withRelativeMousePos HOC
    if (this.props.relativeMousePos && typeof this.props.relativeMousePos.onMouseLeave === 'function') {
      this.props.relativeMousePos.onMouseLeave(e as unknown as globalThis.MouseEvent);
    }
  }
  
  onTargetTouchLeave = (e: globalThis.TouchEvent) => { // This is bound to targetRef.current.ontouchcancel
    // Call handler from withRelativeMousePos HOC
    if (this.props.relativeMousePos && typeof this.props.relativeMousePos.onTouchLeave === 'function') {
      this.props.relativeMousePos.onTouchLeave(e);
    }
  }
  

  // These are attached to the <Target> element
  onMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    if (this.props.onImageMouseUp) this.props.onImageMouseUp(e);
    this.callSelectorMethod('onMouseUp', e);
  }
  onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    if (this.props.onImageMouseDown) this.props.onImageMouseDown(e);
    this.callSelectorMethod('onMouseDown', e);
  }
  onClick = (e: React.MouseEvent<HTMLElement>) => {
    if (this.props.onImageClick) this.props.onImageClick(e);
    this.callSelectorMethod('onClick', e);
  }

  // These are bound to targetRef.current.ontouchstart/ontouchend
  onTouchStart = (e: globalThis.TouchEvent) => {
    if (navigator.userAgent.toLowerCase().includes('safari') && !navigator.userAgent.toLowerCase().includes('chrome') && this.props.allowTouch){
        e.preventDefault();
    }
    this.callSelectorMethod("onTouchStart", e);
  }
  onTouchEnd = (e: globalThis.TouchEvent) => this.callSelectorMethod("onTouchEnd", e);


  onSubmit = () => {
    if (this.props.onSubmit && this.props.value) {
      this.props.onSubmit(this.props.value);
    }
  }

  callSelectorMethod = (methodName: keyof Selector['methods'], e: SelectorEvent | globalThis.TouchEvent) => {
    if (this.props.disableAnnotation) {
      return;
    }
    const selector = this.getSelectorByType(this.props.type);
    if (selector && selector.methods[methodName]) {
      const method = selector.methods[methodName] as (av: AnnotationValue, ev: any) => AnnotationValue | undefined;
      const value = method(this.props.value || {}, e);
      if (typeof value === 'undefined') {
        if (process.env.NODE_ENV !== 'production') {
          console.error(
            `Selector method ${String(methodName)} of type ${this.props.type} returned undefined.
             Make sure to explicitly return the previous state or new state.`
          );
        }
      } else {
        if (this.props.onChange) {
          this.props.onChange(value);
        }
      }
    }
  }

  shouldAnnotationBeActive = (annotation: Annotation, top: Annotation | undefined): boolean => {
    if (this.props.activeAnnotations) {
      const isActive = !!this.props.activeAnnotations.find(active => 
        this.props.activeAnnotationComparator
          ? this.props.activeAnnotationComparator(annotation, active)
          : annotation.data.id === active
      );
      return isActive || top === annotation;
    } else {
      return top === annotation;
    }
  }

  render() {
    const { props } = this;
    // Destructure HOC provided props from props.isMouseHovering and props.relativeMousePos
    const { isHoveringOver } = props.isMouseHovering; // Assuming default key for isMouseHoveringHOC
    const { x: mouseX, y: mouseY } = props.relativeMousePos; // Assuming default key for withRelativeMousePosHOC

    // Destructure OwnProps
    const {
      renderHighlight,
      renderContent,
      renderSelector,
      renderEditor,
      renderOverlay,
      allowTouch,
      src,
      alt,
      style,
      className,
      annotations,
      value,
      disableSelector,
      disableEditor,
      disableOverlay,
      type,
      children
    } = props;

    const topAnnotationAtMouse = this.getTopAnnotationAt(
      mouseX, // Use destructured mouseX from HOC
      mouseY  // Use destructured mouseY from HOC
    );

    return (
      <Container
        style={style}
        ref={this.setContainerRef} // This will call this.props.isMouseHovering.innerRef
        onMouseLeave={this.onTargetMouseLeave} // This calls this.props.relativeMousePos.onMouseLeave
        onTouchCancel={this.onTargetTouchLeave as unknown as React.TouchEventHandler<HTMLDivElement>} // This calls this.props.relativeMousePos.onTouchLeave
        onMouseMove={this.onTargetMouseMove} // This calls this.props.relativeMousePos.onMouseMove
        allowTouch={allowTouch}
        className={className}
      >
        <Img
          alt={alt || 'Annotation Image'}
          src={src}
          draggable={false}
          ref={this.setImageRef} // This will call this.props.relativeMousePos.innerRef
        />
        <Items>
          {annotations.map(annotation => {
            if (!annotation.data || typeof annotation.data.id === 'undefined') {
              console.warn('Annotation is missing data.id, cannot render highlight:', annotation);
              return null;
            }
            return renderHighlight({
              key: annotation.data.id,
              annotation,
              active: this.shouldAnnotationBeActive(annotation, topAnnotationAtMouse)
            });
          })}
          {!disableSelector &&
            value &&
            value.geometry &&
            renderSelector &&
            renderSelector({
              annotation: value
            })
          }
        </Items>
        <Target
          data-testid="annotation-target"
          ref={this.targetRef} // For native touch events and selector interactions
          onClick={this.onClick}
          onMouseUp={this.onMouseUp}
          onMouseDown={this.onMouseDown}
          // onMouseMove is handled by Container via onTargetMouseMove for HOC
          // Touch events are natively bound in addTargetTouchEventListeners, which call HOC handlers like onTargetTouchMove
        />
        {!disableOverlay && renderOverlay &&
          renderOverlay({
            type: type,
            annotation: value
          })
        }
        {annotations.map(annotation => {
          if (!annotation.data || typeof annotation.data.id === 'undefined') {
             console.warn('Annotation is missing data.id, cannot render content:', annotation);
            return null;
          }
          return this.shouldAnnotationBeActive(annotation, topAnnotationAtMouse) &&
            renderContent &&
            renderContent({
              key: annotation.data.id,
              annotation: annotation
            });
        })}
        {!disableEditor &&
          value &&
          value.selection &&
          value.selection.showEditor &&
          renderEditor &&
          props.onChange &&
          props.onSubmit &&
          renderEditor({
            annotation: value,
            onChange: props.onChange,
            onSubmit: this.onSubmit
          })
        }
        <div>{children}</div>
      </Container>
    );
  }
}

const ComposedAnnotation = compose(
  isMouseHoveringHOC('isMouseHovering'),
  withRelativeMousePosHOC('relativeMousePos')
)(AnnotationClass as any) as any as React.ComponentType<AnnotationOwnProps>;

// Add runtime check for development
if (process.env.NODE_ENV !== 'production') {
  ComposedAnnotation.displayName = 'ComposedAnnotation';
}

export default ComposedAnnotation; 