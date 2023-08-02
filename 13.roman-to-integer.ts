/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
type PopResult = [string, number];

function popOnes(s: string): PopResult {
  return [s, 0];
}
function popTens(s: string): PopResult {
  return [s, 0];
}
function popHundreds(s: string): PopResult {
  const chars = s.split('');
  let hundreds = 0;
  let index = 0;

  if ((index = s.indexOf('CM')) !== -1) {
    chars.splice(index, 2);
    hundreds = 9;
  } else if ((index = s.indexOf('CD')) !== -1) {
    chars.splice(index, 2);
    hundreds = 4;
  } else if ((index = s.indexOf('D')) !== -1) {
    chars.splice(index, 1);
    hundreds = 5;
    while (s[index] === 'C') {
      chars.splice(index, 1);
      hundreds++;
    }
  } else if ((index = s.indexOf('C')) !== -1) {
    chars.splice(index, 1);
    hundreds = 1;

    while (s[index] === 'C') {
      chars.splice(index, 1);
      hundreds++;
    }
  }

  return [chars.join(''), hundreds * 100];
}
function popThousands(s: string): PopResult {
  const chars = s.split('');
  let thousands = 0;

  for (
    let i = chars.indexOf('M');
    i !== -1;
    i = chars.indexOf('M'), thousands++
  ) {
    chars.splice(i, 1);
  }

  return [chars.join(''), thousands * 1000];
}

function updatePopResult(
  acc: PopResult,
  [s, num]: PopResult
): PopResult {
  return [s, acc[1] + num];
}

function romanToInt(s: string): number {
  const [_, sum] = [
    popOnes,
    popTens,
    popHundreds,
    popThousands,
  ].reduce((acc, fn) => updatePopResult(acc, fn(acc[0])), [
    s,
    0,
  ] as PopResult);

  return sum;
}
// @lc code=end
