/*
 * @lc app=leetcode id=10 lang=typescript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
function isSpecial(char: string) {
  return ['.', '*'].includes(char);
}

function hasNextChar(chars: string[], index: number) {
  return chars.length - 1 > index;
}

function isMatch(str: string, pattern: string): boolean {
  const patternChars = pattern.split('');

  for (let i = 0; i < patternChars.length; ) {
    const char = patternChars[i];

    if (isSpecial(char)) {
      if (
        hasNextChar(patternChars, i) &&
        char === '.' &&
        patternChars[i + 1] === '*'
      ) {
        patternChars.splice(i, 2, ...'[a-z]'.split(''));
        i += 4;
        continue;
      }

      if (char === '.') {
        patternChars.splice(i, 2, ...'(.)'.split(''));
        i += 2;
        continue;
      }

      if (char === '*') {
        const prevChar = patternChars[i - 1];

        patternChars.splice(i, 2, ...`${prevChar}\{0,\}`.split(''));
        i += 2;
        continue;
      }
    }

    i++;
  }

  const newPattern = patternChars.join('');

  console.log(str, newPattern);
  return new RegExp(newPattern).test(str);
}
// @lc code=end

console.log('isMatch1', isMatch('aa', 'a*'));
console.log('isMatch2', isMatch('ab', '.*'));
