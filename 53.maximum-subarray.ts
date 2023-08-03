/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function sum(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

function maxSubArray(nums: number[]): number {
  const allSums: number[] = [];
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      allSums.push(sum(nums.slice(i, j)));
    }
  }
  return (Math.max(...allSums));
}
// @lc code=end

const nums = [-1];
console.log(sum(nums));
const expected = 6;

console.log('Input: ', nums);
console.log('Output: ', maxSubArray(nums));
console.log('Expected: ', expected);