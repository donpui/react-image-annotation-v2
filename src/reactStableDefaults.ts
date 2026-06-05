import type { CSSProperties } from 'react';
import type { RenderOverlayProps } from './types/core';

/** Stable reference for `style = …` defaults (avoids `style = {}` per render). */
export const EMPTY_STYLE: CSSProperties = {};

/** Stable default for `renderOverlay` when args are omitted. */
export const EMPTY_RENDER_OVERLAY_PROPS: RenderOverlayProps = {};
