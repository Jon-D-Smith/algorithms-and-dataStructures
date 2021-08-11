// Reversing a string without the reverse Method
function reverseString(str) {
    const strArr = str.split('')
    const newArr = []

    for(let i = 0; i < str.length; i++){
        newArr.unshift(strArr[i])
    }
    return newArr.join('')

}

//Reversing a string with the reverse method
function reverseStringB (str) {
    const strArr = str.split('')
    return strArr.reverse().join('')
}

// Testing function - Expects olleh
const output = reverseString('hello')
console.log(output)

const outputB = reverseStringB('hello')
console.log(outputB)