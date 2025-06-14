//! Write a function that reverses a string. The input string is given as an array of characters s.
//! You must do this by modifying the input array in-place with O(1) extra memory.

function reveserInPlace(s) {
  let length = s.length;
  let halfLen = Math.floor(length / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[length - i - 1];
    s[length - i - 1] = temp;
  }
  console.log(s);
}

reveserInPlace(["h", "e", "l", "l", "o"]);

//?Appproach:
//? 1. Calculate the length of the array and half of it.
//? 2. Loop through the first half of the array.
//? 3. Swap the elements at the current index and its corresponding index from the end of the array.
//? 4. Use a temporary variable to hold one of the values during the swap.
//? 5. Continue until the middle of the array is reached.
//? 6. The input array is modified in-place, and the function does not return anything.

// Time Complexity: O(n)
// Space Complexity: O(1),