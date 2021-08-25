// Capitalize the first letter of every word in an array

function capitalizeA(str) {
  const strArr = str.toLowerCase().split(" ");

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(" ");
}

function capitalizeB(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

//Cheeky solution I found from Brad Traversy -- NOT MINE --
function capitalizeC(str) {
  return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
}

console.log(capitalizeA("hello my friends"));
console.log(capitalizeB("i love javascript"));
console.log(capitalizeC("i love javascript"));
