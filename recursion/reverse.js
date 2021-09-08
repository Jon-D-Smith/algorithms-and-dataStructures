// Reverse a given string recursively

const string = "abcde"

function reverse(string, newStr=[], i=0){
    if(i == string.length){
        return string[i]
    }
    newStr[i] = string[string.length - (i+1)]
    reverse(string, newStr, i+=1)
    return newStr.join('')
}
console.log(reverse(string))