/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const combinations: number[][] = [];

  const remains = candidates.reduce((acc, n) => {
    if (candidates.find(c => c === (target - n))) {
      acc.set(n, target - n);
    }
    return acc;
  }, new Map<number, number>());

  candidates.forEach((n) => {
    if (remains.has(n)) {
      combinations.push([n, remains.get(n)]);
      remains.delete(remains.get(n));
    }

    const timedBy = target / n;
    const remainder = timedBy % n;

    if (remainder === 0) {
      combinations.push(
        Array.from<number>({ length: timedBy }).fill(n)
      );
    } else if (remains.has(remainder)) {
      combinations.push(
        Array.from<number>({ length: timedBy })
          .fill(n)
          .splice(n - 1, 1, remainder)
      );
    }
  });

  return combinations;
}
// @lc code=end
