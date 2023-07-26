var i = 10;
const arr = [];

while (i--) {
  arr.push(function () {
    return i + i;
  });
}

console.log(arr[0](), arr[1]());
