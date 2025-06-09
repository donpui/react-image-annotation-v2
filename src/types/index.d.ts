// Legacy type definitions - now redirects to the new core types
// This file is kept for backward compatibility but all new types are in core.ts

declare module "react-image-annotation-v2" {
  // Re-export all types from the new core module
  export * from './core';
  
  // Main component
  export { default as Annotation } from '../components/Annotation';
  
  // Selectors
  export { RectangleSelector, PointSelector, OvalSelector } from '../selectors';
  
  // Draggable components
  export { DraggableBox } from '../components/DraggableBox';
  export { DraggableDot, MoveButton, DeleteButton, ConfirmResetButtons } from '../components/DraggableComponents';
  
  // Custom hooks
  export { useRelativeMousePosition } from '../hooks/useRelativeMousePosition';
  export { useMouseHover } from '../hooks/useMouseHover';
  export { useSelectorMethods } from '../hooks/useSelectorMethods';
  export { useAnnotationHitDetection } from '../hooks/useAnnotationHitDetection';
}
