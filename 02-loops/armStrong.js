function armStrong(n) {
  let sum = 0;
  let orgNumber = n;
  let digits = n.toString().length;

  while (n > 0) {
    let rem = n % 10;
    sum += Math.pow(rem, digits);
    n = Math.floor(n / 10);
  }
  return sum === orgNumber;
}

console.log(armStrong(153));

// approach - Intialse a sum variable
//            store the number in a temp variable
//            find the number of digits in the number
//            loop through the number
//            find the remainder of the number
//            add the remainder to the sum after raising it to the power of the number of digits(math.pow(rem,digits))
//            divide the number by 10 and store it in temp
