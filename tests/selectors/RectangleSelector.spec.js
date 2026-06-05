import { RectangleSelector } from '../../src/selectors';

describe('RectangleSelector', () => {
  const createRect = (options = {}) => ({
    x: 10,
    y: 10,
    width: 20,
    height: 10,
    ...options
  });

  describe('TYPE', () => {
    it('should be a defined string', () => {
      expect(typeof RectangleSelector.TYPE).toBe('string');
    });
  });

  describe('intersects', () => {
    it('should return true when point is inside geometry', () => {
      const point = { x: 15, y: 15 };
      const geometry = createRect();
      expect(RectangleSelector.intersects(point, geometry)).toBe(true);
    });

    it('should return false when point is outside geometry', () => {
      const point = { x: 0, y: 0 };
      const geometry = createRect();
      expect(RectangleSelector.intersects(point, geometry)).toBe(false);
    });

    it('should handle edge cases', () => {
      const geometry = createRect();
      
      // Test points on edges
      expect(RectangleSelector.intersects({ x: 10, y: 10 }, geometry)).toBe(true); // Top-left corner
      expect(RectangleSelector.intersects({ x: 30, y: 10 }, geometry)).toBe(true); // Top-right corner
      expect(RectangleSelector.intersects({ x: 10, y: 20 }, geometry)).toBe(true); // Bottom-left corner
      expect(RectangleSelector.intersects({ x: 30, y: 20 }, geometry)).toBe(true); // Bottom-right corner
    });
  });

  describe('area', () => {
    it('should calculate area correctly', () => {
      const geometry = createRect({ width: 10, height: 10 });
      expect(RectangleSelector.area(geometry)).toBe(100);
    });

    it('should return 0 for invalid dimensions', () => {
      expect(RectangleSelector.area(createRect({ width: 0, height: 10 }))).toBe(0);
      expect(RectangleSelector.area(createRect({ width: 10, height: 0 }))).toBe(0);
      expect(RectangleSelector.area(createRect({ width: -10, height: 10 }))).toBe(0);
    });
  });

  describe('methods', () => {
    it('should be defined', () => {
      expect(RectangleSelector.methods).toBeDefined();
      expect(typeof RectangleSelector.methods).toBe('object');
    });
  });
});
