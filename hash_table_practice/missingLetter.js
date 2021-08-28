// Write a function that takes a string using all the letters of the alphabet except one and return the missing character
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const string = "the quick brown box jumps over the lazy dog";

function missingLetter(string) {
  let hashedString = {};
  for (let i = 0; i < string.length; i++) {
    if (!hashedString[string[i]]) {
      hashedString[string[i]] = true;
    }
  }

  for (let j = 0; j < alphabet.length; j++) {
    if (!hashedString[alphabet[j]]) {
      return alphabet[j];
    }
  }
  return "All letters accounted for";
}

console.log(missingLetter(string));
