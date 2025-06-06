import * as React from 'react';
import { useRef, useEffect, useCallback, FC, useState } from 'react';
import styled from 'styled-components';
import compose from '../utils/compose';
import isMouseHoveringHOC, { IsMouseHoveringInjectedProps as IHInjectedProps } from '../utils/isMouseHovering.tsx';
import withRelativeMousePosHOC, { RelativeMousePosInjectedProps as IRMInjectedProps } from '../utils/withRelativeMousePos.tsx';
import { useDragging } from '../utils/useDragging';

import initialDefaultProps from './defaultProps';
import Overlay from './Overlay';

// import Content from './Content';
// import Editor from './Editor';
// import FancyRectangle from './FancyRectangle';
// import RectangleSelector from '../hocs/RectangleSelector';
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

  // Editing functionality props
  enableEditing?: boolean;
  onAnnotationsChange?: (annotations: Annotation[]) => void;
  renderDraggableHighlight?: (props: {
    key: string | number;
    annotation: Annotation;
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
  }) => React.ReactNode;

  // Delete functionality props
  allowDelete?: boolean;
  onRemoveAnnotation?: (annotationId: string | number) => void;
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

    // Editing functionality props
    enableEditing,
    onAnnotationsChange,
    renderDraggableHighlight,

    // Delete functionality props
    allowDelete,
    onRemoveAnnotation,

    // HOC-injected props
    relativeMousePos,
    isMouseHovering,
  } = props;

  const imageRef = useRef<HTMLImageElement | null>(null); // Replaces this.container
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { x: mouseX, y: mouseY } = relativeMousePos;

  // Editing functionality - use parent's state directly when editing enabled
  const handleAnnotationsUpdate = useCallback((updatedAnnotations: Annotation[]) => {
    if (enableEditing && onAnnotationsChange) {
      onAnnotationsChange(updatedAnnotations);
    }
  }, [enableEditing, onAnnotationsChange]);
  
  const draggingHook = enableEditing ? useDragging(annotations, handleAnnotationsUpdate) : null;
  
  // Add hover state management for better UX with control elements
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [stableHoveredId, setStableHoveredId] = useState<string | null>(null);

  // Use annotations prop directly (parent manages state)
  const currentAnnotations = annotations;

  const getSelectorByType = useCallback((typeToFind?: string): Selector | undefined => {
    if (!typeToFind) return undefined;
    return selectors.find(s => s.TYPE === typeToFind);
  }, [selectors]);

  const effectiveType = type || (selectors && selectors[0] && selectors[0].TYPE);

  const callSelectorMethod = useCallback((methodName: keyof Selector['methods'], e: SelectorEvent | globalThis.TouchEvent) => {
    if (disableAnnotation) {
      return;
    }
    const selector = getSelectorByType(effectiveType);
    if (selector && selector.methods[methodName]) {
      const method = selector.methods[methodName] as (av: AnnotationValue, ev: any) => AnnotationValue | undefined;
      const resultValue = method(value || {}, e);
      if (typeof resultValue === 'undefined') {
        if (process.env.NODE_ENV !== 'production') {
          console.error(
            `Selector method ${String(methodName)} of type ${effectiveType} returned undefined.
             Make sure to explicitly return the previous state or new state.`
          );
        }
      } else {
        if (onChange) {
          onChange(resultValue);
        }
      }
    }
  }, [disableAnnotation, getSelectorByType, effectiveType, value, onChange]);

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

    const intersections = currentAnnotations
      .map(annotation => {
        const { geometry } = annotation;
        if (!geometry) return false;
        const selector = getSelectorByType(geometry.type);
        
        if (!selector) return false;

        // For editing mode, expand the hit area to include control elements
        if (enableEditing && geometry.type === 'RECTANGLE' && 
            typeof geometry.x === 'number' && typeof geometry.y === 'number' &&
            typeof geometry.width === 'number' && typeof geometry.height === 'number') {
          const expandedGeometry = {
            ...geometry,
            x: Math.max(0, geometry.x - 2), // Add 2% buffer on each side
            y: Math.max(0, geometry.y - 2),
            width: Math.min(100 - geometry.x + 2, geometry.width + 4),
            height: Math.min(100 - geometry.y + 2, geometry.height + 4)
          };
          
          return selector.intersects({ x: xPos, y: yPos }, expandedGeometry, currentImage)
            ? annotation
            : false;
        }
        
        return selector.intersects({ x: xPos, y: yPos }, geometry, currentImage)
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
  }, [currentAnnotations, getSelectorByType, imageRef, enableEditing]);

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

  // Handle escape key to close editor or clear geometry
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && onChange) {
      // If editor is open or selector is active, reset everything
      if (value?.selection?.showEditor || value?.geometry) {
        onChange({
          selection: undefined,
          geometry: undefined,
          data: undefined
        });
      }
    }
  }, [value, onChange]);

  useEffect(() => {
    if (value?.selection?.showEditor) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [value?.selection?.showEditor, handleKeyDown]);

  // Cleanup hover timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

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
        {currentAnnotations.map(annotation => {
          if (!annotation.data || typeof annotation.data.id === 'undefined') {
            console.warn('Annotation is missing data.id, cannot render highlight:', annotation);
            return null;
          }
          
          const isActive = shouldAnnotationBeActive(annotation, topAnnotationAtMouse);
          
          // Set draggingId on hover when editing is enabled with stable hover management
          if (enableEditing && draggingHook && !draggingHook.isDragging) {
            if (isActive && stableHoveredId !== annotation.data.id) {
              // Clear any pending timeout
              if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
                hoverTimeoutRef.current = null;
              }
              // Immediately set the new hovered annotation
              setStableHoveredId(annotation.data.id as string);
              draggingHook.setDraggingId(annotation.data.id as string);
            } else if (!isActive && stableHoveredId === annotation.data.id) {
              // Add a small delay before removing hover state to prevent flickering
              if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
              }
              hoverTimeoutRef.current = setTimeout(() => {
                setStableHoveredId(null);
                draggingHook.setDraggingId(null);
                hoverTimeoutRef.current = null;
              }, 100); // 100ms delay
            }
          }
          
          // Use draggable highlight for editing mode, regular highlight otherwise
          if (enableEditing && renderDraggableHighlight && draggingHook) {
            const isHovered = draggingHook.draggingId === annotation.data.id;
            const isBeingDragged = draggingHook.isDragging && draggingHook.draggingId === annotation.data.id;
            
            return renderDraggableHighlight({
              key: annotation.data.id,
              annotation,
              active: isActive,
              isDragging: isBeingDragged,
              isHovered: isHovered,
              onDotDragStart: draggingHook.handleDotDragStart,
              onDotDrag: draggingHook.handleDotDrag,
              onMoveStart: draggingHook.handleMoveStart,
              onMove: draggingHook.handleMove,
              onDragEnd: draggingHook.handleMouseUp,
              allowDelete: allowDelete,
              onRemoveAnnotation: onRemoveAnnotation,
            });
          }
          
          return renderHighlight({
            key: annotation.data.id,
            annotation,
            active: isActive
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
          type: effectiveType,
          annotation: value
        })
      }
      {currentAnnotations.map(annotation => {
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