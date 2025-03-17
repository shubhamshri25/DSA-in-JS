//? A strong number is a number that is equal to the sum of the factorials of its digits.
//? For example 145 is a strong number, because 1! + 4! + 5! = 145.

function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

function strong(n) {
  let sum = 0;
  let num = n;
  while (n > 0) {
    sum += factorial(n % 10);
    n = Math.floor(n / 10);
  }
  return sum === num;
}

console.log(strong(534));
