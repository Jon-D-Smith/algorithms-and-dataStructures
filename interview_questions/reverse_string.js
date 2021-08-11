
function reverseString(str) {
    const strArr = str.split('')
    const newArr = []

    for(let i = 0; i < str.length; i++){
        newArr.unshift(strArr[i])
    }
    return newArr.join('')

}

// Testing function - Expects olleh
const output = reverseString('hello')
console.log(output)