import * as React from 'react';
import { useRef, useEffect, useCallback, FC } from 'react';
import styled from 'styled-components';
import compose from '../utils/compose';
import isMouseHoveringHOC, { IsMouseHoveringInjectedProps as IHInjectedProps } from '../utils/isMouseHovering.tsx';
import withRelativeMousePosHOC, { RelativeMousePosInjectedProps as IRMInjectedProps } from '../utils/withRelativeMousePos.tsx';

import initialDefaultProps from './defaultProps';
import Overlay from './Overlay';

import Content from './Content';
import Editor from './Editor';
import FancyRectangle from './FancyRectangle';
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
  showEditor?: boolean;
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
const Container = styled.div<{ $allowTouch?: boolean }>`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${Overlay} {
    opacity: 1;
  }
  touch-action: ${(props) => (props.$allowTouch ? "pinch-zoom" : "auto")};
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

const AnnotationFunc: FC<AnnotationComponentProps> = (incomingProps) => {
  const { selectors: incomingSelectors, ...restIncomingProps } = incomingProps;
  const props = {
    ...initialDefaultProps,
    ...restIncomingProps, // Spread the rest of incomingProps
    // Explicitly handle selectors: use incoming if provided, else use default
    selectors: incomingSelectors !== undefined ? incomingSelectors : initialDefaultProps.selectors as Selector[],
  };

  const {
    // OwnProps (destructured with defaults applied via spread above)
    src,
    alt,
    style,
    className,
    containerRef: parentContainerRefProp, // Renamed
    children,
    annotations,
    type,
    selectors,
    value,
    onChange,
    onSubmit: onSubmitProp, // Renamed
    activeAnnotationComparator,
    activeAnnotations,
    disableAnnotation,
    disableSelector,
    renderSelector,
    disableEditor,
    renderEditor,
    renderHighlight,
    renderContent,
    disableOverlay,
    renderOverlay,
    allowTouch,
    onImageMouseUp,
    onImageMouseDown,
    onImageMouseMove,
    onImageClick,

    // HOC-injected props
    relativeMousePos,
    isMouseHovering,
  } = props;

  const imageRef = useRef<HTMLImageElement | null>(null); // Replaces this.container
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { isHoveringOver } = isMouseHovering;
  const { x: mouseX, y: mouseY } = relativeMousePos;

  const getSelectorByType = useCallback((typeToFind?: string): Selector | undefined => {
    if (!typeToFind) return undefined;
    return selectors.find(s => s.TYPE === typeToFind);
  }, [selectors]);

  const callSelectorMethod = useCallback((methodName: keyof Selector['methods'], e: SelectorEvent | globalThis.TouchEvent) => {
    if (disableAnnotation) {
      return;
    }
    const selector = getSelectorByType(type);
    if (selector && selector.methods[methodName]) {
      const method = selector.methods[methodName] as (av: AnnotationValue, ev: any) => AnnotationValue | undefined;
      const resultValue = method(value || {}, e);
      if (typeof resultValue === 'undefined') {
        if (process.env.NODE_ENV !== 'production') {
          console.error(
            `Selector method ${String(methodName)} of type ${type} returned undefined.
             Make sure to explicitly return the previous state or new state.`
          );
        }
      } else {
        if (onChange) {
          onChange(resultValue);
        }
      }
    }
  }, [disableAnnotation, getSelectorByType, type, value, onChange]);

  const onTouchStartHandler = useCallback((e: globalThis.TouchEvent) => {
    if (navigator.userAgent.toLowerCase().includes('safari') && !navigator.userAgent.toLowerCase().includes('chrome') && allowTouch){
        e.preventDefault();
    }
    callSelectorMethod("onTouchStart", e);
  }, [allowTouch, callSelectorMethod]);

  const onTouchEndHandler = useCallback((e: globalThis.TouchEvent) => {
    callSelectorMethod("onTouchEnd", e);
  }, [callSelectorMethod]);
  
  const onTargetTouchMoveHandler = useCallback((e: globalThis.TouchEvent) => {
    if (relativeMousePos && typeof relativeMousePos.onTouchMove === 'function') {
      relativeMousePos.onTouchMove(e);
    }
    if (navigator.userAgent.toLowerCase().includes('safari') && !navigator.userAgent.toLowerCase().includes('chrome') && allowTouch){
        e.preventDefault();
    }
    callSelectorMethod('onTouchMove', e);
  }, [relativeMousePos, allowTouch, callSelectorMethod]);

  const onTargetTouchLeaveHandler = useCallback((e: globalThis.TouchEvent) => {
    if (relativeMousePos && typeof relativeMousePos.onTouchLeave === 'function') {
      relativeMousePos.onTouchLeave(e);
    }
  }, [relativeMousePos]);

  useEffect(() => {
    const targetElement = targetRef.current;
    if (allowTouch && targetElement) {
      targetElement.ontouchstart = onTouchStartHandler;
      targetElement.ontouchend = onTouchEndHandler;
      targetElement.ontouchmove = onTargetTouchMoveHandler;
      targetElement.ontouchcancel = onTargetTouchLeaveHandler;

      return () => {
        if (targetElement) {
          targetElement.ontouchstart = null;
          targetElement.ontouchend = null;
          targetElement.ontouchmove = null;
          targetElement.ontouchcancel = null;
        }
      };
    } else if (targetElement) { // Cleanup if allowTouch becomes false
        targetElement.ontouchstart = null;
        targetElement.ontouchend = null;
        targetElement.ontouchmove = null;
        targetElement.ontouchcancel = null;
    }
  }, [allowTouch, onTouchStartHandler, onTouchEndHandler, onTargetTouchMoveHandler, onTargetTouchLeaveHandler]);

  const setImageRef = useCallback((el: HTMLImageElement | null) => {
    imageRef.current = el;
    if (relativeMousePos && typeof relativeMousePos.innerRef === 'function') {
      relativeMousePos.innerRef(el);
    }
  }, [relativeMousePos]);

  const setContainerRef = useCallback((el: HTMLDivElement | null) => {
    if (isMouseHovering && typeof isMouseHovering.innerRef === 'function') {
      isMouseHovering.innerRef(el);
    }
    if (parentContainerRefProp) {
      if (typeof parentContainerRefProp === 'function') {
        parentContainerRefProp(el);
      } else {
        (parentContainerRefProp as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }
    }
  }, [isMouseHovering, parentContainerRefProp]);

  const getTopAnnotationAt = useCallback((xPos: number | null, yPos: number | null): Annotation | undefined => {
    const currentImage = imageRef.current;
    if (!currentImage || xPos === null || yPos === null) return undefined;

    const intersections = annotations
      .map(annotation => {
        const { geometry } = annotation;
        if (!geometry) return false;
        const selector = getSelectorByType(geometry.type);
        
        return selector && selector.intersects({ x: xPos, y: yPos }, geometry, currentImage)
          ? annotation
          : false;
      })
      .filter((a): a is Annotation => !!a)
      .sort((a, b) => {
        const aSelector = getSelectorByType(a.geometry.type);
        const bSelector = getSelectorByType(b.geometry.type);

        if (!aSelector || !bSelector || !currentImage) return 0;
        return aSelector.area(a.geometry, currentImage) - bSelector.area(b.geometry, currentImage);
      });

    return intersections[0];
  }, [annotations, getSelectorByType, imageRef]);

  const onTargetMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (relativeMousePos && typeof relativeMousePos.onMouseMove === 'function') {
      relativeMousePos.onMouseMove(e as unknown as globalThis.MouseEvent);
    }
    const syntheticEvent = e as unknown as React.MouseEvent<HTMLElement>; 
    if (onImageMouseMove) onImageMouseMove(syntheticEvent);
    callSelectorMethod('onMouseMove', syntheticEvent);
  }, [relativeMousePos, onImageMouseMove, callSelectorMethod]);

  const onTargetMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (relativeMousePos && typeof relativeMousePos.onMouseLeave === 'function') {
      relativeMousePos.onMouseLeave(e as unknown as globalThis.MouseEvent);
    }
  }, [relativeMousePos]);
  
  const onMouseUpHandler = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (onImageMouseUp) onImageMouseUp(e);
    callSelectorMethod('onMouseUp', e);
  }, [onImageMouseUp, callSelectorMethod]);

  const onMouseDownHandler = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (onImageMouseDown) onImageMouseDown(e);
    callSelectorMethod('onMouseDown', e);
  }, [onImageMouseDown, callSelectorMethod]);

  const onClickHandler = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (onImageClick) onImageClick(e);
    callSelectorMethod('onClick', e);
  }, [onImageClick, callSelectorMethod]);

  const onSubmitHandler = useCallback(() => {
    if (onSubmitProp && value) {
      onSubmitProp(value);
    }
  }, [onSubmitProp, value]);

  const shouldAnnotationBeActive = useCallback((annotation: Annotation, top: Annotation | undefined): boolean => {
    if (activeAnnotations) {
      const isActive = !!activeAnnotations.find(active => 
        activeAnnotationComparator
          ? activeAnnotationComparator(annotation, active)
          : annotation.data.id === active
      );
      return isActive || top === annotation;
    } else {
      return top === annotation;
    }
  }, [activeAnnotations, activeAnnotationComparator]);

  const topAnnotationAtMouse = getTopAnnotationAt(mouseX, mouseY);

  return (
    <Container
      style={style}
      ref={setContainerRef}
      onMouseLeave={onTargetMouseLeave}
      onTouchCancel={onTargetTouchLeaveHandler as unknown as React.TouchEventHandler<HTMLDivElement>}
      onMouseMove={onTargetMouseMove}
      $allowTouch={allowTouch}
      className={className}
    >
      <Img
        alt={alt || 'Annotation Image'}
        src={src}
        draggable={false}
        ref={setImageRef}
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
            active: shouldAnnotationBeActive(annotation, topAnnotationAtMouse)
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
        ref={targetRef}
        onClick={onClickHandler}
        onMouseUp={onMouseUpHandler}
        onMouseDown={onMouseDownHandler}
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
        return shouldAnnotationBeActive(annotation, topAnnotationAtMouse) &&
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
        onChange &&
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        onSubmitProp && // This check is to ensure the onSubmitProp function is provided
        renderEditor({
          annotation: value,
          onChange: onChange,
          onSubmit: onSubmitHandler
        })
      }
      <div>{children}</div>
    </Container>
  );
};

// AnnotationFunc.displayName = 'AnnotationFunc'; // Optional: for clearer debugging

const ComposedAnnotation = compose(
  isMouseHoveringHOC('isMouseHovering'),
  withRelativeMousePosHOC('relativeMousePos')
)(AnnotationFunc as any) as any as React.ComponentType<AnnotationOwnProps>;

if (process.env.NODE_ENV !== 'production') {
  ComposedAnnotation.displayName = 'ComposedAnnotation';
}

export default ComposedAnnotation; 