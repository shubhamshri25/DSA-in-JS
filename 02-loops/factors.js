//! Brute force approach
function factorsOfN(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

factorsOfN(36);

//! Optimized approach
function factorsOfNum(n) {
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
  console.log(n);
}

factorsOfNum(36);
