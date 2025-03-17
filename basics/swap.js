let a = 100;
let b = 5;
let c;

//! 1st method using extra variable
// c = a;
// a = b;
// b = c;

//! 2nd method destructuring
// [a, b] = [b, a];

//! 3rd method using + and -
// a = a + b;
// b = a - b;
// a = a - b;

//! 4th Using Multiplication & Division (Only Works if Numbers Are Non-Zero)
// a = a * b;
// b = a / b;
// a = a / b;

console.log("value of a is :", a, "value of b is :", b);
