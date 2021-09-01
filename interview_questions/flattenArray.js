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

function flattenArrayB(array) {
  return array.reduce((a, b) => {
    return a.concat(b);
  });
}

console.log(flattenArray(array));
console.log(flattenArrayB(array));
