import { useCallback, useEffect, useRef, useState } from 'react';
import type { Annotation } from '../types/core';

/** Grace period when moving pointer from AOI box to the delete control. */
export const CONTROLS_PIN_GRACE_MS = 300;

/**
 * Keeps an annotation "active" briefly after hover leaves the box, and while
 * the pointer is over the delete control (which sits outside the hit geometry).
 */
export function usePinnedControlsHover(
  hoveredAnnotation: Annotation | undefined
) {
  const [pinnedId, setPinnedId] = useState<string | number | null>(null);
  const deleteHoverIdRef = useRef<string | number | null>(null);
  const clearTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelScheduledClear = useCallback(() => {
    if (clearTimerRef.current != null) {
      clearTimeout(clearTimerRef.current);
      clearTimerRef.current = null;
    }
  }, []);

  const scheduleClear = useCallback(() => {
    cancelScheduledClear();
    clearTimerRef.current = setTimeout(() => {
      if (deleteHoverIdRef.current == null) {
        setPinnedId(null);
      }
      clearTimerRef.current = null;
    }, CONTROLS_PIN_GRACE_MS);
  }, [cancelScheduledClear]);

  useEffect(() => {
    const hoveredId = hoveredAnnotation?.data?.id;
    if (hoveredId != null) {
      cancelScheduledClear();
      setPinnedId(hoveredId);
      return;
    }
    if (deleteHoverIdRef.current == null) {
      scheduleClear();
    }
  }, [hoveredAnnotation, cancelScheduledClear, scheduleClear]);

  useEffect(() => () => cancelScheduledClear(), [cancelScheduledClear]);

  const onDeleteControlMouseEnter = useCallback(
    (annotationId: string | number) => {
      cancelScheduledClear();
      deleteHoverIdRef.current = annotationId;
      setPinnedId(annotationId);
    },
    [cancelScheduledClear]
  );

  const onDeleteControlMouseLeave = useCallback(() => {
    deleteHoverIdRef.current = null;
    scheduleClear();
  }, [scheduleClear]);

  return {
    pinnedControlsId: pinnedId,
    onDeleteControlMouseEnter,
    onDeleteControlMouseLeave,
  };
}
