function palindromeStr(str) {
  function reverseStr(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

  let reversed = reverseStr(str);
  return str === reversed;
}

console.log(palindromeStr("abc")); // Output: false

function palidrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(palidrome("abba")); // Output: true
