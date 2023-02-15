/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
const digitToLetters = (() => {
  const digitLetters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  return function (digit: number): string[] {
    return digitLetters[digit];
  };
})();

const letterCombinations = (digits: string) =>
  digits
    .split('')
    .map(Number)
    .map(digitToLetters)
    .reduce((texts, letters) => {
      if (!texts.length) {
        return letters;
      }

      return texts.flatMap(
        (text) => letters.map(
          (letter) => text + letter
        )
      );
    }, [] as string[]);
// @lc code=end
