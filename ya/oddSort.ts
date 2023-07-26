// :void in example (but who cares?)
function oddSort(array: number[]): number[] {
  const evensMap = array.reduce((map, num, index) => {
    if (num % 2 === 0) {
      map.set(index, num);
    }
    return map;
  }, new Map<number, number>());

  array = array.filter((it) => it % 2 !== 0);

  array.sort();

  Array.from(evensMap)
    .sort((a, b) => a[0] - b[0])
    .forEach(([index, num]) => {
      array.splice(index, 0, num);
    });

  return array;
}

console.log(oddSort([2, 3, 4, 1, 6, 9, 8, 5]));
