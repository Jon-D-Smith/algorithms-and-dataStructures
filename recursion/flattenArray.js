// Write a recursive function that prints all the numbers
const array = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, [9, 10, 11, [12, 13, 14]]],
  [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
  33,
];

function flattenArray(array) {
  for (let value of array) {
    if (typeof value == "object") {
      flattenArray(value);
    } else {
      console.log(value);
    }
  }
}

flattenArray(array);

console.log(typeof array == "object");
