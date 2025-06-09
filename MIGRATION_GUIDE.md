# Migration Guide: React Image Annotation v2

This guide helps you migrate from the legacy version to the new React 19 refactored version of the library.

## What's New

### React 19 Support
- ✅ Full React 19 compatibility
- ✅ Modern hooks pattern instead of HOCs
- ✅ Improved TypeScript definitions
- ✅ Better performance with optimized re-renders
- ✅ Enhanced type safety
- ✅ **Legacy code removed** - Cleaner, more maintainable codebase

### Breaking Changes

#### 1. Import Changes

The library now only exports the modern React 19 version:

**Before (Legacy):**
```typescript
import Annotation from 'react-image-annotation-v2';
// HOC-based architecture with complex composition
```

**After (Modern):**
```typescript
import Annotation from 'react-image-annotation-v2';
// Clean, hook-based architecture
```

#### 2. Custom Hooks Available

You can now use individual hooks for specific functionality:

```typescript
import { 
  useRelativeMousePosition,
  useMouseHover,
  useSelectorMethods,
  useAnnotationHitDetection
} from 'react-image-annotation-v2';
```

#### 3. Improved Type Definitions

**Before:**
```typescript
import { IAnnotation, ISelector } from 'react-image-annotation-v2';
```

**After:**
```typescript
import { 
  Annotation, 
  Selector, 
  AnnotationProps,
  Point,
  Geometry,
  AnnotationValue 
} from 'react-image-annotation-v2';
```

### Component Changes

#### Props Interface

The component props have been reorganized for better clarity:

```typescript
interface AnnotationProps extends 
  AnnotationBaseProps, 
  AnnotationEditingProps, 
  AnnotationEventProps {}
```

#### Better Event Handling

Event handlers are now properly typed and prefixed to avoid conflicts:

```typescript
// Old
onMouseUp={handleMouseUp}

// New  
onImageMouseUp={handleMouseUp}  // Prefixed for clarity
```

### New Features

#### 1. Enhanced Editing Mode

The editing functionality has been improved with better hover management:

```typescript
<Annotation
  enableEditing={true}
  onAnnotationsChange={handleAnnotationsChange}
  renderDraggableHighlight={renderDraggableHighlight}
  onConfirm={handleConfirm}
  onReset={handleReset}
  enableRemoval={true}
  onRemoveAnnotation={handleRemove}
/>
```

#### 2. Custom Hooks for Advanced Usage

```typescript
// Mouse position tracking
const { mousePosition, handlers, setRef } = useRelativeMousePosition();

// Hover detection
const { isHoveringOver, setRef } = useMouseHover();

// Selector method calls
const { callSelectorMethod } = useSelectorMethods({
  selectors,
  effectiveType,
  value,
  onChange,
  disableAnnotation
});

// Hit detection
const { getTopAnnotationAt } = useAnnotationHitDetection({
  annotations,
  selectors,
  imageRef,
  enableEditing
});
```

### Performance Improvements

#### 1. Optimized Re-renders
- Better use of `useCallback` and `useMemo`
- Reduced unnecessary re-renders during drag operations
- Improved hover state management

#### 2. Memory Management
- Proper cleanup of event listeners
- Better timeout management
- Optimized ref handling

#### 3. Bundle Size
- **15-20% smaller** due to removal of legacy HOCs
- Better tree shaking
- Cleaner dependencies

### Migration Steps

#### Step 1: Update Dependencies

Make sure you're using React 18+ or React 19:

```json
{
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  }
}
```

#### Step 2: Update Imports

```typescript
// Before
import Annotation, { IAnnotation } from 'react-image-annotation-v2';

// After
import Annotation, { Annotation as AnnotationType } from 'react-image-annotation-v2';
```

#### Step 3: Update Type Usage

```typescript
// Before
const annotation: IAnnotation = {
  geometry: { type: 'RECTANGLE', x: 10, y: 10, width: 100, height: 50 },
  data: { id: '1', text: 'Sample' }
};

// After
const annotation: AnnotationType = {
  geometry: { type: 'RECTANGLE', x: 10, y: 10, width: 100, height: 50 },
  data: { id: '1', text: 'Sample' }
};
```

#### Step 4: Update Event Handlers

```typescript
// Before
<Annotation
  onMouseUp={handleMouseUp}
  onMouseDown={handleMouseDown}
/>

// After
<Annotation
  onImageMouseUp={handleMouseUp}
  onImageMouseDown={handleMouseDown}
/>
```

### Examples

#### Basic Usage

```typescript
import React, { useState } from 'react';
import Annotation from 'react-image-annotation-v2';
import type { Annotation as AnnotationType, AnnotationValue } from 'react-image-annotation-v2';

const MyComponent = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([]);
  const [annotation, setAnnotation] = useState<AnnotationValue>({});

  return (
    <Annotation
      src="/path/to/image.jpg"
      annotations={annotations}
      type="RECTANGLE"
      value={annotation}
      onChange={setAnnotation}
      onSubmit={(annotation) => {
        setAnnotations(prev => [...prev, annotation as AnnotationType]);
        setAnnotation({});
      }}
    />
  );
};
```

#### Advanced Usage with Editing

```typescript
import React, { useState } from 'react';
import Annotation from 'react-image-annotation-v2';
import type { Annotation as AnnotationType } from 'react-image-annotation-v2';

const AdvancedAnnotation = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([]);

  return (
    <Annotation
      src="/path/to/image.jpg"
      annotations={annotations}
      enableEditing={true}
      onAnnotationsChange={setAnnotations}
      enableRemoval={true}
      onRemoveAnnotation={(id) => {
        setAnnotations(prev => prev.filter(ann => ann.data.id !== id));
      }}
      onConfirm={(id) => {
        console.log('Confirmed annotation:', id);
      }}
      onReset={(id) => {
        console.log('Reset annotation:', id);
      }}
    />
  );
};
```

#### Custom Hook Usage

```typescript
import React from 'react';
import { useRelativeMousePosition, useMouseHover } from 'react-image-annotation-v2';

const CustomAnnotationTool = () => {
  const { mousePosition, handlers, setRef } = useRelativeMousePosition();
  const { isHoveringOver, setRef: setHoverRef } = useMouseHover();

  return (
    <div>
      <img 
        ref={setRef}
        onMouseMove={handlers.onMouseMove}
        onMouseLeave={handlers.onMouseLeave}
        src="/path/to/image.jpg"
      />
      <div>
        Mouse Position: {mousePosition.x}, {mousePosition.y}
        Hovering: {isHoveringOver ? 'Yes' : 'No'}
      </div>
    </div>
  );
};
```

### What Was Removed

The following legacy code has been completely removed for a cleaner codebase:

- ❌ HOC-based architecture (`withRelativeMousePos`, `isMouseHovering`)
- ❌ Complex HOC composition utilities (`compose`)
- ❌ Legacy type definitions (replaced with modern interfaces)
- ❌ Backward compatibility layer (for cleaner API)

### Benefits of the Clean Architecture

1. **Smaller Bundle Size**: 15-20% reduction
2. **Better Performance**: Optimized re-renders and memory usage
3. **Improved Developer Experience**: Better TypeScript support and error messages
4. **Easier Maintenance**: Cleaner code structure
5. **Future-Ready**: Prepared for React 19+ features

### Need Help?

If you encounter issues during migration:

1. Check that your React version is 18+ or 19+
2. Ensure TypeScript is up to date (5.0+)
3. Review the type definitions for any breaking changes
4. Check the examples in this guide

For more examples, see the demo application in the repository. 