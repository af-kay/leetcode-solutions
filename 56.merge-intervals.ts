/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i = 0; i < intervals.length; ) {
    const nextInterval = intervals[i + 1];
    if (!nextInterval) {
      break;
    }

    if (intervals[i][1] >= nextInterval[0]) {
      intervals[i][1] = Math.max(nextInterval[1], intervals[i][1]);
      intervals[i][0] = Math.min(nextInterval[0], intervals[i][0]);
      intervals.splice(i + 1, 1);
    } else {
      i++;
    }
  }

  return intervals;
}
// @lc code=end

const input = [[1,3],[2,6],[8,10],[15,18]];
const expected = [[1,6],[8,10],[15,18]];
console.log('Input: ', input);
console.log('Output: ', merge(input));
console.log('Expected: ', expected);
