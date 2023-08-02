/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  return s.trim().split(' ').reverse()[0].length;
}
// @lc code=end
