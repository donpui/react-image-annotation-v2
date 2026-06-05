import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Annotation from '../src/components/Annotation';

const requiredProps = {
  annotations: [],
  src: 'test-image.jpg',
  alt: 'Test image',
  value: {},
  onChange: jest.fn(),
  onSubmit: jest.fn()
};

describe('Annotation', () => {
  it('renders the image with correct attributes', () => {
    render(<Annotation {...requiredProps} />);
    
    const img = screen.getByAltText('Test image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test-image.jpg');
  });

  it('renders annotations when provided', () => {
    const annotations = [{
      geometry: { type: 'RECTANGLE', x: 10, y: 10, width: 20, height: 20 },
      data: { id: 1, text: 'Test annotation' }
    }];

    render(<Annotation {...requiredProps} annotations={annotations} activeAnnotations={annotations} />);
    
    // The exact assertion will depend on your component's structure
    // This is a basic example - adjust based on your actual markup
    // const annotationElements = screen.getAllByRole('button');
    // expect(annotationElements.length).toBeGreaterThan(0);
    expect(screen.getByText('Test annotation')).toBeInTheDocument();
  });

  it('applies drawingCursor on the interaction target while selecting', () => {
    const { rerender } = render(
      <Annotation
        {...requiredProps}
        drawingCursor="url(/cursor.svg) 12.5 12.5, auto"
        value={{
          selection: { mode: 'SELECTING', anchorX: 10, anchorY: 10 },
          geometry: { type: 'RECTANGLE', x: 10, y: 10, width: 5, height: 5 },
        }}
      />
    );

    expect(screen.getByTestId('annotation-target')).toHaveAttribute(
      'data-is-drawing',
      'true'
    );

    rerender(
      <Annotation
        {...requiredProps}
        drawingCursor="url(/cursor.svg) 12.5 12.5, auto"
        value={{}}
      />
    );

    expect(screen.getByTestId('annotation-target')).not.toHaveAttribute(
      'data-is-drawing'
    );
  });
});
