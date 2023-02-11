/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function makeRomanThousands(thousands: number) {
  return "M".repeat(thousands);
}
function makeRomanHundreds(hundreds: number) {
  if (!hundreds) {
    return "";
  }

  if (hundreds < 4) {
    return "C".repeat(hundreds);
  }
  if (hundreds === 4) {
    return "CD";
  }
  if (hundreds === 9) {
    return "CM";
  }
  return String("D" + "C".repeat(hundreds - 5));
}
function makeRomanTens(tens: number) {
  if (!tens) {
    return "";
  }

  if (tens < 4) {
    return "X".repeat(tens);
  }
  if (tens === 4) {
    return "XL";
  }
  if (tens === 9) {
    return "XC";
  }
  return String("L" + "X".repeat(tens - 5));
}
function makeRomanOnes(ones: number) {
  if (!ones) {
    return "";
  }

  if (ones < 4) {
    return "I".repeat(ones);
  }
  if (ones === 4) {
    return "IV";
  }
  if (ones === 9) {
    return "IX";
  }
  return String("V" + "I".repeat(ones - 5));
}

function intToRoman(num: number): string {
  // const thousands = Math.ceil(num / 1000);
  const ones = num % 10;
  let tens = (num % 100) - ones;
  let hundreds = (num % 1000) - ones - tens;
  const thousands = (
    (num % 10000) - hundreds - tens - ones
  ) / 1000;
  hundreds /= 100;
  tens /= 10;

  return (
    makeRomanThousands(thousands) +
    makeRomanHundreds(hundreds) +
    makeRomanTens(tens) +
    makeRomanOnes(ones)
  );
}

// @lc code=end

console.log(
  intToRoman(58)
);
