import { AnnotationType } from '../../../../src'; // Adjust path as necessary

declare module '../../../mocks' {
  interface MockData {
    annotations: AnnotationType[];
    [key: string]: any; // Allow other properties
  }
  const value: MockData;
  export default value;
}
export {}; // Ensure this file is treated as a module 