import Annotation, { AnnotationOwnProps, Annotation as AnnotationType } from './components/Annotation';
import RectangleSelector from './hocs/RectangleSelector';
// import PointSelector from './selectors/PointSelector'; // Assuming this might be used later
// import OvalSelector from './selectors/OvalSelector'; // Assuming this might be used later

export type { AnnotationOwnProps, AnnotationType };

export {
  Annotation,
  RectangleSelector,
  // PointSelector, // Uncomment if needed
  // OvalSelector   // Uncomment if needed
};

export default Annotation; 