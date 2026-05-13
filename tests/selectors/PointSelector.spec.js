import { PointSelector } from '../../src/selectors';

describe('PointSelector', () => {
  const createPoint = (options = {}) => ({
    x: 10,
    y: 10,
    ...options
  });

  describe('TYPE', () => {
    it('should be a defined string', () => {
      expect(typeof PointSelector.TYPE).toBe('string');
    });
  });

  describe('intersects', () => {
    it('should return true when point matches geometry', () => {
      const point = { x: 10, y: 10 };
      const geometry = createPoint();
      expect(PointSelector.intersects(point, geometry)).toBe(true);
    });

    it('should return false when point does not match geometry', () => {
      const point = { x: 0, y: 0 };
      const geometry = createPoint();
      expect(PointSelector.intersects(point, geometry)).toBe(false);
    });

    it('should handle edge cases', () => {
      const geometry = createPoint();
      const container = { width: 100, height: 100 };

      // Default margin allows a few percentage points off the exact hit (see PointSelector MARGIN)
      expect(PointSelector.intersects({ x: 11, y: 10 }, geometry, container)).toBe(true);
      expect(PointSelector.intersects({ x: 10, y: 11 }, geometry, container)).toBe(true);
      expect(PointSelector.intersects({ x: 9, y: 10 }, geometry, container)).toBe(true);
      expect(PointSelector.intersects({ x: 10, y: 9 }, geometry, container)).toBe(true);
      expect(PointSelector.intersects({ x: 14, y: 10 }, geometry, container)).toBe(false);
      expect(PointSelector.intersects({ x: 10, y: 6 }, geometry, container)).toBe(false);
    });
  });

  describe('area', () => {
    it('should return 0 for point area', () => {
      const geometry = createPoint();
      expect(PointSelector.area(geometry)).toBe(0);
    });
  });
});
