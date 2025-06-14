function largest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largest([1, -2, 32, 24, 5]));

// approach - Assuming the first element of the array is the largest element.
//            Iterate through the array from the second element.
//            If the current element is greater than the max element, update the max element.
//            Return the max element.
