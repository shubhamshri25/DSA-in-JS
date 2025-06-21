// LC - https://leetcode.com/problems/max-consecutive-ones/

//! Given a binary array nums, return the maximum number of consecutive 1's in the array.

function maxConsecutiveOnes(nums) {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
    } else {
      maxCount = Math.max(currentCount, maxCount);
      currentCount = 0;
    }
  }
  return Math.max(currentCount, maxCount);
}

console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1, 1, 1, 0, 1]));

//?approach
// 1. Initialize two variables: currentCount and maxCount to 0.
// 2. Loop through the array.
// 3. If the current element is 1, increment currentCount.
// 4. If the current element is 0, update maxCount with the maximum of currentCount and maxCount, then reset currentCount to 0.
// 5. After the loop, return the maximum of currentCount and maxCount to account for the case where the array ends with 1s.

// time complexity - O(n)
// space complexity - O(1) -
