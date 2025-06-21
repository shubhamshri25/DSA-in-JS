// LC link -https://leetcode.com/problems/merge-sorted-array/

//! You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

//! Merge nums1 and nums2 into a single array sorted in non-decreasing order.

//! The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// brutal force approach
function mergeBrute(nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[i - m];
  }
  nums1.sort((a, b) => a - b);
}

//?Approach:
// 1. Iterate through nums2 and append its elements to nums1.
// 2. Sort nums1 to ensure it is in non-decreasing order.

// Time Complexity: O((m+n)log(m+n)), Space Complexity: O(1)

// -----------------------------------------------------------------

//Two Pointer Approach
function mergeTwoPointer(nums1, m, nums2, n) {
  nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    // If p2 has reached the end of nums2 OR current num1Copy value is smaller
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
}

//?Approach:
// 1. Create a copy of the first m elements of nums1.
// 2. Use two pointers to iterate through nums1Copy and nums2.
// 3. Compare the elements pointed by the pointers and fill nums1 accordingly.
// 4. If one pointer reaches the end of its array, fill the rest of nums1 with the other array's elements.

// Time Complexity: O(m + n), Space Complexity: O(m)

// -----------------------------------------------------------------

// In-place Two Pointer Approach(optimal)

function mergeInPlace(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
}

//?Approach:
// 1. Start from the end of nums1 and nums2.
// 2. Compare the last elements of nums1 and nums2.
// 3. Place the larger element at the end of nums1 and move the pointer accordingly.
// 4. Continue until all elements from nums2 are placed in nums1.

// Time Complexity: O(m + n), Space Complexity: O(1)