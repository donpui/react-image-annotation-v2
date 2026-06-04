import { PolygonSelector } from '../../src/selectors';

// Minimal mouse event mock matching what getCoordPercentage expects
const makeEvent = (clientX, clientY) => ({
  currentTarget: {
    getBoundingClientRect: () => ({ x: 0, y: 0, width: 100, height: 100 }),
  },
  clientX,
  clientY,
  targetTouches: undefined,
});

const pt = (x, y) => ({ x, y });

describe('PolygonSelector', () => {
  describe('TYPE', () => {
    it('should be the string POLYGON', () => {
      expect(PolygonSelector.TYPE).toBe('POLYGON');
    });
  });

  describe('MAX_POINTS', () => {
    it('should be a number >= 3', () => {
      expect(typeof PolygonSelector.MAX_POINTS).toBe('number');
      expect(PolygonSelector.MAX_POINTS).toBeGreaterThanOrEqual(3);
    });
  });

  // ─── intersects ──────────────────────────────────────────────────────────────

  describe('intersects', () => {
    const square = {
      type: 'POLYGON',
      points: [pt(10, 10), pt(40, 10), pt(40, 40), pt(10, 40)],
    };

    it('returns true for a point inside the polygon', () => {
      expect(PolygonSelector.intersects(pt(25, 25), square)).toBe(true);
    });

    it('returns false for a point outside the polygon', () => {
      expect(PolygonSelector.intersects(pt(5, 5), square)).toBe(false);
      expect(PolygonSelector.intersects(pt(50, 50), square)).toBe(false);
    });

    it('returns false when geometry has no points', () => {
      expect(PolygonSelector.intersects(pt(25, 25), { type: 'POLYGON', points: [] })).toBe(false);
    });

    it('returns false when geometry has fewer than 3 points', () => {
      const twoPoints = { type: 'POLYGON', points: [pt(0, 0), pt(50, 0)] };
      expect(PolygonSelector.intersects(pt(25, 25), twoPoints)).toBe(false);
    });

    it('returns false when geometry is null', () => {
      expect(PolygonSelector.intersects(pt(25, 25), null)).toBe(false);
    });

    it('handles a concave polygon correctly', () => {
      // L-shaped polygon
      const concave = {
        type: 'POLYGON',
        points: [pt(0, 0), pt(40, 0), pt(40, 20), pt(20, 20), pt(20, 40), pt(0, 40)],
      };
      expect(PolygonSelector.intersects(pt(10, 10), concave)).toBe(true);   // inside L
      expect(PolygonSelector.intersects(pt(30, 30), concave)).toBe(false);  // hole in L
    });
  });

  // ─── area ────────────────────────────────────────────────────────────────────

  describe('area', () => {
    it('computes positive area for a counter-clockwise square', () => {
      const square = {
        type: 'POLYGON',
        points: [pt(0, 0), pt(10, 0), pt(10, 10), pt(0, 10)],
      };
      expect(PolygonSelector.area(square)).toBeCloseTo(100);
    });

    it('computes positive area regardless of winding order', () => {
      const cwSquare = {
        type: 'POLYGON',
        points: [pt(0, 0), pt(0, 10), pt(10, 10), pt(10, 0)],
      };
      expect(PolygonSelector.area(cwSquare)).toBeCloseTo(100);
    });

    it('returns 0 for fewer than 3 points', () => {
      expect(PolygonSelector.area({ type: 'POLYGON', points: [pt(0, 0), pt(10, 0)] })).toBe(0);
    });

    it('returns 0 for null geometry', () => {
      expect(PolygonSelector.area(null)).toBe(0);
    });

    it('returns 0 for geometry without points', () => {
      expect(PolygonSelector.area({ type: 'POLYGON' })).toBe(0);
    });
  });

  // ─── methods.onClick ─────────────────────────────────────────────────────────

  describe('methods.onClick', () => {
    it('starts COLLECTING_POINTS on the first click', () => {
      const result = PolygonSelector.methods.onClick({}, makeEvent(20, 30));
      expect(result.selection.mode).toBe('COLLECTING_POINTS');
      expect(result.geometry.type).toBe('POLYGON');
      expect(result.geometry.points).toHaveLength(1);
      expect(result.geometry.points[0]).toMatchObject({ x: 20, y: 30 });
    });

    it('adds a point on each subsequent click', () => {
      const after1 = PolygonSelector.methods.onClick({}, makeEvent(10, 10));
      const after2 = PolygonSelector.methods.onClick(after1, makeEvent(50, 10));
      const after3 = PolygonSelector.methods.onClick(after2, makeEvent(30, 50));
      expect(after3.geometry.points).toHaveLength(3);
    });

    it('closes the polygon when clicking near the first point (>= 3 points)', () => {
      // Build up 3 points first
      let ann = PolygonSelector.methods.onClick({}, makeEvent(10, 10));
      ann = PolygonSelector.methods.onClick(ann, makeEvent(50, 10));
      ann = PolygonSelector.methods.onClick(ann, makeEvent(30, 50));
      expect(ann.selection.mode).toBe('COLLECTING_POINTS');

      // Click very close to first point (10, 10) — within CLOSE_THRESHOLD_PCT
      const closed = PolygonSelector.methods.onClick(ann, makeEvent(11, 11));
      expect(closed.selection.mode).toBe('EDITING');
      expect(closed.selection.showEditor).toBe(true);
    });

    it('does NOT close with only 2 points even when clicking near first', () => {
      let ann = PolygonSelector.methods.onClick({}, makeEvent(10, 10));
      ann = PolygonSelector.methods.onClick(ann, makeEvent(50, 10));
      const result = PolygonSelector.methods.onClick(ann, makeEvent(11, 11));
      // Still collecting — less than 3 points so closure is blocked
      expect(result.selection.mode).toBe('COLLECTING_POINTS');
    });

    it('closes on double-click (same position within time threshold)', () => {
      // Build 3 points, forcing lastClickTime into the past so each click is
      // treated as a fresh single-click (not a double-click).
      const old = () => Date.now() - 1000;
      let ann = PolygonSelector.methods.onClick({}, makeEvent(10, 10));
      ann = { ...ann, selection: { ...ann.selection, lastClickTime: old() } };
      ann = PolygonSelector.methods.onClick(ann, makeEvent(50, 10));
      ann = { ...ann, selection: { ...ann.selection, lastClickTime: old() } };
      ann = PolygonSelector.methods.onClick(ann, makeEvent(30, 50));
      ann = { ...ann, selection: { ...ann.selection, lastClickTime: old() } };

      // First click of the double-click: adds a 4th point at a new position
      const firstClick = PolygonSelector.methods.onClick(ann, makeEvent(70, 70));
      expect(firstClick.selection.mode).toBe('COLLECTING_POINTS');
      expect(firstClick.geometry.points).toHaveLength(4);

      // Second click of the double-click: same position, lastClickTime is "now"
      const secondClick = PolygonSelector.methods.onClick(
        { ...firstClick, selection: { ...firstClick.selection, lastClickTime: Date.now() } },
        makeEvent(70, 70)
      );
      expect(secondClick.selection.mode).toBe('EDITING');
      expect(secondClick.selection.showEditor).toBe(true);
    });

    it('computes bounding box on close so AnnotationContentAnchor can position content', () => {
      let ann = PolygonSelector.methods.onClick({}, makeEvent(10, 20));
      ann = PolygonSelector.methods.onClick(ann, makeEvent(60, 20));
      ann = PolygonSelector.methods.onClick(ann, makeEvent(35, 70));
      const closed = PolygonSelector.methods.onClick(ann, makeEvent(11, 21)); // near first point

      expect(closed.geometry.x).toBeCloseTo(10);
      expect(closed.geometry.y).toBeCloseTo(20);
      expect(closed.geometry.width).toBeCloseTo(50);
      expect(closed.geometry.height).toBeCloseTo(50);
    });

    it('auto-closes when MAX_POINTS is reached (if >= 3 points)', () => {
      // Fill up MAX_POINTS points, then one extra click triggers auto-close.
      // Space points far apart and set lastClickTime=0 after each to avoid
      // double-click detection in this tight loop.
      let ann = {};
      for (let i = 0; i <= PolygonSelector.MAX_POINTS; i++) {
        ann = PolygonSelector.methods.onClick(
          ann,
          makeEvent(i * (90 / PolygonSelector.MAX_POINTS), i % 2 === 0 ? 10 : 90)
        );
        if (ann.selection && ann.selection.mode === 'COLLECTING_POINTS') {
          ann = { ...ann, selection: { ...ann.selection, lastClickTime: 0 } };
        }
      }
      expect(ann.selection.mode).toBe('EDITING');
      expect(ann.selection.showEditor).toBe(true);
    });

    it('preserves existing geometry points array on each click', () => {
      let ann = PolygonSelector.methods.onClick({}, makeEvent(10, 10));
      ann = PolygonSelector.methods.onClick(ann, makeEvent(20, 10));
      expect(ann.geometry.points[0]).toMatchObject({ x: 10, y: 10 });
      expect(ann.geometry.points[1]).toMatchObject({ x: 20, y: 10 });
    });
  });

  // ─── methods.onMouseMove ──────────────────────────────────────────────────────

  describe('methods.onMouseMove', () => {
    it('updates cursorX/cursorY while COLLECTING_POINTS', () => {
      let ann = PolygonSelector.methods.onClick({}, makeEvent(10, 10));
      const moved = PolygonSelector.methods.onMouseMove(ann, makeEvent(40, 60));
      expect(moved.selection.cursorX).toBeCloseTo(40);
      expect(moved.selection.cursorY).toBeCloseTo(60);
    });

    it('does not update cursor when not in COLLECTING_POINTS mode', () => {
      const ann = { selection: { mode: 'EDITING' }, geometry: { type: 'POLYGON', points: [] } };
      const result = PolygonSelector.methods.onMouseMove(ann, makeEvent(40, 60));
      expect(result.selection.cursorX).toBeUndefined();
    });

    it('is a no-op when there is no active selection', () => {
      const result = PolygonSelector.methods.onMouseMove({}, makeEvent(40, 60));
      expect(result).toEqual({});
    });
  });
});
