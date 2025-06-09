import Annotation, { AnnotationOwnProps, Annotation as AnnotationType } from './components/Annotation';
import { RectangleSelector, PointSelector, OvalSelector } from './selectors';
import { DraggableBox } from './components/DraggableBox';
import { DraggableDot, MoveButton, DeleteButton, ConfirmResetButtons } from './components/DraggableComponents';

export type { AnnotationOwnProps, AnnotationType };

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

export default Annotation; 