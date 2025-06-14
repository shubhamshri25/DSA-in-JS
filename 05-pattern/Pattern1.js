// this is the pattern  (for all pattern keep in mind i is row and j is column)
`
****
****
****
****
`;

let n = 3;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "*";
  }
  console.log(row);
}
