/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(str: string): number {
  const chars: string[] = [];
  let longest = 0;

  for (const char of str) {
    if (chars.includes(char)) {
      const charIndex = chars.indexOf(char);
      chars.splice(0, charIndex+1);
    }
    chars.push(char);

    longest = Math.max(longest, chars.length);
  }

  return longest;
};
// @lc code=end

