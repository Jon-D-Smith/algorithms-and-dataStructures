// Find the longest word of a given string (If there are multiple longest words, it is okay to return one)

const string = "longest word in an array probably this one";

function longestWord(string) {
  const words = string.split(" ");
  let longest = 0;
  let winner;

  for (const word in words) {
    if (words[word].length > longest) {
      longest = words[word].length;
      winner = words[word];
    }
  }
  return winner;
}

console.log(longestWord(string));
