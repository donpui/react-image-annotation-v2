// Main annotation component (React 19 refactored version)
import Annotation from './components/Annotation';

// Selectors
import { RectangleSelector, PointSelector, OvalSelector } from './selectors';

// Draggable components
import { DraggableBox } from './components/DraggableBox';
import { DraggableDot, MoveButton, DeleteButton, ConfirmResetButtons } from './components/DraggableComponents';

// Custom hooks (React 19 patterns)
export { useRelativeMousePosition } from './hooks/useRelativeMousePosition';
export { useMouseHover } from './hooks/useMouseHover';
export { useSelectorMethods } from './hooks/useSelectorMethods';
export { useAnnotationHitDetection } from './hooks/useAnnotationHitDetection';

// Export all types from the centralized types module
export type * from './types/core';

// Component exports
export {
  Annotation,
  RectangleSelector,
  PointSelector, 
  OvalSelector,
  DraggableBox,
  DraggableDot,
  MoveButton,
  DeleteButton,
  ConfirmResetButtons
};

// Default export is the refactored component
export default Annotation; 