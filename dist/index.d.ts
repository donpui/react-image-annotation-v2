import * as React from 'react';

export interface Point {
  x: number;
  y: number;
}

export interface Geometry {
  type: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  points?: Point[];
  [key: string]: unknown;
}

export interface AnnotationData {
  id: string | number;
  text?: string;
  [key: string]: unknown;
}

export interface AnnotationSelection {
  showEditor?: boolean;
  mode?: string;
  anchorX?: number;
  anchorY?: number;
  [key: string]: unknown;
}

export interface Annotation {
  geometry: Geometry;
  data: AnnotationData;
  selection?: AnnotationSelection;
}

export interface AnnotationValue {
  geometry?: Partial<Geometry>;
  data?: Partial<AnnotationData>;
  selection?: Partial<AnnotationSelection>;
}

export type AnnotationMouseEvent = React.MouseEvent<HTMLElement>;
export type AnnotationTouchEvent = React.TouchEvent<HTMLElement>;
export type AnnotationEvent = AnnotationMouseEvent | AnnotationTouchEvent;

export interface Selector {
  readonly TYPE: string;
  intersects: (
    point: Point,
    geometry: Geometry,
    container: HTMLImageElement
  ) => boolean;
  area: (geometry: Geometry, container: HTMLImageElement) => number;
  methods: {
    onClick?: (
      annotationValue: AnnotationValue,
      event: AnnotationEvent
    ) => AnnotationValue | undefined;
    onMouseUp?: (
      annotationValue: AnnotationValue,
      event: AnnotationEvent
    ) => AnnotationValue | undefined;
    onMouseDown?: (
      annotationValue: AnnotationValue,
      event: AnnotationEvent
    ) => AnnotationValue | undefined;
    onMouseMove?: (
      annotationValue: AnnotationValue,
      event: AnnotationEvent
    ) => AnnotationValue | undefined;
    onTouchStart?: (
      annotationValue: AnnotationValue,
      event: globalThis.TouchEvent
    ) => AnnotationValue | undefined;
    onTouchEnd?: (
      annotationValue: AnnotationValue,
      event: globalThis.TouchEvent
    ) => AnnotationValue | undefined;
    onTouchMove?: (
      annotationValue: AnnotationValue,
      event: globalThis.TouchEvent
    ) => AnnotationValue | undefined;
  };
}

export interface RelativeMousePosition {
  x: number | null;
  y: number | null;
}

export interface MouseHoverState {
  isHoveringOver: boolean;
}

export interface RenderSelectorProps {
  annotation: AnnotationValue;
}

export interface RenderEditorProps {
  annotation: AnnotationValue;
  onChange: (value: AnnotationValue) => void;
  onSubmit: () => void;
}

export interface RenderHighlightProps {
  key: string | number;
  annotation: Annotation;
  active: boolean;
}

export interface RenderContentProps {
  key: string | number;
  annotation: Annotation;
}

export interface RenderOverlayProps {
  type?: string;
  annotation?: AnnotationValue;
}

export interface DraggingEventHandlers {
  onDotDragStart: (
    annotationId: string,
    initialCursorPosition: Point
  ) => void;
  onDotDrag: (
    event: React.MouseEvent,
    position: string,
    initialCursorPosition: Point
  ) => void;
  onMoveStart: (
    annotationId: string,
    initialCursorPosition: Point
  ) => void;
  onMove: (
    event: React.MouseEvent,
    initialCursorPosition: Point
  ) => void;
  onDragEnd: () => void;
}

export interface RenderDraggableHighlightProps
  extends RenderHighlightProps,
    DraggingEventHandlers {
  isDragging: boolean;
  isHovered: boolean;
  enableRemoval?: boolean;
  onRemoveAnnotation?: (annotationId: string | number) => void;
  onConfirm?: (annotationId: string | number) => void;
  onReset?: (annotationId: string | number) => void;
}

