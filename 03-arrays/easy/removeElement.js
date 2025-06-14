//! Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

//! Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

//! Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
//! Return k.

function removeElement(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[x] = arr[i];
      x++;
    }
  }
  return x;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

//? Approach:
//? 1. Initialize a variable `x` to 0, which will track the index of the last element that is not equal to `val`.
//? 2. Loop through the array `arr` using a for loop.
//? 3. Inside the loop, check if the current element `arr[i]` is not equal to `val`.
//? 4. If it is not equal, assign the current element to `arr[x]` and increment `x`.
//? 5. After the loop, return `x`, which represents the count of elements that are not equal to `val`.

// Time Complexity: O(n),
// Space Complexity: O(1)
