function reverseStr(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStr("abc"));

function reverseStr1(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseStr1("hello")); // Output: "olleh"
