// Check if a string is a palindrome
function isPalindromeA(str) {
  return str == str.split("").reverse().join("");
}

console.log(isPalindromeA("racecar"));

// Another method for Palindrome checking
// This is a much faster method as it is N/2, and is noted in BigO as O(N)

function isPalindromeB(str) {
  let leftIndex = 0;
  let rightIndex = str.length - 1;

  while (leftIndex < str.length / 2) {
    if (str[leftIndex] !== str[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }
  return true;
}

console.log(isPalindromeB("deified"));
