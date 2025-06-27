//!The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// interative approach
function Fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

console.log(Fibonacci(7));

//?Approach:
// 1. Base cases: If n is 0, return 0; if n is 1, return 1.
// 2. Initialize two variables, prev and curr, to represent 0 and 1 respectively.
// 3. Use a loop to calculate Fibonacci numbers from 2 to n:
//    - In each iteration, calculate the next Fibonacci number as the sum of prev and curr.
//    - Update prev to curr and curr to next.
// 4. After the loop, return curr, which contains F(n).

//Time Complexity: O(n) -
//Space Complexity: O(1) -

// ------------------------------------------------------------

// recursive approach
function FibonacciRecursive(n) {
  if (n <= 1) return n;
  return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2);
}

console.log(FibonacciRecursive(7));

//?Approach:
// 1. Base cases: If n is 0, return 0; if n is 1, return 1.
// 2. For n > 1, recursively call the function for n - 1 and n - 2.
// 3. Return the sum of the two recursive calls.
// 4. This will continue until the base cases are reached, at which point the recursion unwinds and the final result is computed.

//Time Complexity: O(2^n) 
//Space Complexity: O(n)