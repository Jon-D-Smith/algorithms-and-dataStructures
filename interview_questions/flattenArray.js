const array = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

function flattenArray(array) {
  const flatArray = [];
  array.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      flatArray.push(element[i]);
    }
  });
  return flatArray;
}

console.log(flattenArray(array));
