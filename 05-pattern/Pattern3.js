// this is the pattern  (for all pattern keep in mind i is row and j is column)

` 1
 12
 123
 1234`;

let n = 3;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += j + 1;
  }
  console.log(row);
}
