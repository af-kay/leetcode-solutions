/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let firstIndex: undefined | number;
  let lastIndex: undefined | number;

  for (let i = Math.ceil(nums.length / 2); true; lastIndex = i) {
    const v = nums[i];

    if (v === target) {
      firstIndex = i;
      break;      
    }

    if (v < target) {
      i = Math.ceil( v / 2);
    } else {
      i = Math.ceil( v * 1.5);
    }

    if (i === lastIndex) {
      break;
    }
  }
};
// @lc code=end

