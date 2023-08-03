/*
 * @lc app=leetcode id=47 lang=typescript
 *
 * [47] Permutations II
 */

// @lc code=start

function getAllCombinations(
  base: number[],
  rest: number[]
): number[][] {
  if (rest.length <= 1) {
    return [[...base, ...rest]];
  }
  if (rest.length === 2) {
    const [first, second] = rest;

    return [
      [...base, first, second],
      [...base, second, first],
    ];
  }

  return rest.flatMap((item, index) =>
    getAllCombinations(
      [...base, item],
      rest.filter((_, idx) => idx !== index)
    ).sort()
  );
}

function permute(nums: number[]): number[][] {
  return nums.flatMap((n, index) => {
    const rest = nums.filter((_, idx) => index !== idx);

    return getAllCombinations([n], rest);
  });
}

function permuteUnique(nums: number[]): number[][] {
  const allPermutes = permute(nums);

  return Array.from(new Set(allPermutes.map(String))).map(
    (s) => s.split(',').map(Number)
  );
}
// @lc code=end
