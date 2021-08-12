//Original palindrome check method with built in array methods
function isPalindromeA(str) {
    return str == str.split('').reverse().join('')
}



console.log(isPalindromeA("racecar"))