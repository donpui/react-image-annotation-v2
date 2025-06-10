# Using imageRef with forwardRef Support

The Annotation component now supports both forwarded refs and an `imageRef` prop to access the underlying image element. This is useful for detecting when the image is loaded or for other image-related operations.

## Example Usage

### Using forwardRef

```typescript
import React, { useRef, useEffect } from 'react';
import { Annotation } from 'react-image-annotation';

const MyComponent = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleImageLoad = () => {
      console.log('Image loaded!', imageRef.current);
      // Now you can access image dimensions, etc.
      if (imageRef.current) {
        console.log('Image dimensions:', {
          width: imageRef.current.naturalWidth,
          height: imageRef.current.naturalHeight
        });
      }
    };

    const handleImageError = () => {
      console.error('Failed to load image');
    };

    if (imageRef.current) {
      imageRef.current.addEventListener('load', handleImageLoad);
      imageRef.current.addEventListener('error', handleImageError);
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener('load', handleImageLoad);
        imageRef.current.removeEventListener('error', handleImageError);
      }
    };
  }, []);

  return (
    <Annotation
      ref={imageRef}
      src="/path/to/your/image.jpg"
      annotations={[]}
      selectors={[]}
      // ... other props
    />
  );
};
```

### Using imageRef prop

```typescript
import React, { useRef, useEffect } from 'react';
import { Annotation } from 'react-image-annotation';

const MyComponent = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageLoad = () => {
    console.log('Image loaded!');
    if (imageRef.current) {
      // Access image properties
      const { naturalWidth, naturalHeight } = imageRef.current;
      console.log(`Image size: ${naturalWidth}x${naturalHeight}`);
    }
  };

  return (
    <Annotation
      imageRef={imageRef}
      src="/path/to/your/image.jpg"
      annotations={[]}
      selectors={[]}
      onImageLoad={handleImageLoad} // You can still use onLoad via the imageRef
      // ... other props
    />
  );
};
```

### With callback ref

```typescript
import React, { useCallback } from 'react';
import { Annotation } from 'react-image-annotation';

const MyComponent = () => {
  const handleImageRef = useCallback((imageElement: HTMLImageElement | null) => {
    if (imageElement) {
      const handleLoad = () => {
        console.log('Image loaded via callback ref!');
        console.log('Natural dimensions:', {
          width: imageElement.naturalWidth,
          height: imageElement.naturalHeight
        });
      };

      imageElement.addEventListener('load', handleLoad);
      
      // Clean up when component unmounts or ref changes
      return () => {
        imageElement.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  return (
    <Annotation
      ref={handleImageRef}
      src="/path/to/your/image.jpg"
      annotations={[]}
      selectors={[]}
      // ... other props
    />
  );
};
```

## Common Use Cases

1. **Image Loading Detection**: Know when the image has fully loaded
2. **Dimension Access**: Get natural image dimensions for calculations
3. **Canvas Operations**: Draw on a canvas based on the loaded image
4. **Error Handling**: Detect and handle image loading failures
5. **Performance Monitoring**: Measure image loading times

## TypeScript Support

The component is fully typed with TypeScript:

```typescript
// forwardRef returns HTMLImageElement
const imageRef = useRef<HTMLImageElement>(null);

// imageRef prop also accepts HTMLImageElement ref
<Annotation imageRef={imageRef} ... />
``` 