import { getCoordPercentage } from '../utils/offsetCoordinates';

const square = n => Math.pow(n, 2)

export const TYPE = 'OVAL'

export function intersects({ x, y }, geometry) {
  if (!geometry) return false;
  if (!geometry.width || !geometry.height) return false;

  const width = Math.abs(geometry.width)
  const height = Math.abs(geometry.height)
  const center = {
    x: geometry.x + width / 2,
    y: geometry.y + height / 2
  }

  const rx = width / 2
  const ry = height / 2

  if (rx === 0 || ry === 0) return false

  const relX = x - center.x
  const relY = y - center.y

  return (square(relX) / square(rx)) + (square(relY) / square(ry)) <= 1
}

export function area(geometry) {
  if (!geometry) return 0;
  if (!geometry.width || !geometry.height) return 0;
  if (geometry.width <= 0 || geometry.height <= 0) return 0;

  return Math.PI * Math.abs(geometry.width) * Math.abs(geometry.height) / 4
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
    if (!annotation.geometry) {
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
    }
  },
  onMouseUp(annotation, e) {
    if (annotation.selection && annotation.selection.mode === 'SELECTING') {
      return {
        ...annotation,
        selection: {
          ...annotation.selection,
          showEditor: true,
          mode: 'EDITING'
        }
      }
    }
  },
  onMouseMove(annotation, e) {
    if (annotation.selection && annotation.selection.mode === 'SELECTING') {
      const { anchorX, anchorY } = annotation.selection
      const { x, y } = getCoordPercentage(e)
      
      return {
        ...annotation,
        geometry: {
          ...annotation.geometry,
          type: TYPE,
          x: Math.min(anchorX, x),
          y: Math.min(anchorY, y),
          width: Math.abs(x - anchorX),
          height: Math.abs(y - anchorY)
        }
      }
    }
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
  return annotation
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
