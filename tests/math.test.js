import { multiply, isEven } from '../useful.js';

describe('Utility Functions', () => {
  test('should multiply two positive numbers correctly', () => {
    const num1 = 5;
    const num2 = 4;
    const result = multiply(num1, num2);
    expect(result).toBe(20);
  });

  test('should return true for an even number', () => {
    expect(isEven(10)).toBe(true);
  });

  test('should return false for an odd number', () => {
    expect(isEven(7)).toBe(false);
  });
});