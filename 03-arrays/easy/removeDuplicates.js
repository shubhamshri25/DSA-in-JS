//! Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

//!Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

//! Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
//!Return k.

function removeDuplicates(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

//? Approach:
//? 1. Initialize a variable `x` to 0, which will track the index of the last unique element found.
//? 2. Loop through the array `nums` using a for loop.
//? 3. Inside the loop, check if the current element `nums[i]` is greater than the last unique element `nums[x]`.
//? 4. If it is, increment `x` and assign the current element to `nums[x]`.
//? 5. After the loop, return `x + 1`, which represents the count of unique elements.

// Time Complexity: O(n),
// Space Complexity: O(1)
