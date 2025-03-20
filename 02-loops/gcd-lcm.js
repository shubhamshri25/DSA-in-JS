//! Brute force approach
function gcd(num1, num2) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

// console.log(gcd(50, 20));

//! Optimized approach
function gcd(num1, num2) {
  while (num1 > 0 && num2 > 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }

  if (num1 == 0) {
    return num2;
  }

  return num1;
}
console.log(gcd(50, 20));

function lcm(num1, num2) {
  return (num1 * num2) / gcd(num1, num2);
}

console.log(lcm(50, 20));
