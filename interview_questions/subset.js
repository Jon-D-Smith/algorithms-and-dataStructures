// Using a hash table, find if an array is a subset of your original array

const array1 = ["a", "b", "c", "d", "e", "f"];
const array2 = ["b", "d", "f"];
const array3 = ["b", "d", "f", "h"];

//Original function without using a hash table
function isSubset(array1, array2) {
  let largerArray;
  let smallerArray;

  if (array1 > array2) {
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
