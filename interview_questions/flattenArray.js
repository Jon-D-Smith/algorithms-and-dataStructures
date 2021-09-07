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

// Using the spread operator
function flattenArrayC(array){
  return [].concat(...array)
}

console.log(flattenArray(array));
console.log(flattenArrayB(array));
console.log(flattenArrayC(array));
