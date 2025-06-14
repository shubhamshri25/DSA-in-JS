// this is the pattern  (for all pattern keep in mind i is row and j is column)

`1
 22
 333
 4444`;

let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += i + 1;
  }
  console.log(row);
}
