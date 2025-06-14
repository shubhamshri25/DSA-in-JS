// this is the pattern  (for all pattern keep in mind i is row and j is column)

`
1234
123
12
1
`;

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row += j + 1;
  }
  console.log(row);
}
