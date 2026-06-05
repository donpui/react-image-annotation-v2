import type { CSSProperties } from 'react';
import type { Geometry } from '../../types/core';
import {
  DELETE_BUTTON_HIT_AREA_PX,
  DELETE_BUTTON_SIZE_PX,
} from './DeleteCrossIcon';

/** Centers the delete control on the AOI box top-right corner (image % coordinates). */
export function getDeleteCornerPosition(geometry: Geometry | undefined) {
  if (
    !geometry ||
    typeof geometry.x !== 'number' ||
    typeof geometry.y !== 'number' ||
    typeof geometry.width !== 'number'
  ) {
    return null;
  }

  return {
    left: `calc(${geometry.x}% + ${geometry.width}%)`,
    top: `calc(${geometry.y}%)`,
    transform: 'translate(-50%, -50%)',
  } as const;
}

/** Positions a child inside a relatively positioned AOI box (draggable editor). */
export const deleteCornerBoxStyle: CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  transform: 'translate(50%, -50%)',
  width: DELETE_BUTTON_HIT_AREA_PX,
  height: DELETE_BUTTON_HIT_AREA_PX,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'auto',
  zIndex: 20,
};
