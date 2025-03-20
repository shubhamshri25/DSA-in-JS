//! slightly optimized approach

function isPrimeNum(n) {
  let isPrime = true;

  if (n <= 1) {
    isPrime = false;
  }

  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime);
}

isPrimeNum(1); // tc - O(n/2)

//! more optimized approach

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(23)); // tc - O(sqrt(n))
