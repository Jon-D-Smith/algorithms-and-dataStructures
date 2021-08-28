// Write a function that accepts and array of strings and returns the first duplicate value

const array = ["a", "b", "c", "d", "c", "e", "f"];
const array1 = ["a", "b", "c", "d", "D", "e", "f"];
const array2 = ["a", "b", "c", "d", "e", "e", "f"];

function firstDuplicate(array) {
  let hashedTable = {};

  for (let i = 0; i < array.length; i++) {
    if (!hashedTable[array[i]]) {
      hashedTable[array[i]] = true;
    } else {
      return array[i];
    }
  }
  return `no duplicates found`;
}

console.log(firstDuplicate(array));
console.log(firstDuplicate(array1));
console.log(firstDuplicate(array2));
