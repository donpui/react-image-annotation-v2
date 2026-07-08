import { useCallback, useRef, useState } from 'react';
import type { Annotation, Geometry } from '../types/core';

const HUNDRED = 100;

interface DragState {
  annotationId: string | number;
  initialGeometry: Geometry;
  initialCursorPosition: { x: number; y: number };
}

interface UseDraggingProps {
  annotations: Annotation[];
  onAnnotationsChange?: (annotations: Annotation[]) => void;
  imageRef: React.RefObject<HTMLImageElement | null>;
  /** When true, geometry updates are held until confirm (requires onConfirm + onReset). */
  previewMode?: boolean;
}

export interface UseDraggingReturn {
  isDragging: boolean;
  draggingAnnotationId: string | number | undefined;
  hasPendingChanges: (annotationId: string | number) => boolean;
  onDotDragStart: (
    annotationId: string,
    initialCursorPosition: { x: number; y: number }
  ) => void;
  onDotDrag: (
    event: React.MouseEvent,
    position: string,
    initialCursorPosition: { x: number; y: number }
  ) => void;
  onMoveStart: (
    annotationId: string,
    initialCursorPosition: { x: number; y: number }
  ) => void;
  onMove: (
    event: React.MouseEvent,
    initialCursorPosition: { x: number; y: number }
  ) => void;
  onDragEnd: () => void;
  handleConfirm: (annotationId: string | number) => void;
  handleReset: (annotationId: string | number) => void;
  getEffectiveAnnotation: (annotation: Annotation) => Annotation;
}

function clampGeometry(geometry: Geometry): Geometry {
  let { x = 0, y = 0, width = 0, height = 0 } = geometry;
  width = Math.max(width, 0);
  height = Math.max(height, 0);
  x = Math.min(x, HUNDRED - width);
  y = Math.min(y, HUNDRED - height);
  return { ...geometry, x, y, width, height };
}

