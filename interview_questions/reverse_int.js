function reverseInt(int) {
    return parseInt(int.toString().split('').reverse().join(''))
}

//Expects 522
console.log(reverseInt(225))