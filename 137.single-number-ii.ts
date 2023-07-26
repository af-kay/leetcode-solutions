/*
 * @lc app=leetcode id=137 lang=typescript
 *
 * [137] Single Number II
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  return nums.reduce((acc, n) => ~n);
};
// @lc code=end

