// Return true if anagram, false if not


//Helper function
function formatString(str){
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

function isAnagram(str1, str2) {
    // console.log(formatString(str1))
    // console.log(formatString(str2))
    return formatString(str1) == formatString(str2)
}

console.log(isAnagram("elbow", "below"))
