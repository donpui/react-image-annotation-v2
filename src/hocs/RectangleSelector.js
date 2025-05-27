import { getCoordPercentage } from '../utils/offsetCoordinates';

export const TYPE = 'RECTANGLE'

export function intersects({ x, y }, geometry) {
  if (!geometry) return false
  
  const x1 = Math.min(geometry.x, geometry.x + geometry.width)
  const x2 = Math.max(geometry.x, geometry.x + geometry.width)
  const y1 = Math.min(geometry.y, geometry.y + geometry.height)
  const y2 = Math.max(geometry.y, geometry.y + geometry.height)

  if (x < x1) return false
  if (y < y1) return false
  if (x > x2) return false
  if (y > y2) return false

  return true
}

export function area(geometry) {
  if (!geometry) return 0
  if (!geometry.width || !geometry.height) return 0
  
  const width = Math.abs(geometry.width)
  const height = Math.abs(geometry.height)
  return width * height
}

export const methods = {
  onTouchStart(annotation, e) {
    return pointerDown(annotation, e)
  },
  onTouchEnd(annotation, e) {
    return pointerUp(annotation, e)
  },
  onTouchMove(annotation, e) {
    return pointerMove(annotation, e)
  },
  onMouseDown(annotation, e) {
    return pointerDown(annotation, e)
  },
  onMouseUp(annotation, e) {
    return pointerUp(annotation, e)
  },
  onMouseMove(annotation, e) {
    return pointerMove(annotation, e)
  }
}

function pointerDown(annotation, e) {
  if (!annotation.selection) {
    const { x: anchorX, y: anchorY } = getCoordPercentage(e)
    return {
      ...annotation,
      selection: {
        ...annotation.selection,
        mode: 'SELECTING',
        anchorX,
        anchorY
      }
    }
  } else {
    return {}
  }
}

function pointerUp(annotation, e) {
  if (annotation.selection) {
    const { selection, geometry } = annotation
    if (!geometry) {
      return {}
    }
    switch (annotation.selection.mode) {
      case 'SELECTING':
        return {
          ...annotation,
          selection: {
            ...annotation.selection,
            showEditor: true,
            mode: 'EDITING'
          }
        }
      default:
        break
    }
  }
  return annotation
}

function pointerMove(annotation, e) {
  if (annotation.selection && annotation.selection.mode === 'SELECTING') {
    const { anchorX, anchorY } = annotation.selection
    const { x: newX, y: newY } = getCoordPercentage(e)
    const width = newX - anchorX
    const height = newY - anchorY

    return {
      ...annotation,
      geometry: {
        ...annotation.geometry,
        type: TYPE,
        x: width > 0 ? anchorX : newX,
        y: height > 0 ? anchorY : newY,
        width: Math.abs(width),
        height: Math.abs(height)
      }
    }
  }
  return annotation
}

export default {
  TYPE,
  intersects,
  area,
  methods
}
