/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(heights: number[]): number {
  let maxWater = 0;
  let start = 0;
  let end = heights.length - 1;

  while (start < end) {
    let containerWidth = end - start;
    let containerHeight = Math.min(heights[start], heights[end]);
    let waterAmount = containerHeight * containerWidth;

    maxWater = Math.max(maxWater, waterAmount);
    
    if (heights[start] <= heights[end]) {
      start++;
    } else {
      end--;
    }
  }

  return maxWater;
}
// @lc code=end
