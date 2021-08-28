// Using a hash table, find the intersecting elements of two arrays

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [1, 3, 6, 9, 12];

function intersection(array1, array2) {
  let hashedTable = {};
  let intersections = [];
  for (const value of array1) {
    hashedTable[value] = true;
  }
  for (const value of array2) {
    if (hashedTable[value]) {
      intersections.push(value);
    }
  }
  return intersections;
}

console.log(intersection(array1, array2));
