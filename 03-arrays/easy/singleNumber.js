// Lc - https://leetcode.com/problems/single-number/

//!Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//!You must implement a solution with a linear runtime complexity and use only constant extra space.

//Brute force
function missingNumber(nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 1) {
      return nums[i];
    }
  }
}

console.log(missingNumber([4, 1, 2, 1, 2]));

//?approach
//1. Create a hash map to store the count of each number in the array.
//2. Iterate through the array and populate the hash map with the count of each number.
//3. Iterate through the hash map and return the number that has a count of 1.

//time complexity - O(n)  , space complexity - O(n).

// -----------------------------------------------

//Optimized approach

function singleNumber(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}

//?approach
//1. Initialize a variable `xor` to 0.
//2. Iterate through the array and perform XOR operation with each element.
//3. The result will be the single number since XOR of a number with itself is 0 and XOR with 0 is the number itself.
//time complexity - O(n)  , space complexity - O(1).
