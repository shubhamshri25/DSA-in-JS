// LC - https://leetcode.com/problems/missing-number/

//!Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Brute force
function missingNumber(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
}

//?Approach
// 1. Sort the array in ascending order.
// 2. Loop through the array and check if the current index matches the value at that index.
// 3. If a mismatch is found, return the index as the missing number.
// 4. If no mismatch is found, return the length of the array as the missing number (which is n).

// time complexity - O(n log n) - due to sorting
// space complexity - O(1) -

// --------------------------------------------------------------------------

//Optimal approach(sum)

function missingNumber(nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((acc, num) => acc + num, 0);
  return totalSum - actualSum;
}

//?Approach
// 1. Calculate the expected sum of numbers from 0 to n using the formula n * (n + 1) / 2.
// 2. Calculate the actual sum of the numbers in the array using reduce.
// 3. The missing number is the difference between the expected sum and the actual sum.
// 4. Return the missing number.

// time complexity - O(n) - due to the reduce function
// space complexity - O(1) - no additional space used
