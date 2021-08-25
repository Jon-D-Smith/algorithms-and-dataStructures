// Find the character in an array that is repeated the most times

function maxRepeating(str) {
  let currentCount = 0;
  let currentLeading = 0;
  let winner;

  for (let i = 0; i < str.length; i++) {
    currentCount = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] == str[i]) {
        currentCount++;
      }
    }
    if (currentCount > currentLeading) {
      currentLeading = currentCount;
      winner = str[i];
    }
  }
  return winner;
}

function maxRepeatingB(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

//expects a
console.log(maxRepeating("javascript"));
//expects o
console.log(maxRepeating("loop de loop"));
//expects a
console.log(maxRepeatingB("javascript"));
