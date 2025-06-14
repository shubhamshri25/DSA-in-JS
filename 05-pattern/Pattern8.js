`
1
10
101
1010
`;

function pattern(n) {
  for (let i = 1; i < n; i++) {

    let row = "";
    let toggle = 1; // Start with 1 then toggle if needed

    for (let j = 0; j <= i; j++) {
      row += toggle;
      toggle = toggle === 1 ? 0 : 1;
    }
    console.log(row);
  }
}

pattern(5);
