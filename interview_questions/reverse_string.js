// Reversing a string without the reverse Method
function reverseString(str) {
    const newArr = []

    for(let i = 0; i < str.length; i++){
        newArr.unshift(str[i])
    }
    return newArr.join('')

}

//Reversing a string with the reverse method
function reverseStringB (str) {
    return str.split('').reverse().join('')
}

// For of loop
let reversed = '';
function reverseStringC(str) {
    for(let char of str){
        reversed = char + reversed
    }
    return reversed
}

// for each loop
let revStr = '';

function reverseStringD(str) {
    str.split('').forEach(letter => {
        revStr = letter + revStr
    })
    return revStr
}

// Testing function - Expects olleh
const output = reverseString('hello')
console.log(output)

const outputB = reverseStringB('hello')
console.log(outputB)

const outputC = reverseStringC('hello')
console.log(outputC)

const outputD = reverseStringD('hello')
console.log(outputD)