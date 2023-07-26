/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
function findMin(nums: number[]): number {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i >= 1 && nums[i - 1] > nums[i]) {
      return nums[i];
    }
  }
  return nums[0];
}
// @lc code=end

console.log(findMin([3, 4, 5, 1, 2]));
