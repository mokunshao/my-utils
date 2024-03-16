import { shuffleArray } from '../src/shuffleArray';
const originalArray = [1, 2, 3, 4, 5];

describe('shuffleArray', () => {
  it('returns array with same length', () => {
    const shuffled = shuffleArray([...originalArray]);
    expect(shuffled.length).toBe(originalArray.length);
  });

  it('returns array with original elements', () => {
    const shuffled = shuffleArray([...originalArray]);
    originalArray.forEach((item) => expect(shuffled).toContain(item));
  });

  it('returns array with different order', () => {
    const shuffled = shuffleArray([...originalArray]);
    expect(shuffled).not.toEqual(originalArray);
  });
});
