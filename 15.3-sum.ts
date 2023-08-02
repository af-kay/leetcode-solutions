/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
const summarize = (...nums: Array<number>): number =>
  nums.reduce((acc, num) => acc + num);

function threeSum(nums: number[]): number[][] {
  const zeroSumCombos: number[][] = [];

  const hasNumbersAlready = (arr: number[]) =>
    zeroSumCombos.some(
      (combo) =>
        arr.length === combo.length &&
        combo.every((item, index) => arr[index] === item)
    );

  nums.forEach((first, fi) => {
    nums.slice(fi + 1).forEach((second, si) => {
      nums.slice(si + 1).forEach((third) => {
        const sum = Array.from(
          new Set([first, second, third])
        );

        if (
          sum.length === 3 &&
          summarize(...sum) === 0 &&
          !hasNumbersAlready(sum.sort())
        ) {
          zeroSumCombos.push(sum);
        }
      });
    });
  });

  return zeroSumCombos;
}
// @lc code=end
