// LC link - https://leetcode.com/problems/rotate-array/

//!Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Brute Force Approach(Will hit TLE for large inputs):
function rotate(nums, k) {
  k = k % nums.length; // Handle cases where k is larger than the length of the array

  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
}

//?approach
// 1. Calculate the effective rotations needed by taking k modulo the length of the array.
// 2. Use a loop to pop the last element of the array and unshift it to the front k times.
// 3. The array is modified in place, so no return value is needed.

// time complexity: O(n*k) where n is the length of the array and k is the number of rotations.
// space complexity: O(1) since we are modifying the array in place.

// -----------------------------------------------------------------------

// Optimized Approach:
function rotate(nums, k) {
  let n = nums.length;
  k = k % n;

  function reverse(arr, left, right) {
    while ((left, right)) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
}

//?approach
// 1. Calculate the effective rotations needed by taking k modulo the length of the array.
// 2. Reverse the entire array.
// 3. Reverse the first k elements.
// 4. Reverse the remaining n-k elements.
// 5. The array is modified in place, so no return value is needed.

// time complexity: O(n) , space complexity: O(1)
