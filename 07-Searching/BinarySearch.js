//?Approach(only wortargets for sorted array)
// Set left = 0, right = nums.length - 1.
// While left <= right:
// Calculate middle = Math.floor((left + right) / 2).
// If nums[middle] === target, return middle.
// If target < nums[middle], discard the right half: right = middle - 1.
// Else, discard the left half: left = middle + 1.
// If the target is not found, return -1.

// Time Complexity: O(log n) – the array is halved every iteration
// Space Complexity: O(1)

let arr = [-1, 0, 3, 5, 9, 12];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) return middle;
    else if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 5));
