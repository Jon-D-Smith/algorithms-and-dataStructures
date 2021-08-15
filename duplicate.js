const array = [1,5,3,7,9,7,6]

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

console.log(hasDuplicate(array))