// Create a function that returns the first non repeated character in a string using a hash table

const string = "minimum";

function nonRepeater(string) {
  let hashedString = {};
  for (let i = 0; i < string.length; i++) {
    if (!hashedString[string[i]]) {
      hashedString[string[i]] = 1;
    } else {
      hashedString[string[i]]++;
    }
  }

  for (const value of string) {
    if (hashedString[value] == 1) {
      return value;
    }
  }
  return "all letters are repeated";
}

console.log(nonRepeater(string));
