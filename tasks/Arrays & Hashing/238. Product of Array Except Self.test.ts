import { productExceptSelf } from './238. Product of Array Except Self';
import { normalizeZeros } from '../../utils/normalizeZeros';

describe('Product of Array Except Self', () => {
  it.each([
    { input: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
    { input: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0] },
  ])('should return correct products for $input', ({ input, expected }) => {
    // Arrange
    const nums = input;

    // Act
    const result = productExceptSelf(nums);

    // Assert
    expect(result.map((x) => normalizeZeros(x))).toEqual(expected);
  });
});
