import { getCoordPercentage } from '../utils/offsetCoordinates';
const MARGIN = 6

const marginToPercentage = (container = { width: 100, height: 100 }) => ({
  marginX: MARGIN / container.width * 100,
  marginY: MARGIN / container.height * 100
})

export const TYPE = 'POINT'

export function intersects ({ x, y }, geometry, container) {
  if (!geometry) return false

  const { marginX, marginY } = marginToPercentage(container)
  const margin = Math.min(marginX, marginY) / 2

  const dx = Math.abs(x - geometry.x)
  const dy = Math.abs(y - geometry.y)

  return dx <= margin && dy <= margin
}

export function area (geometry, container) {
  return 0
}

export const methods = {
  onClick (annotation, e) {
    if (!annotation.geometry) {
      return {
        ...annotation,
        selection: {
          ...annotation.selection,
          showEditor: true,
          mode: 'EDITING'
        },
        geometry: {
          ...annotation.geometry,
          ...getCoordPercentage(e),
          width: 0,
          height: 0,
          type: TYPE,
        }
      }
    } else {
      return {}
    }
  }
}

export default {
  TYPE,
  intersects,
  area,
  methods
}
