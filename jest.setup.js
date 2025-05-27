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