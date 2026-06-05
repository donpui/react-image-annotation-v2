import React, { useLayoutEffect, useRef, useState } from 'react';
import type { Annotation, Geometry } from '../../types/core';

const EDGE_MARGIN_PX = 8;
const DEFAULT_OFFSET_PX = 6;

export type AnnotationContentAnchorPlacement = 'below' | 'above' | 'auto';

export interface AnnotationContentAnchorProps {
  annotation: Pick<Annotation, 'geometry'>;
  containerRef: React.RefObject<HTMLElement | null>;
  placement?: AnnotationContentAnchorPlacement;
  offsetPx?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

function hasBoxGeometry(
  geometry: Geometry | undefined
): geometry is Geometry & {
  x: number;
  y: number;
  width: number;
  height: number;
} {
  return (
    !!geometry &&
    typeof geometry.x === 'number' &&
    typeof geometry.y === 'number' &&
    typeof geometry.width === 'number' &&
    typeof geometry.height === 'number'
  );
}

function resolvePlacement({
  placement,
  geometry,
  containerHeight,
  overlayHeight,
  offsetPx,
}: {
  placement: AnnotationContentAnchorPlacement;
  geometry: { y: number; height: number };
  containerHeight: number;
  overlayHeight: number;
  offsetPx: number;
}): 'below' | 'above' {
  if (placement === 'above') return 'above';
  if (placement === 'below') return 'below';

  const annotationTopPx = (geometry.y / 100) * containerHeight;
  const annotationBottomPx =
    ((geometry.y + geometry.height) / 100) * containerHeight;
  const requiredPx = overlayHeight + offsetPx + EDGE_MARGIN_PX;
  const spaceBelow = containerHeight - annotationBottomPx;
  const spaceAbove = annotationTopPx;

  if (spaceBelow >= requiredPx) return 'below';
  if (spaceAbove >= requiredPx) return 'above';
  return spaceAbove >= spaceBelow ? 'above' : 'below';
}

/**
 * Positions floating UI (renderContent, editors) relative to annotation geometry,
 * flips above the box when near the bottom, and clamps inside the image bounds.
 */
export function AnnotationContentAnchor({
  annotation,
  containerRef,
  placement = 'auto',
  offsetPx = DEFAULT_OFFSET_PX,
  className,
  style,
  children,
}: AnnotationContentAnchorProps) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [resolvedPlacement, setResolvedPlacement] = useState<'below' | 'above'>(
    placement === 'above' ? 'above' : 'below'
  );

  const { geometry } = annotation;

  useLayoutEffect(() => {
    const anchor = anchorRef.current;
    const container = containerRef.current;
    if (!anchor || !container || !hasBoxGeometry(geometry)) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const overlayHeight = anchor.offsetHeight;

    const nextPlacement = resolvePlacement({
      placement,
      geometry,
      containerHeight: containerRect.height,
      overlayHeight,
      offsetPx,
    });

    if (nextPlacement !== resolvedPlacement) {
      setResolvedPlacement(nextPlacement);
      return;
    }

    const anchorRect = anchor.getBoundingClientRect();

    let dx = 0;
    if (anchorRect.right > containerRect.right - EDGE_MARGIN_PX) {
      dx = containerRect.right - EDGE_MARGIN_PX - anchorRect.right;
    }
    if (anchorRect.left + dx < containerRect.left + EDGE_MARGIN_PX) {
      dx = containerRect.left + EDGE_MARGIN_PX - anchorRect.left;
    }

    let dy = 0;
    if (anchorRect.bottom > containerRect.bottom - EDGE_MARGIN_PX) {
      dy = containerRect.bottom - EDGE_MARGIN_PX - anchorRect.bottom;
    }
    if (anchorRect.top + dy < containerRect.top + EDGE_MARGIN_PX) {
      dy = containerRect.top + EDGE_MARGIN_PX - anchorRect.top;
    }

    setTranslate((prev) =>
      prev.x === dx && prev.y === dy ? prev : { x: dx, y: dy }
    );
  }, [geometry, containerRef, placement, offsetPx, resolvedPlacement]);

  if (!hasBoxGeometry(geometry)) {
    return null;
  }

  const anchorStyle: React.CSSProperties =
    resolvedPlacement === 'above'
      ? {
          position: 'absolute',
          left: `${geometry.x}%`,
          bottom: `calc(${100 - geometry.y}% + ${offsetPx}px)`,
          transform: `translate(${translate.x}px, ${translate.y}px)`,
          pointerEvents: 'none',
          zIndex: 25,
        }
      : {
          position: 'absolute',
          left: `${geometry.x}%`,
          top: `calc(${geometry.y + geometry.height}% + ${offsetPx}px)`,
          transform: `translate(${translate.x}px, ${translate.y}px)`,
          pointerEvents: 'none',
          zIndex: 25,
        };

  return (
    <div
      ref={anchorRef}
      className={className}
      style={{ ...anchorStyle, ...style }}
      data-annotation-content-anchor
      data-placement={resolvedPlacement}
    >
      {children}
    </div>
  );
}
