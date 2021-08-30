// Find the longest word of a given string (If there are multiple longest words, put them into an array)

const string = "longest word in an array probably this one";

function longestWord(string) {
  const words = string.split(" ");
  let longest = 0;
  let winners = [];

  for (const word in words) {
    if (words[word].length > longest) {
      longest = words[word].length;
      winners = [words[word]];
    } else if (words[word].length === longest) {
      winners.push(words[word]);
    }
  }
  return winners.length == 1 ? winners[0] : winners;
}

console.log(longestWord(string));
