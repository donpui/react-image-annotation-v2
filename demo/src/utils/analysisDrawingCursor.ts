import { buildDrawingCursorFromSvg } from '../../../src/utils/buildDrawingCursor';

/** Plain crosshair SVG (no filters) — required for custom cursor support in Chrome/Safari/Firefox. */
const ANALYSIS_CURSOR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 31 31">
  <circle cx="15.5" cy="14.772" r="6" fill="#212121" stroke="white" stroke-width="1"/>
  <rect x="3" y="15.772" width="2" height="25" transform="rotate(-90 3 15.772)" fill="#212121" stroke="white" stroke-width="1"/>
  <rect x="14.5" y="2.272" width="2" height="25" fill="#212121" stroke="white" stroke-width="1"/>
  <circle cx="15.5" cy="14.772" r="5.5" fill="#212121"/>
  <circle cx="15.5" cy="14.772" r="4.55" fill="white"/>
  <circle cx="15.5" cy="14.772" r="3.6" fill="#212121"/>
</svg>`;

export const analysisDrawingCursor = buildDrawingCursorFromSvg(
  ANALYSIS_CURSOR_SVG,
  16,
  15
);
