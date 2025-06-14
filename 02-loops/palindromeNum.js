//! check if the number is a palindrome

function isPalindrome(num) {
  if (num < 0) return false;

  let numCopy = num;
  let rev = 0;

  while (num > 0) {
    rev = (rev * 10) + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev === numCopy;
}

console.log(isPalindrome(121));
