/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function isPalindromic(s: string): boolean {
  // if (s.length === 0) return false; // Never happen in solution
  if (s.length === 1) return true;

  const halfCeiled = Math.ceil(s.length / 2);
  for (let shift = 0; shift <= halfCeiled; shift++) {
    if (s[shift] !== s[s.length - shift - 1]) {
      return false;
    }
  }
  return true;
}

function longestPalindrome(s: string): string {
  for (let currentLength = s.length; currentLength > 0; currentLength--) {
    const maxShift = s.length - currentLength;
    for (let shift = 0; shift <= maxShift; shift++) {
      const substring = s.substring(shift, shift+currentLength);

      if (isPalindromic(substring)) {
        return substring;
      }
    }
  }

  return '';
};
// @lc code=end

