// Using a hash table, find if an array is a subset of your original array

const array1 = ["a", "b", "c", "d", "e", "f"];
const array2 = ["b", "d", "f"];
const array3 = ["b", "d", "f", "h"];

//Original function without using a hash table
function isSubset(array1, array2) {
  let largerArray;
  let smallerArray;

  if (array1.length > array2.length) {
    largerArray = array1;
    smallerArray = array2;
  } else {
    largerArray = array2;
    smallerArray = array1;
  }
  for (let i = 0; i < smallerArray.length; i++) {
    let foundMatch = false;
    for (let j = 0; j < largerArray.length; j++) {
      if (smallerArray[i] === largerArray[j]) {
        foundMatch = true;
        break;
      }
    }
    if (foundMatch === false) {
      return false;
    }
  }
  return true;
}

function isSubsetHash(array1, array2) {
  let largerArray;
  let smallerArray;
  let hashTable = {};

  if (array1.length > array2.length) {
    largerArray = array1;
    smallerArray = array2;
  } else {
    largerArray = array2;
    smallerArray = array1;
  }

  for (const value of largerArray) {
    hashTable[value] = true;
  }

  for (const value of smallerArray) {
    if (!hashTable[value]) {
      return false;
    }
  }

  return true;
}

console.log(isSubset(array1, array2));
console.log(isSubset(array1, array3));
console.log(isSubsetHash(array1, array2));
console.log(isSubsetHash(array1, array3));
