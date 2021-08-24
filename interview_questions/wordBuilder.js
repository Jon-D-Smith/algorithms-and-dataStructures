const array = ['a', 'b', 'c', 'd']

function wordBuilder(array) {
    let collection = []

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++){
            if(i !== j){
                collection.push(array[i] + array[j])
            }
        }
    }
    return collection
}

console.log(wordBuilder(array))

// This function is O(n^2) which marks it as a relatively slow algorithm