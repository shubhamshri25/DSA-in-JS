let unit = Number(prompt("Enter the bill unit : "));

let amount = 0;
if (unit > 400) {
  amount += (unit - 400) * 13; // calculating amount of units more than 400
  unit = 400; // resetting the unit to 400
}
if (unit > 200 && unit <= 400) {
  amount += (unit - 200) * 8;
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6;
  unit = 100;
}

amount += unit * 4;

console.log("Total bill amount is :", amount);
