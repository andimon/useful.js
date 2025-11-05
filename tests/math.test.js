// utils.test.js
import { multiply, isEven } from '../useful.js'; // ESM import syntax

describe('Utility Functions', () => {
  // Test case for the multiply function
  test('should multiply two positive numbers correctly', () => {
    // Arrange (optional setup)
    const num1 = 5;
    const num2 = 4;
    
    // Act (function execution)
    const result = multiply(num1, num2);
    
    // Assert (checking the result)
    expect(result).toBe(20);
  });

  // Test case for the isEven function
  test('should return true for an even number', () => {
    expect(isEven(10)).toBe(true);
  });
  
  test('should return false for an odd number', () => {
    expect(isEven(7)).toBe(false);
  });
});