export interface AnnotationBaseProps {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
  containerRef?: React.Ref<HTMLDivElement>;
  imageRef?: React.Ref<HTMLImageElement>;
  children?: React.ReactNode;
  annotations: Annotation[];
  type?: string;
  selectors: Selector[];
  value?: AnnotationValue;
  onChange?: (value: AnnotationValue) => void;
  onSubmit?: (value: AnnotationValue) => void;
  activeAnnotationComparator?: (
    annotation: Annotation,
    activeIdentifier: unknown
  ) => boolean;
  activeAnnotations?: unknown[];
  editModeAnnotationIds?: (string | number)[];
  disableAnnotation?: boolean;
  disableSelector?: boolean;
  disableEditor?: boolean;
  disableOverlay?: boolean;
  allowTouch?: boolean;
  /** When true, the full-size interaction layer does not capture pointer events (use with custom `renderContent` UX). */
  disableHitTesting?: boolean;
  renderSelector?: (props: RenderSelectorProps) => React.ReactNode;
  renderEditor?: (props: RenderEditorProps) => React.ReactNode;
  renderHighlight?: (props: RenderHighlightProps) => React.ReactNode;
  renderContent?: (props: RenderContentProps) => React.ReactNode;
  renderOverlay?: (props: RenderOverlayProps) => React.ReactNode;
}

export interface AnnotationEditingProps {
  /** Expands rectangle hit areas for built-in drag/resize; independent of `disableEditor`. */
  enableEditing?: boolean;
  onAnnotationsChange?: (annotations: Annotation[]) => void;
  renderDraggableHighlight?: (
    props: RenderDraggableHighlightProps
  ) => React.ReactNode;
  enableRemoval?: boolean;
  onRemoveAnnotation?: (annotationId: string | number) => void;
  onConfirm?: (annotationId: string | number) => void;
  onReset?: (annotationId: string | number) => void;
}

export interface AnnotationEventProps {
  onImageMouseUp?: (e: React.MouseEvent<HTMLElement>) => void;
  onImageMouseDown?: (e: React.MouseEvent<HTMLElement>) => void;
  onImageMouseMove?: (e: React.MouseEvent<HTMLElement>) => void;
  onImageClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onImageLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onImageError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

export type AnnotationRenderSlots = Pick<
  AnnotationBaseProps,
  | 'renderSelector'
  | 'renderEditor'
  | 'renderHighlight'
  | 'renderContent'
  | 'renderOverlay'
> &
  Pick<AnnotationEditingProps, 'renderDraggableHighlight'>;

export interface AnnotationProps
  extends AnnotationBaseProps,
    AnnotationEditingProps,
    AnnotationEventProps {
  renderSlots?: AnnotationRenderSlots;
}

export interface AnnotationComponentProps extends AnnotationProps {
  ref?: React.Ref<HTMLImageElement | null>;
}

export interface UseRelativeMousePositionReturn {
  mousePosition: Point | { x: null; y: null };
  handlers: {
    onMouseMove: (event: globalThis.MouseEvent) => void;
    onMouseLeave: (event: globalThis.MouseEvent) => void;
    onTouchMove: (event: globalThis.TouchEvent) => void;
    onTouchLeave: (event: globalThis.TouchEvent) => void;
  };
  getCurrentMousePosition: () => Point | { x: null; y: null };
}

export interface UseMouseHoverReturn {
  isHoveringOver: boolean;
  setRef: (element: HTMLElement | null) => void;
}

export interface UseSelectorMethodsReturn {
  callSelectorMethod: (
    methodName: keyof Selector['methods'],
    event: AnnotationEvent | globalThis.TouchEvent
  ) => void;
  getSelectorByType: (type?: string) => Selector | undefined;
}

export interface UseAnnotationHitDetectionReturn {
  getTopAnnotationAt: (
    x: number | null,
    y: number | null
  ) => Annotation | undefined;
  getSelectorByType: (type?: string) => Selector | undefined;
}

declare const Annotation: React.ComponentType<AnnotationComponentProps>;

export declare const RectangleSelector: Selector;
export declare const PointSelector: Selector;
export declare const OvalSelector: Selector;

export declare function useRelativeMousePosition(
  targetRef: React.RefObject<HTMLElement>,
  options?: {
    onPositionChange?: (position: Point | { x: null; y: null }) => void;
    throttleMs?: number;
  }
): UseRelativeMousePositionReturn;

export declare function useMouseHover(): UseMouseHoverReturn;

export declare function useSelectorMethods(options: {
  selectors: Selector[];
  effectiveType?: string;
  value?: AnnotationValue;
  onChange?: (value: AnnotationValue) => void;
  disableAnnotation?: boolean;
}): UseSelectorMethodsReturn;

export declare function useAnnotationHitDetection(options: {
  annotations: Annotation[];
  selectors: Selector[];
  imageRef: React.RefObject<HTMLImageElement>;
  enableEditing?: boolean;
}): UseAnnotationHitDetectionReturn;

export { Annotation };
export default Annotation;
