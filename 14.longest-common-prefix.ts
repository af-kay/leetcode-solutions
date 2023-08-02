/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(words: string[]): string {
  let prefixLength = 0;
  const shortestWord: string = words.reduce((acc, word) => {
    return word.length < acc.length ? word : acc;
  }, words[0]);

  while (
    prefixLength + 1 <= shortestWord.length &&
    words.every((word) =>
      word.startsWith(
        shortestWord.substring(0, prefixLength + 1)
      )
    )
  ) {
    prefixLength++;
  }

  return shortestWord.substring(0, prefixLength);
}
// @lc code=end
