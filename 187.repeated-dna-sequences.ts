/*
 * @lc app=leetcode id=187 lang=typescript
 *
 * [187] Repeated DNA Sequences
 */

// @lc code=start
function findRepeatedDnaSequences(s: string): string[] {
  if (s.length < 10) {
    return [];
  }

  const strMap = new Map<string, number>();

  for (let i = 0; i < s.length - 9; i++) {
    const str = s.slice(i, i + 10);

    const strCount = strMap.get(str) ?? 0;
    strMap.set(str, strCount +  1);
  }

  return Array.from(strMap).filter(([_, count]) => {                        
    return count > 1;
  }).map(([str, _]) => str);
};
// @lc code=end
