// same as before just need to keep the toggle variable as global variable
`
1
01
010
1010
`;

function pattern(n) {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += toggle;
      toggle = toggle == 1 ? 0 : 1;
    }
    console.log(row);
  }
}

pattern(6);
