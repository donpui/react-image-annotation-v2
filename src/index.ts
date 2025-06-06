import Annotation, { AnnotationOwnProps, Annotation as AnnotationType } from './components/Annotation';
import { RectangleSelector, PointSelector, OvalSelector } from './selectors';
import { DraggableBox } from './components/DraggableBox';
import { DraggableDot, MoveButton } from './components/DraggableComponents';

export type { AnnotationOwnProps, AnnotationType };

export {
  Annotation,
  RectangleSelector,
  PointSelector, 
  OvalSelector,
  DraggableBox,
  DraggableDot,
  MoveButton
};

export default Annotation; 