// Lc link : https://leetcode.com/problems/move-zeroes/

//!Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//! Note that you must do this in-place without making a copy of the array.

function moveZeroes(nums) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  // Fill the remaining positions with zeroes
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
}

//? Approach:
// 1. Initialize a pointer `x` to track the position of the next non-zero element.
// 2. Iterate through the array.
// 3. If the current element is non-zero, place it at the position `x` and increment `x`.
// 4. After the first loop, fill the remaining positions in the array with zeroes starting from `x`.
// 5. This ensures that all non-zero elements are moved to the front and all zeroes are at the end.

// Time Complexity: O(n) , Space Complexity: O(1)

// another approach using array assign method

function moveZeroes(nums) {
  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastNonZero], nums[i]] = [nums[i], nums[lastNonZero]];
      lastNonZero++;
    }
  }
}

//? This approach uses destructuring assignment to swap elements in place, which is a more concise way to achieve the same result.