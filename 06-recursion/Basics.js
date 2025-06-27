// Recursion is a technique in which a function calls itself to solve a problem.

/* Two parts of a recursive function:

1. Base case: The condition under which the function stops calling itself.
2. Recursive case: The part of the function where it calls itself with a modified argument.
*/

// print n to 1
function printNum(n) {
  if (n < 0) return;
  console.log(n);
  printNum(n - 1);
}
printNum(5);

// Print sum
function printSum(n) {
  if (n === 0) return 0;
  return n + printSum(n - 1);
}
console.log(printSum(5));

// Print factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