export function useDragging({
  annotations,
  onAnnotationsChange,
  imageRef,
  previewMode = false,
}: UseDraggingProps): UseDraggingReturn {
  const [isDragging, setIsDragging] = useState(false);
  const [draggingAnnotationId, setDraggingAnnotationId] = useState<
    string | number | undefined
  >(undefined);
  const [previewGeometries, setPreviewGeometries] = useState<
    Map<string | number, Geometry>
  >(() => new Map());
  const dragStateRef = useRef<DragState | null>(null);
  const resetGeometryRef = useRef<Map<string | number, Geometry>>(null!);
  if (!resetGeometryRef.current) {
    resetGeometryRef.current = new Map();
  }

  const getImageSize = useCallback(() => {
    const img = imageRef.current;
    if (!img) return { width: 1, height: 1 };
    const rect = img.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  }, [imageRef]);

  const updateGeometry = useCallback(
    (annotationId: string | number, newGeometry: Geometry) => {
      const clamped = clampGeometry(newGeometry);
      if (previewMode) {
        setPreviewGeometries((prev) => {
          const next = new Map(prev);
          next.set(annotationId, clamped);
          return next;
        });
        return;
      }
      onAnnotationsChange?.(
        annotations.map((annotation) =>
          annotation.data?.id === annotationId
            ? { ...annotation, geometry: clamped }
            : annotation
        )
      );
    },
    [previewMode, onAnnotationsChange, annotations]
  );

  const applyDeltaResize = useCallback(
    (
      event: React.MouseEvent | MouseEvent,
      position: string,
      initial: Geometry,
      initialCursorPosition: { x: number; y: number }
    ): Geometry => {
      const { width: slideWidth, height: slideHeight } = getImageSize();
      const deltaX = event.clientX - initialCursorPosition.x;
      const deltaY = event.clientY - initialCursorPosition.y;
      const newGeometry: Geometry = { ...initial };

      switch (position) {
        case 'top':
          newGeometry.height = Math.min(
            (initial.height ?? 0) - (deltaY / slideHeight) * HUNDRED,
            (initial.y ?? 0) + (initial.height ?? 0)
          );
          newGeometry.y = Math.max(
            (initial.y ?? 0) + (deltaY / slideHeight) * HUNDRED,
            0
          );
          break;
        case 'right':
          newGeometry.width = Math.min(
            (initial.width ?? 0) + (deltaX / slideWidth) * HUNDRED,
            HUNDRED - (initial.x ?? 0)
          );
          break;
        case 'bottom':
          newGeometry.height = Math.min(
            (initial.height ?? 0) + (deltaY / slideHeight) * HUNDRED,
            HUNDRED - (initial.y ?? 0)
          );
          break;
        case 'left':
          newGeometry.width = Math.min(
            (initial.width ?? 0) - (deltaX / slideWidth) * HUNDRED,
            (initial.x ?? 0) + (initial.width ?? 0)
          );
          newGeometry.x = Math.max(
            (initial.x ?? 0) + (deltaX / slideWidth) * HUNDRED,
            0
          );
          break;
        default:
          break;
      }

      return clampGeometry(newGeometry);
    },
    [getImageSize]
  );

  const applyDeltaMove = useCallback(
    (event: React.MouseEvent | MouseEvent, state: DragState): Geometry => {
      const { width: slideWidth, height: slideHeight } = getImageSize();
      const deltaX = event.clientX - state.initialCursorPosition.x;
      const deltaY = event.clientY - state.initialCursorPosition.y;
      const initial = state.initialGeometry;

      return clampGeometry({
        ...initial,
        x: Math.max(
          Math.min(
            (initial.x ?? 0) + (deltaX / slideWidth) * HUNDRED,
            HUNDRED - (initial.width ?? 0)
          ),
          0
        ),
        y: Math.max(
          Math.min(
            (initial.y ?? 0) + (deltaY / slideHeight) * HUNDRED,
            HUNDRED - (initial.height ?? 0)
          ),
          0
        ),
      });
    },
    [getImageSize]
  );

  const startDrag = useCallback(
    (annotationId: string, initialCursorPosition: { x: number; y: number }) => {
      const target = annotations.find(
        (annotation) => annotation.data?.id === annotationId
      );
      const preview = previewGeometries.get(annotationId);
      const geometry = preview ?? target?.geometry;
      if (!geometry) return;

      dragStateRef.current = {
        annotationId,
        initialGeometry: { ...geometry },
        initialCursorPosition,
      };
      resetGeometryRef.current.set(annotationId, { ...geometry });
      setDraggingAnnotationId(annotationId);
      setIsDragging(true);
    },
    [annotations, previewGeometries]
  );

  const onDotDragStart = useCallback(
    (annotationId: string, initialCursorPosition: { x: number; y: number }) => {
      startDrag(annotationId, initialCursorPosition);
    },
    [startDrag]
  );

  const onDotDrag = useCallback(
    (
      event: React.MouseEvent,
      position: string,
      _initialCursorPosition: { x: number; y: number }
    ) => {
      const state = dragStateRef.current;
      if (!state) return;

      const newGeometry = applyDeltaResize(
        event,
        position,
        state.initialGeometry,
        state.initialCursorPosition
      );
      updateGeometry(state.annotationId, newGeometry);
    },
    [applyDeltaResize, updateGeometry]
  );

  const onMoveStart = useCallback(
    (annotationId: string, initialCursorPosition: { x: number; y: number }) => {
      startDrag(annotationId, initialCursorPosition);
    },
    [startDrag]
  );

  const onMove = useCallback(
    (
      event: React.MouseEvent,
      _initialCursorPosition: { x: number; y: number }
    ) => {
      const state = dragStateRef.current;
      if (!state) return;
      const newGeometry = applyDeltaMove(event, state);
      updateGeometry(state.annotationId, newGeometry);
    },
    [applyDeltaMove, updateGeometry]
  );

  const onDragEnd = useCallback(() => {
    setIsDragging(false);
    dragStateRef.current = null;
  }, []);

  const hasPendingChanges = useCallback(
    (annotationId: string | number) => previewGeometries.has(annotationId),
    [previewGeometries]
  );

  const handleConfirm = useCallback(
    (annotationId: string | number) => {
      const preview = previewGeometries.get(annotationId);
      if (preview && onAnnotationsChange) {
        onAnnotationsChange(
          annotations.map((annotation) =>
            annotation.data?.id === annotationId
              ? { ...annotation, geometry: preview }
              : annotation
          )
        );
      }
      setPreviewGeometries((prev) => {
        const next = new Map(prev);
        next.delete(annotationId);
        return next;
      });
      resetGeometryRef.current.delete(annotationId);
      setIsDragging(false);
      setDraggingAnnotationId(undefined);
      dragStateRef.current = null;
    },
    [previewGeometries, onAnnotationsChange, annotations]
  );

  const handleReset = useCallback(
    (annotationId: string | number) => {
      const state = dragStateRef.current;
      const initialGeometry =
        resetGeometryRef.current.get(annotationId) ??
        (state?.annotationId === annotationId
          ? state.initialGeometry
          : annotations.find((a) => a.data?.id === annotationId)?.geometry);

      if (initialGeometry && onAnnotationsChange) {
        onAnnotationsChange(
          annotations.map((annotation) =>
            annotation.data?.id === annotationId
              ? { ...annotation, geometry: initialGeometry }
              : annotation
          )
        );
      }

      setPreviewGeometries((prev) => {
        const next = new Map(prev);
        next.delete(annotationId);
        return next;
      });
      resetGeometryRef.current.delete(annotationId);
      setIsDragging(false);
      setDraggingAnnotationId(undefined);
      dragStateRef.current = null;
    },
    [annotations, onAnnotationsChange]
  );

  const getEffectiveAnnotation = useCallback(
    (annotation: Annotation): Annotation => {
      const id = annotation.data?.id;
      if (id == null) return annotation;
      const preview = previewGeometries.get(id);
      return preview ? { ...annotation, geometry: preview } : annotation;
    },
    [previewGeometries]
  );

  return {
    isDragging,
    draggingAnnotationId,
    hasPendingChanges,
    onDotDragStart,
    onDotDrag,
    onMoveStart,
    onMove,
    onDragEnd,
    handleConfirm,
    handleReset,
    getEffectiveAnnotation,
  };
}
