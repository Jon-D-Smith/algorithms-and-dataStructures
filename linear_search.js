const array = [1, 7, 13, 25, 18, 29, 30]

function linearSearch(array, search_value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] == search_value){
            return `Your item is at index ${i}`
        }
        
    }
    return "Item not found"
}

console.log(linearSearch(array, 7))
console.log(linearSearch(array, 29))