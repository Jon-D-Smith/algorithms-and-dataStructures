// Check if a string is a palindrome
function isPalindromeA(str) {
  return str == str.split("").reverse().join("");
}

console.log(isPalindromeA("racecar"));
