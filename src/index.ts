// Main annotation component (React 19 refactored version)
import Annotation from './components/Annotation';

// Selectors
import { RectangleSelector, PointSelector, OvalSelector } from './selectors';


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
};

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

// Default export is the refactored component
export default Annotation; 