/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let jumpsLeft = nums[0];
  let i = 1;

  while (jumpsLeft-- && i < nums.length) {
    jumpsLeft = Math.max(jumpsLeft, nums[i]);
    i++;
  }

  return i === nums.length;
}
// @lc code=end

console.log(canJump([2,3,1,1,4]));