//?Approach
// Start from the first element of the array.
// Compare the current element with the target value.
// If a match is found, return the index.
// If the loop ends without finding the target, return -1.

// Time Complexity: O(n) 
// Space Complexity: O(1)

let arr = [4, 5, 1, 3, 9];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

let result = linearSearch(arr, 3);
console.log(result);
