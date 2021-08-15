const array = [1,5,3,7,9,7,6]

// This function is O(n2) making it a slow algorithm
function hasDuplicate(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++){
            if(i !== j && array[i] === array[j]){
                console.log(array[i])
                console.log(array[j])
                return `Duplicate found: ${array[i]} \nPositons: ${i} and ${j}`
            }
        }
    }
    return 'No duplicates found'
}

// This function is O(N) making it linear. It is much faster than the previous approach
function hasDuplicateValue(array){
    let existingNumbers = []
    for(let i = 0; i < array.length; i++) {
        if(existingNumbers[array[i]] === 1) {
            return `Duplicate found`
        } else {
            existingNumbers[array[i]] = 1
        }

    }
    return `No duplicates found`
}

console.log(hasDuplicate(array))
console.log(hasDuplicateValue(array))