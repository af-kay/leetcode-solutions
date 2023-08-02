/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function sum(args: number[]) {
  return args.reduce((a, b) => a + b);
}

function addBinary(
  aBinary: string,
  bBinary: string
): string {
  const numbers = [aBinary, bBinary].map((s) =>
    parseInt(s, 2)
  );

  return sum(numbers).toString(2);
}
// @lc code=end

console.log(addBinary('1010', '1011'));

function printWithReverse(binaryStr: string) {
  console.log(parseInt(binaryStr, 2), '<- OK');
  console.log(
    parseInt(binaryStr.split('').reverse().join(''), 2),
    '<- REVERSED'
  );
}

printWithReverse(
  '110111101100010011000101110110100000011101000101011000000000000000000000000000000000000000000000000'
);
printWithReverse(
  '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000'
);

// console.log(
// addBinary(
// '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
// '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'
// ),
// `\n${'110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000'} <- expected`
// );
