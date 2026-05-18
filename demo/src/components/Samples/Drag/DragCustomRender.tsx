import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Annotation from '../../../../../src/components/Annotation';
import Rectangle from '../../../../../src/components/Rectangle';
import FancyRectangle from '../../../../../src/components/FancyRectangle';
import Editor from '../../../../../src/components/Editor';
import Overlay from '../../../../../src/components/Overlay';
import {
  Annotation as AnnotationType,
  AnnotationValue,
  RenderContentProps,
  RenderHighlightProps,
} from '../../../../../src/types/core';
import { RectangleSelector } from '../../../../../src/selectors';
import img from '../../../img.jpeg';

const ContentCard = styled.div`
  background: rgba(15, 23, 42, 0.92);
  color: #e2e8f0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  line-height: 1.35;
  max-width: 220px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  pointer-events: auto;
`;

/** Custom passive highlight — strong border when hovered/active. */
const renderHighlight = ({ key, annotation, active }: RenderHighlightProps) => {
  const { geometry } = annotation;
  if (!geometry?.type || geometry.type !== RectangleSelector.TYPE) return null;

  return (
    <Rectangle
      key={key}
      annotation={annotation as { geometry: NonNullable<typeof geometry> }}
      active={active}
      style={{
        border: active ? '2px solid #0ea5e9' : '2px dashed rgba(14, 165, 233, 0.45)',
        boxShadow: active
          ? '0 0 0 3px rgba(14, 165, 233, 0.25)'
          : 'none',
        background: active ? 'rgba(14, 165, 233, 0.08)' : 'transparent',
        boxSizing: 'border-box',
      }}
    />
  );
};

/** Custom hover/active overlay — floats under the rectangle (interaction layer stays usable). */
const renderContent = ({ key, annotation }: RenderContentProps) => {
  const { geometry, data } = annotation;
  if (
    !geometry ||
    typeof geometry.x !== 'number' ||
    typeof geometry.y !== 'number' ||
    typeof geometry.width !== 'number' ||
    typeof geometry.height !== 'number'
  ) {
    return null;
  }

  return (
    <ContentCard
      key={key}
      style={{
        position: 'absolute',
        left: `${geometry.x}%`,
        top: `${geometry.y + geometry.height}%`,
        marginTop: 6,
        marginLeft: 4,
        zIndex: 25,
      }}
    >
      <strong style={{ color: '#38bdf8' }}>renderContent</strong>
      <div style={{ marginTop: 4 }}>
        {(data?.text as string | undefined)?.trim()
          ? String(data!.text)
          : 'Active annotation'}
      </div>
    </ContentCard>
  );
};

/**
 * With `enableEditing`, the default `renderDraggableHighlight` (handles + tint) is drawn
 * above `renderHighlight`, so teal borders and passive styling stay visible while editing.
 */
const DragCustomRender: React.FC = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([
    {
      geometry: { type: 'RECTANGLE', x: 12, y: 12, width: 28, height: 22 },
      data: { id: 'custom-1', text: 'Custom highlight + content. Hover for edit chrome.' },
    },
  ]);
  const [draft, setDraft] = useState<AnnotationValue>({});

  const onSubmit = useCallback((value: AnnotationValue) => {
    const { geometry, data } = value;
    if (!geometry?.type) return;

    setAnnotations((prev) =>
      prev.concat({
        geometry: geometry as AnnotationType['geometry'],
        data: { ...data, id: Math.random().toString() },
      } as AnnotationType)
    );
    setDraft({});
  }, []);

  const handleConfirm = useCallback((annotationId: string | number) => {
    console.log('Confirmed:', annotationId);
  }, []);

  const handleReset = useCallback((annotationId: string | number) => {
    console.log('Reset:', annotationId);
  }, []);

  const renderSlots = useMemo(
    () => ({
      renderHighlight,
      renderContent,
      renderSelector: ({ annotation }: { annotation: AnnotationValue }) => (
        <FancyRectangle annotation={annotation} />
      ),
      renderEditor: ({
        annotation,
        onChange,
        onSubmit,
      }: {
        annotation: AnnotationValue;
        onChange: (v: AnnotationValue) => void;
        onSubmit: () => void;
      }) => (
        <Editor annotation={annotation as AnnotationType} onChange={onChange} onSubmit={onSubmit} />
      ),
      renderOverlay: () => (
        <Overlay>Same drag/confirm editing as baseline — overlays are customized.</Overlay>
      ),
    }),
    []
  );

  return (
    <div style={{ flex: '1 1 360px', minWidth: 280 }}>
      <p style={{ marginTop: 0 }}>
        Uses <code>renderHighlight</code> for teal borders and{' '}
        <code>renderContent</code> for the dark card when active.{' '}
        <code>enableEditing</code> draws the draggable layer on top (tint + handles + ✓ ✕){' '}
        without replacing those renderers.
      </p>
      <div className="annotation-container" style={{ position: 'relative' }}>
        <Annotation
          src={img}
          alt="Two pebbles anthropomorphized holding hands"
          annotations={annotations}
          type={RectangleSelector.TYPE}
          selectors={[RectangleSelector]}
          value={draft}
          onChange={setDraft}
          onSubmit={onSubmit}
          renderSlots={renderSlots}
          enableEditing
          onAnnotationsChange={setAnnotations}
          onConfirm={handleConfirm}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

export default DragCustomRender;
