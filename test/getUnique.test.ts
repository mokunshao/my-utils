import { getUnique } from '../src/getUnique';

describe('getUnique', () => {
  test('should return an array with unique elements', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    const uniqueArr = getUnique(arr);
    expect(uniqueArr).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle empty array', () => {
    const arr: any[] = [];
    const uniqueArr = getUnique(arr);
    expect(uniqueArr).toEqual([]);
  });

  test('should handle array with only unique elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const uniqueArr = getUnique(arr);
    expect(uniqueArr).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle array with null and undefined', () => {
    const arr = [1, null, undefined, 2, null, 3, undefined, undefined];
    const uniqueArr = getUnique(arr);
    expect(uniqueArr).toEqual([1, null, undefined, 2, 3]);
  });
});
