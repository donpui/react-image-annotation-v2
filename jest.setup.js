// Add React Testing Library custom matchers
import '@testing-library/jest-dom';

// Mock TextEncoder if needed
if (typeof TextEncoder === 'undefined') {
  global.TextEncoder = class {
    encode(str) {
      const utf8 = unescape(encodeURIComponent(str));
      const arr = new Uint8Array(utf8.length);
      for (let i = 0; i < utf8.length; i++) {
        arr[i] = utf8.charCodeAt(i);
      }
      return arr;
    }
  };
}

// Setup any global test environment configurations here 

if (typeof HTMLElement !== 'undefined' && !HTMLElement.prototype.getBoundingClientRect) {
  HTMLElement.prototype.getBoundingClientRect = () => ({
    width: 100,
    height: 100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  });
} 