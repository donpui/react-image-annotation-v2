import React from 'react';

const CLOSE_THRESHOLD_PCT = 3;
const DOT_SIZE_PX = 10;

interface PointData {
  x: number;
  y: number;
}

interface PolygonGeometry {
  type: string;
  points?: PointData[];
}

interface PolygonSelection {
  mode?: string;
  cursorX?: number;
  cursorY?: number;
}

interface PolygonAnnotation {
  geometry?: PolygonGeometry;
  selection?: PolygonSelection;
}

interface PolygonProps {
  annotation: PolygonAnnotation;
  className?: string;
  style?: React.CSSProperties;
  active?: boolean;
}

function dist(p1: PointData, p2: PointData): number {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function Polygon({ annotation, className, style, active }: PolygonProps) {
  const { geometry, selection } = annotation;
  if (!geometry || !geometry.points || geometry.points.length === 0) return null;

  const points = geometry.points;
  const cursorX = selection?.cursorX;
  const cursorY = selection?.cursorY;
  const isCollecting = selection?.mode === 'COLLECTING_POINTS';
  const canClose = points.length >= 3;
  const firstPoint = points[0];

  const isCursorNearFirst =
    isCollecting &&
    canClose &&
    cursorX !== undefined &&
    cursorY !== undefined &&
    dist({ x: cursorX, y: cursorY }, firstPoint) < CLOSE_THRESHOLD_PCT;

  const svgPointsStr = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        ...style,
      }}
    >
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'visible',
        pointerEvents: 'none',
      }}
    >
      {/* Completed polygon fill */}
      {!isCollecting && points.length >= 3 && (
        <polygon
          points={svgPointsStr}
          fill="rgba(0,0,0,0.1)"
          stroke={active ? 'yellow' : 'black'}
          strokeWidth="2"
          strokeDasharray={active ? undefined : '5,3'}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      )}

      {/* In-progress lines */}
      {isCollecting && points.length > 1 && (
        <polyline
          points={svgPointsStr}
          fill="none"
          stroke="rgba(0,0,0,0.85)"
          strokeWidth="2"
          strokeDasharray="6,3"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      )}

      {/* Closing line preview when cursor is near first point */}
      {isCollecting && isCursorNearFirst && (
        <line
          x1={points[points.length - 1].x}
          y1={points[points.length - 1].y}
          x2={firstPoint.x}
          y2={firstPoint.y}
          stroke="rgba(0,128,0,0.7)"
          strokeWidth="2"
          strokeDasharray="6,3"
          vectorEffect="non-scaling-stroke"
        />
      )}

      {/* Preview line from last point to cursor */}
      {isCollecting && !isCursorNearFirst && cursorX !== undefined && cursorY !== undefined && (
        <line
          x1={points[points.length - 1].x}
          y1={points[points.length - 1].y}
          x2={cursorX}
          y2={cursorY}
          stroke="rgba(0,0,0,0.4)"
          strokeWidth="2"
          strokeDasharray="6,3"
          vectorEffect="non-scaling-stroke"
        />
      )}

    </svg>

      {/* Point dots — HTML so they stay circular when SVG is non-uniformly scaled */}
      {isCollecting &&
        points.map((point, i) => {
        const isFirst = i === 0;
        const isHighlighted = isFirst && isCursorNearFirst;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: DOT_SIZE_PX,
              height: DOT_SIZE_PX,
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              boxSizing: 'border-box',
              backgroundColor: isHighlighted
                ? 'rgba(0,180,0,0.9)'
                : isFirst
                  ? 'white'
                  : 'rgba(0,0,0,0.85)',
              border: `1.5px solid ${
                isHighlighted ? 'white' : isFirst ? 'rgba(0,0,0,0.85)' : 'white'
              }`,
            }}
          />
        );
      })}
    </div>
  );
}

export default Polygon;
