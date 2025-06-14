//! brute force (o(n^2)) solution

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, -4]));

//! optimized (o(n)) solution
function isSorted1(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted1([1, 2, 3, 4, 4]));
