/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
const pairs = ['()', '{}', '[]'];

function isValid(s: string): boolean {
  let oldString = '';
  let newString = s;

  while (newString !== oldString) {
    oldString = newString;
    newString = pairs.reduce(
      (str, pair) => str.replaceAll(pair, ''),
      oldString
    );
  }

  return newString.length === 0;
}
// @lc code=end

console.log(isValid('(]'));
