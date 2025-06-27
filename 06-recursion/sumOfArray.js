//!Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n.

let arr = [1, 2, 3, 4, 5, 7];

function sum(n) {
  if (n === 0) return arr[0];
  return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1));

//? approach
// If n == 0, return arr[0].
// Otherwise, return arr[n] + sum(n - 1).