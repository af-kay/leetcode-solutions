/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let pivot = 0;
  for (let i = nums.length - 1; i >= 1; i++) {
    if (nums[i] < nums[i - 1]) {
      pivot = nums.length - 1 - i;
      break;
    }
  }

  let offset = nums.length - 1 - pivot;

  if (target < nums[0]) {
    // target in pivoted part
    for (let i = offset; i < nums.length; i++) {
      if (nums[i] === target) {
        return i;
      }
    }
  } else {
    for (let i = Math.ceil(offset / 2); true; i++) {
      
    }
    // target in actual part
  }
};
// @lc code=end

