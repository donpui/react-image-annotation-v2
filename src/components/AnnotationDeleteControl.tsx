import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { DeleteButton } from './DraggableComponents/DeleteButton';
import { DELETE_BUTTON_HIT_AREA_PX } from './DraggableComponents/DeleteCrossIcon';
import { getDeleteCornerPosition } from './DraggableComponents/deleteButtonPosition';
import type { Annotation, RenderDeleteProps } from '../types/core';

const DeleteAnchor = styled.div`
  position: absolute;
  pointer-events: auto;
  z-index: 10;
  width: ${DELETE_BUTTON_HIT_AREA_PX}px;
  height: ${DELETE_BUTTON_HIT_AREA_PX}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface AnnotationDeleteControlProps
  extends Omit<RenderDeleteProps, 'key' | 'active'> {
  renderDelete?: (props: RenderDeleteProps) => React.ReactNode;
  onDeleteControlMouseEnter?: (annotationId: string | number) => void;
  onDeleteControlMouseLeave?: () => void;
}

export function AnnotationDeleteControl({
  annotation,
  onRemove,
  renderDelete,
  disabled: disabledProp,
  onDeleteControlMouseEnter,
  onDeleteControlMouseLeave,
}: AnnotationDeleteControlProps) {
  const [removing, setRemoving] = useState(false);
  const annotationId = annotation.data?.id;
  const position = getDeleteCornerPosition(annotation.geometry);
  const disabled = disabledProp || removing;

  const handleRemove = useCallback(async () => {
    if (disabled || annotationId == null) return;

    setRemoving(true);
    try {
      await onRemove(annotationId);
    } finally {
      setRemoving(false);
    }
  }, [annotationId, disabled, onRemove]);

  const handlePointerEnter = useCallback(() => {
    if (annotationId != null) {
      onDeleteControlMouseEnter?.(annotationId);
    }
  }, [annotationId, onDeleteControlMouseEnter]);

  const handlePointerLeave = useCallback(() => {
    onDeleteControlMouseLeave?.();
  }, [onDeleteControlMouseLeave]);

  if (!position || annotationId == null) {
    return null;
  }

  const hoverHandlers = {
    onMouseEnter: handlePointerEnter,
    onMouseLeave: handlePointerLeave,
    onPointerEnter: handlePointerEnter,
    onPointerLeave: handlePointerLeave,
  };

  if (renderDelete) {
    return (
      <DeleteAnchor style={position} {...hoverHandlers}>
        {renderDelete({
          key: annotationId,
          annotation,
          active: true,
          onRemove: handleRemove,
          disabled,
        })}
      </DeleteAnchor>
    );
  }

  return (
    <DeleteAnchor
      style={position}
      className="annotation-delete"
      {...hoverHandlers}
    >
      <DeleteButton
        annotationId={annotationId}
        onRemove={handleRemove}
        disabled={disabled}
      />
    </DeleteAnchor>
  );
}

export default AnnotationDeleteControl;
