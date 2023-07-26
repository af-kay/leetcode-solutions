function sum(a: number, b: number, c: number) {
  return a + b + c;
}

function curry(fn: (_a: number, _b: number, _c: number) => void) {
  return function curried(...args: number[]) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return function(...args2: number[]) {
      return curried.apply(this, args.concat(args2));
    }
  }
}

console.log(curry(sum)(1, 2, 3));
console.log(curry(sum)(1, 2)(3));
console.log(curry(sum)(1)(2)(3));
