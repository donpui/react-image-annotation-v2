/**
 * Build a CSS `cursor` value for `drawingCursor`.
 * Browsers often reject SVG cursors that use filters or external refs — prefer a plain SVG or PNG.
 */
export function buildDrawingCursor(
  imageUrl: string,
  hotspotX: number,
  hotspotY: number,
  fallback: string = 'crosshair'
): string {
  const trimmed = imageUrl.trim();
  const url =
    trimmed.startsWith('url(') ? trimmed : `url("${trimmed}")`;
  return `${url} ${hotspotX} ${hotspotY}, ${fallback}`;
}

/**
 * Inline SVG → data URL cursor (no separate asset; avoids filter-heavy SVG files).
 */
export function buildDrawingCursorFromSvg(
  svg: string,
  hotspotX: number,
  hotspotY: number,
  fallback: string = 'crosshair'
): string {
  const dataUrl = `data:image/svg+xml,${encodeURIComponent(svg.trim())}`;
  return buildDrawingCursor(dataUrl, hotspotX, hotspotY, fallback);
}
