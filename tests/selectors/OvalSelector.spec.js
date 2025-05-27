import { OvalSelector } from '../../src/selectors';

describe('OvalSelector', () => {
  const createOval = (options = {}) => ({
    x: 10,
    y: 10,
    width: 20,
    height: 10,
    ...options
  });

  describe('TYPE', () => {
    it('should be a defined string', () => {
      expect(typeof OvalSelector.TYPE).toBe('string');
    });
  });

  describe('intersects', () => {
    it('should return true when point is inside the oval', () => {
      const point = { x: 15, y: 15 };
      const geometry = createOval();
      expect(OvalSelector.intersects(point, geometry)).toBe(true);
    });

    it('should return false when point is outside the oval', () => {
      const point = { x: 0, y: 0 };
      const geometry = createOval();
      expect(OvalSelector.intersects(point, geometry)).toBe(false);
    });

    it('should handle edge cases', () => {
      const geometry = createOval();
      
      // Test points on the oval's axes
      expect(OvalSelector.intersects({ x: 30, y: 15 }, geometry)).toBe(true); // Center-right (geometry.x + width, center.y)
      expect(OvalSelector.intersects({ x: 20, y: 10 }, geometry)).toBe(true); // Top-center (center.x, geometry.y)
      expect(OvalSelector.intersects({ x: 20, y: 20 }, geometry)).toBe(true); // Bottom-center (center.x, geometry.y + height)
      expect(OvalSelector.intersects({ x: 10, y: 15 }, geometry)).toBe(true); // Center-left (geometry.x, center.y)
    });
  });

  describe('area', () => {
    it('should calculate area correctly', () => {
      const geometry = createOval({ width: 10, height: 10 });
      // Area of an oval = π * a * b, where a and b are the semi-major and semi-minor axes
      const expectedArea = Math.PI * 5 * 5; // width/2 * height/2
      expect(OvalSelector.area(geometry)).toBeCloseTo(expectedArea);
    });

    it('should return 0 for invalid dimensions', () => {
      expect(OvalSelector.area(createOval({ width: 0, height: 10 }))).toBe(0);
      expect(OvalSelector.area(createOval({ width: 10, height: 0 }))).toBe(0);
      expect(OvalSelector.area(createOval({ width: -10, height: 10 }))).toBe(0);
    });
  });
});
