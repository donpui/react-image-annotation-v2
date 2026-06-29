import { getCoordPercentage } from '../utils/offsetCoordinates';

export const TYPE = 'POLYGON';
export const MAX_POINTS = 50;

const CLOSE_THRESHOLD_PCT = 3;
const DOUBLE_CLICK_MS = 350;
const DOUBLE_CLICK_DIST_PCT = 2;

function dist(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function computeBoundingBox(points) {
  const xs = points.map(p => p.x);
  const ys = points.map(p => p.y);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  return {
    x: minX,
    y: minY,
    width: Math.max(...xs) - minX,
    height: Math.max(...ys) - minY,
  };
}

export function intersects({ x, y }, geometry) {
  if (!geometry || !geometry.points || geometry.points.length < 3) return false;
  const pts = geometry.points;
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const xi = pts[i].x, yi = pts[i].y;
    const xj = pts[j].x, yj = pts[j].y;
    if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
      inside = !inside;
    }
  }
  return inside;
}

export function area(geometry) {
  if (!geometry || !geometry.points || geometry.points.length < 3) return 0;
  const pts = geometry.points;
  let a = 0;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    a += (pts[j].x + pts[i].x) * (pts[j].y - pts[i].y);
  }
  return Math.abs(a / 2);
}

function closePolygon(annotation) {
  const points = annotation.geometry?.points || [];
  const bbox = computeBoundingBox(points);
  return {
    ...annotation,
    geometry: {
      ...annotation.geometry,
      ...bbox,
    },
    selection: {
      ...annotation.selection,
      mode: 'EDITING',
      showEditor: true,
      lastClickX: undefined,
      lastClickY: undefined,
      lastClickTime: undefined,
      cursorX: undefined,
      cursorY: undefined,
    },
  };
}

export const methods = {
  onClick(annotation, e) {
    const { x, y } = getCoordPercentage(e);
    if (x === null || x === undefined) return annotation;

    const mode = annotation.selection?.mode;
    const existingPoints = annotation.geometry?.points || [];

    if (mode !== 'COLLECTING_POINTS') {
      return {
        ...annotation,
        selection: {
          ...annotation.selection,
          mode: 'COLLECTING_POINTS',
          lastClickX: x,
          lastClickY: y,
          lastClickTime: Date.now(),
        },
        geometry: {
          type: TYPE,
          points: [{ x, y }],
        },
      };
    }

    const timeDelta = Date.now() - (annotation.selection?.lastClickTime || 0);
    const lastX = annotation.selection?.lastClickX ?? x;
    const lastY = annotation.selection?.lastClickY ?? y;
    const isDoubleClick =
      timeDelta < DOUBLE_CLICK_MS &&
      dist({ x, y }, { x: lastX, y: lastY }) < DOUBLE_CLICK_DIST_PCT;

    if (isDoubleClick && existingPoints.length >= 3) {
      return closePolygon(annotation);
    }

    if (existingPoints.length >= 3) {
      const nearStart = dist({ x, y }, existingPoints[0]) < CLOSE_THRESHOLD_PCT;
      if (nearStart) {
        return closePolygon(annotation);
      }
    }

    if (existingPoints.length >= MAX_POINTS) {
      return existingPoints.length >= 3 ? closePolygon(annotation) : annotation;
    }

    return {
      ...annotation,
      selection: {
        ...annotation.selection,
        mode: 'COLLECTING_POINTS',
        lastClickX: x,
        lastClickY: y,
        lastClickTime: Date.now(),
      },
      geometry: {
        ...annotation.geometry,
        type: TYPE,
        points: [...existingPoints, { x, y }],
      },
    };
  },

  onMouseMove(annotation, e) {
    if (annotation.selection?.mode !== 'COLLECTING_POINTS') return annotation;
    const { x, y } = getCoordPercentage(e);
    if (x === null || x === undefined) return annotation;
    return {
      ...annotation,
      selection: {
        ...annotation.selection,
        cursorX: x,
        cursorY: y,
      },
    };
  },
};

export default {
  TYPE,
  intersects,
  area,
  methods,
  MAX_POINTS,
};
