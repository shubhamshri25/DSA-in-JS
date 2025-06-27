//! Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n

let arr = [1, 2, 4, 5, 6, 7, 9];

function oddSum(n) {
  let isOdd = arr[n] % 2 !== 0;
  if (n === 0) return isOdd ? arr[0] : 0;
  return (isOdd ? arr[n] : 0) + oddSum(n - 1);
}

console.log(oddSum(arr.length - 1));
