function zeroToEnd(arr) {
  let i = 0;
  let j = 0;

  while ((i < arr.length)) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap non-zero with zero
      j++;
    }
    i++;
  }
  return arr;
}

console.log(zeroToEnd([1, 1, 0, 2, 1, 6, 0, 2, 1]));

// approach - Use two pointers i and j.
//            i iterates through the array,
//            j keeps track of the position for the next non-zero element.
//            If a non-zero is found at i, swap it with element at j and increment j.
//            This pushes all zeros to the end while keeping non-zero order.
