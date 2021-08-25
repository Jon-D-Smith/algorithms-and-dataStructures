// Reverse an integer, but maintain the position of any mathmatical signs

function reverseInt(int) {
  return parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);
}

//Expects 522
console.log(reverseInt(225));
//expects -522
console.log(reverseInt(-225));
