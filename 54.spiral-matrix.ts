/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
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

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const spiral: number[] = [];

  while (matrix.length && matrix[0].length) {
    spiral.push(...matrix.shift() ?? []);
    console.log(spiral);
    rotate(matrix);
  }

  return spiral;
}
// @lc code=end

const input = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log('Input: ', input);
console.log('Output: ', spiralOrder(input));