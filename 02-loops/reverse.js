function reverse(n) {
  let reveresd = 0;
  while (n > 0) {
    let rem = n % 10;
    reveresd = rem + reveresd * 10;
    n = Math.floor(n / 10);
  }
  return reveresd;
}

console.log(reverse(1226));
