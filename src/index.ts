import Annotation, { AnnotationOwnProps, Annotation as AnnotationType } from './components/Annotation';
import RectangleSelector from './hocs/RectangleSelector';
import PointSelector from './hocs/PointSelector';
import OvalSelector from './hocs/OvalSelector';

export type { AnnotationOwnProps, AnnotationType };

export {
  Annotation,
  RectangleSelector,
  PointSelector, 
  OvalSelector 
};

export default Annotation; 