// Get the product of every combination of two numbers in an array

const array = [1, 2, 3, 4, 5];

function twoNumberProducts(array) {
  let productArray = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      productArray.push(array[i] * array[j]);
    }
  }
  return productArray;
}

console.log(twoNumberProducts(array));
