/*
 * @lc app=leetcode id=151 lang=typescript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
function reverseWords(s: string): string {
  return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
}
// @lc code=end
