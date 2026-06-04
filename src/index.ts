// Main annotation component (React 19 refactored version)
import Annotation from './components/Annotation';

// Selectors
import { RectangleSelector, PointSelector, OvalSelector, PolygonSelector } from './selectors';


// Custom hooks (React 19 patterns)
export { useRelativeMousePosition } from './hooks/useRelativeMousePosition';
export { useMouseHover } from './hooks/useMouseHover';
export { useSelectorMethods } from './hooks/useSelectorMethods';
export { useAnnotationHitDetection } from './hooks/useAnnotationHitDetection';
export { useDragging } from './hooks/useDragging';

// Export all types from the centralized types module
export type * from './types/core';

// Component exports
export {
  Annotation,
  RectangleSelector,
  PointSelector,
  OvalSelector,
  PolygonSelector,
};

export { default as Polygon } from './components/Polygon';
export { DraggableBox } from './components/DraggableBox';
export {
  DraggableDot,
  MoveButton,
  ConfirmResetButtons,
  DeleteButton,
  DeleteCrossIcon,
  DELETE_BUTTON_SIZE_PX,
  DELETE_BUTTON_HIT_AREA_PX,
  getDeleteCornerPosition,
  deleteCornerBoxStyle,
} from './components/DraggableComponents';
export { AnnotationDeleteControl } from './components/AnnotationDeleteControl';
export { AnnotationContentAnchor } from './components/AnnotationContentAnchor';
export type {
  AnnotationContentAnchorProps,
  AnnotationContentAnchorPlacement,
} from './components/AnnotationContentAnchor';
export {
  buildDrawingCursor,
  buildDrawingCursorFromSvg,
} from './utils/buildDrawingCursor';

// Default export is the refactored component
export default Annotation; 