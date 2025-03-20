//! Brute force

function secondLargest(arr) {
  let max = arr[0];
  let secondLargest = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondLargest = max;
      max = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== max) {
      secondLargest = arr[i];
    }
  }
  return { secondLargest, max };
}

console.log(secondLargest([1, 5, 6, 12, 56, 34, 781, 456]));
