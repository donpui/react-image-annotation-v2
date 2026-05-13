// Core type definitions for the annotation library
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
}

export interface AnnotationData {
  id: string | number;
  text?: string;
  [key: string]: unknown;
}

export interface AnnotationSelection {
  showEditor?: boolean;
  mode?: string;
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

// Improved event types
export type AnnotationMouseEvent = React.MouseEvent<HTMLElement>;
export type AnnotationTouchEvent = React.TouchEvent<HTMLElement>;
export type AnnotationEvent = AnnotationMouseEvent | AnnotationTouchEvent;

// Selector interface with improved typing
export interface Selector {
  readonly TYPE: string;
  intersects: (point: Point, geometry: Geometry, container: HTMLImageElement) => boolean;
  area: (geometry: Geometry, container: HTMLImageElement) => number;
  methods: {
    onClick?: (annotationValue: AnnotationValue, e: AnnotationEvent) => AnnotationValue | undefined;
    onMouseUp?: (annotationValue: AnnotationValue, e: AnnotationEvent) => AnnotationValue | undefined;
    onMouseDown?: (annotationValue: AnnotationValue, e: AnnotationEvent) => AnnotationValue | undefined;
    onMouseMove?: (annotationValue: AnnotationValue, e: AnnotationEvent) => AnnotationValue | undefined;
    onTouchStart?: (annotationValue: AnnotationValue, e: globalThis.TouchEvent) => AnnotationValue | undefined;
    onTouchEnd?: (annotationValue: AnnotationValue, e: globalThis.TouchEvent) => AnnotationValue | undefined;
    onTouchMove?: (annotationValue: AnnotationValue, e: globalThis.TouchEvent) => AnnotationValue | undefined;
  };
}

// Hook return types
export interface RelativeMousePosition {
  x: number | null;
  y: number | null;
}

export interface MouseHoverState {
  isHoveringOver: boolean;
}

// Render prop types with better naming and organization
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

// Dragging-related props
export interface DraggingEventHandlers {
  onDotDragStart: (annotationId: string, initialCursorPosition: Point) => void;
  onDotDrag: (event: React.MouseEvent, position: string, initialCursorPosition: Point) => void;
  onMoveStart: (annotationId: string, initialCursorPosition: Point) => void;
  onMove: (event: React.MouseEvent, initialCursorPosition: Point) => void;
  onDragEnd: () => void;
}

export interface renderDraggableHighlightProps extends RenderHighlightProps, DraggingEventHandlers {
  isDragging: boolean;
  isHovered: boolean;
  enableRemoval?: boolean;
  onRemoveAnnotation?: (annotationId: string | number) => void;
  onConfirm?: (annotationId: string | number) => void;
  onReset?: (annotationId: string | number) => void;
}

// Component prop interfaces
export interface AnnotationBaseProps {
  // Image props
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
  containerRef?: React.Ref<HTMLDivElement>;
  imageRef?: React.Ref<HTMLImageElement>;
  children?: React.ReactNode;

  // Core annotation props
  annotations: Annotation[];
  type?: string;
  selectors: Selector[];

  // State management
  value?: AnnotationValue;
  onChange?: (value: AnnotationValue) => void;
  onSubmit?: (value: AnnotationValue) => void;

  // Active annotation handling
  activeAnnotationComparator?: (annotation: Annotation, activeIdentifier: unknown) => boolean;
  activeAnnotations?: unknown[];

  // Edit mode handling
  editModeAnnotationIds?: (string | number)[];

  // Feature toggles
  disableAnnotation?: boolean;
  disableSelector?: boolean;
  disableEditor?: boolean;
  disableOverlay?: boolean;
  allowTouch?: boolean;

  // Render props
  renderSelector?: (props: RenderSelectorProps) => React.ReactNode;
  renderEditor?: (props: RenderEditorProps) => React.ReactNode;
  renderHighlight?: (props: RenderHighlightProps) => React.ReactNode;
  renderContent?: (props: RenderContentProps) => React.ReactNode;
  renderOverlay?: (props: RenderOverlayProps) => React.ReactNode;
}

export interface AnnotationEditingProps {
  // Editing functionality
  enableEditing?: boolean;
  onAnnotationsChange?: (annotations: Annotation[]) => void;
  renderDraggableHighlight?: (props: renderDraggableHighlightProps) => React.ReactNode;

  // Interaction handlers
  enableRemoval?: boolean;
  onRemoveAnnotation?: (annotationId: string | number) => void;
  onConfirm?: (annotationId: string | number) => void;
  onReset?: (annotationId: string | number) => void;
}

export interface AnnotationEventProps {
  // Image event handlers (prefixed to avoid conflicts)
  onImageMouseUp?: (e: React.MouseEvent<HTMLElement>) => void;
  onImageMouseDown?: (e: React.MouseEvent<HTMLElement>) => void;
  onImageMouseMove?: (e: React.MouseEvent<HTMLElement>) => void;
  onImageClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

/** Optional bundle of render callbacks (reduces many `render*` props on `<Annotation />`). */
export type AnnotationRenderSlots = Pick<
  AnnotationBaseProps,
  | 'renderSelector'
  | 'renderEditor'
  | 'renderHighlight'
  | 'renderContent'
  | 'renderOverlay'
> &
  Pick<AnnotationEditingProps, 'renderDraggableHighlight'>;

// Main annotation component props
export interface AnnotationProps
  extends AnnotationBaseProps,
          AnnotationEditingProps,
          AnnotationEventProps {
  renderSlots?: AnnotationRenderSlots;
}