// this is the pattern  (for all pattern keep in mind i is row and j is space and in this case also consider space as k )

`
   *
  ***
 *****
*******
`;

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    // Adding spaces before the stars
    for (let j = 0; j < n - (i + 1); j++) {
      row += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}
pattern(5);
