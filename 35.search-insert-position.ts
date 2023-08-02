/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(
  nums: number[],
  target: number
): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }

  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  return 0;
}
// @lc code=end
