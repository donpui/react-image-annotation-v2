// Setup for React Testing Library
require('@testing-library/jest-dom');

// Polyfill for TextEncoder if needed
if (typeof TextEncoder === 'undefined') {
  global.TextEncoder = function TextEncoder() {};
  global.TextEncoder.prototype.encode = function(str) {
    var utf8 = unescape(encodeURIComponent(str));
    var arr = new Uint8Array(utf8.length);
    for (var i = 0; i < utf8.length; i++) {
      arr[i] = utf8.charCodeAt(i);
    }
    return arr;
  };
}

// Import test files

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Annotation from '../src/components/Annotation';

describe('Annotation Component', () => {
  const initialDefaultProps = {
    src: 'test-image.jpg',
    alt: 'Test image',
    annotations: [],
    value: {},
    onChange: jest.fn(),
    onSubmit: jest.fn(),
  };

  beforeEach(() => {
    initialDefaultProps.onChange.mockClear();
    initialDefaultProps.onSubmit.mockClear();
  });

  it('renders without crashing', () => {
    render(<Annotation {...initialDefaultProps} />);
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('renders annotations when provided', () => {
    const annotations = [
      {
        geometry: {
          type: 'RECTANGLE',
          x: 10,
          y: 10,
          width: 100,
          height: 100,
        },
        data: {
          text: 'Test annotation',
          id: 'test-anno-1'
        },
      },
    ];

    render(<Annotation {...initialDefaultProps} annotations={annotations} activeAnnotations={annotations} />);
    expect(screen.getByText('Test annotation')).toBeInTheDocument();
  });

  it('handles mouse interactions correctly', async () => {
    const user = userEvent.setup();
    let currentAnnotationValue = {};

    const handleChange = jest.fn((newValue) => {
      currentAnnotationValue = newValue;
      rerender(<Annotation {...initialDefaultProps} value={currentAnnotationValue} onChange={handleChange} />);
    });

    const { rerender } = render(
      <Annotation {...initialDefaultProps} value={currentAnnotationValue} onChange={handleChange} />
    );
    
    const annotationTarget = screen.getByTestId('annotation-target');
    await user.click(annotationTarget);
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('handles annotation submission', async () => {
    const user = userEvent.setup();
    let currentAnnotationValue = {};

    const handleChange = jest.fn((newValue) => {
      currentAnnotationValue = newValue;
      rerender(<Annotation {...initialDefaultProps} onSubmit={initialDefaultProps.onSubmit} value={currentAnnotationValue} onChange={handleChange} />);
    });
    
    const { rerender } = render(
      <Annotation {...initialDefaultProps} onSubmit={initialDefaultProps.onSubmit} value={currentAnnotationValue} onChange={handleChange} />
    );
    
    const annotationTarget = screen.getByTestId('annotation-target');
    
    // Simulate a drag to create a rectangle and trigger editor
    await user.pointer([
      { keys: '[MouseLeft>]', target: annotationTarget, coords: { x: 10, y: 10 } },
      { coords: { x: 30, y: 30 } }, // Move while pressed
      { keys: '[/MouseLeft]' }      // Release
    ]);

    const textarea = await screen.findByPlaceholderText('Write description');
    await user.type(textarea, 'Test comment');

    const submitButton = screen.getByText('Submit');
    await user.click(submitButton);
    
    expect(initialDefaultProps.onSubmit).toHaveBeenCalled();
  });
});
