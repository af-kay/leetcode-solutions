/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
const make012Array = () =>
  Array.from({ length: 3 }).map((_, index) => index);

const isValidSudokuLine = (line: string[]) => {
  const numbers = line.filter(Number);

  return new Set(numbers).size === numbers.length;
};

function isValidSudoku(lines: string[][]): boolean {
  if (!lines.every(isValidSudokuLine)) {
    return false;
  }

  if (
    !Array.from({ length: 9 }).every((_, i) =>
      isValidSudokuLine(lines.map((line) => line[i]))
    )
  ) {
    return false;
  }

  return make012Array().every((i) => {
    const rowStart = i * 3;

    return make012Array().every((j) => {
      const colStart = j * 3;

      const shallowBlock = lines
        .slice(rowStart, rowStart + 3)
        .flatMap((row) =>
          row.slice(colStart, colStart + 3)
        );

      return isValidSudokuLine(shallowBlock);
    });
  });
}
// @lc code=end

console.log(
  isValidSudoku([
    ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
    ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
    ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
    ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ])
);
