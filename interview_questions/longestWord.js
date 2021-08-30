// Find the longest word of a given string (If there are multiple longest words, it is okay to return one)

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

// function longestWordObject(string) {
//   const words = string.split(" ");
//   let obj = {};
//   for (const word in words) {
//     obj[words[word]] = words[word].length;
//   }
//   for (const word in obj) {
//     console.log(obj[word]);
//   }
//   //   console.log(obj);
// }

console.log(longestWord(string));
