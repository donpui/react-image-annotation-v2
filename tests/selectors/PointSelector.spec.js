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
      
      // Test points near the target point
      expect(PointSelector.intersects({ x: 11, y: 10 }, geometry)).toBe(false); // Slightly right
      expect(PointSelector.intersects({ x: 10, y: 11 }, geometry)).toBe(false); // Slightly below
      expect(PointSelector.intersects({ x: 9, y: 10 }, geometry)).toBe(false); // Slightly left
      expect(PointSelector.intersects({ x: 10, y: 9 }, geometry)).toBe(false); // Slightly above
    });
  });

  describe('area', () => {
    it('should return 0 for point area', () => {
      const geometry = createPoint();
      expect(PointSelector.area(geometry)).toBe(0);
    });
  });
});
