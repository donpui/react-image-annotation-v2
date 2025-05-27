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
var context = require.context('./', true, /\.spec\.js$/);
context.keys().forEach(context);

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Annotation from '../src/components/Annotation';

describe('Annotation Component', () => {
  const defaultProps = {
    src: 'test-image.jpg',
    alt: 'Test image',
    annotations: [],
    value: {},
    onChange: jest.fn(),
    onSubmit: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<Annotation {...defaultProps} />);
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
        },
      },
    ];

    render(<Annotation {...defaultProps} annotations={annotations} />);
    // Verify the annotation is rendered
    expect(screen.getByText('Test annotation')).toBeInTheDocument();
  });

  it('handles mouse interactions correctly', async () => {
    const user = userEvent.setup();
    render(<Annotation {...defaultProps} />);
    
    const image = screen.getByAltText('Test image');
    
    // Simulate mouse interactions
    await user.click(image);
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('handles annotation submission', async () => {
    const user = userEvent.setup();
    render(<Annotation {...defaultProps} />);
    
    const image = screen.getByAltText('Test image');
    
    // Create and submit an annotation
    await user.click(image);
    await user.keyboard('{Enter}');
    
    expect(defaultProps.onSubmit).toHaveBeenCalled();
  });
});
