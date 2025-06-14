function secondLargest(arr) {
  let max = Infinity;
  let secondLargest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondLargest = max;
      max = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== max) {
      secondLargest = arr[i];
    }
  }
  return { secondLargest, max };
}

console.log(secondLargest([1, 5, 6, 12, 56, 34, 781, 456]));

// approach - Initialize max and secondLargest with very small values (Infinity).
//            Iterate through the array.
//            If current element is greater than max, update secondLargest to max and max to current element.
//            Else if current element is greater than secondLargest and not equal to max, update secondLargest.
//            Return both max and secondLargest.
