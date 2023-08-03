/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(m: number[][]): void {
  let lci = m.length - 1;
  const lri = Math.ceil(m.length / 2);

  function rotateByIndexes([
    [aI, aJ],
    [bI, bJ],
    [cI, cJ],
    [dI, dJ],
  ]: number[][]) {
    const [a, b, c, d] = [
      m[aI][aJ],
      m[bI][bJ],
      m[cI][cJ],
      m[dI][dJ],
    ];
    m[bI][bJ] = a;
    m[cI][cJ] = b;
    m[dI][dJ] = c;
    m[aI][aJ] = d;
  }

  for (
    let ri = 0;
    lri % 2 === 0 ? ri <= lri : ri < lri;
    ri++, lci--
  ) {
    for (let ci = ri, j = 0; ci < lci; ci++, j++) {
      const indexes = [
        [ri, ci],
        [ci, lci],
        [lci, lci - j],
        [lci - j, ri],
      ];
      rotateByIndexes(indexes);
    }
  }
}
// @lc code=end

const matr = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
const expected = [
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
];
// const matr = [[1,2],[3,4]];
console.log('Input: ✏️', matr);
rotate(matr);
console.log('Output: 📄', matr);
console.log('Expected: ✅', expected);

const diff = matr.map((row, i) =>
  row.map((cell, j) => {
    if (expected[i][j] !== cell) {
      return '☠️';
    }
    return cell;
  })
);
console.log('Diff: ☠️', diff);
