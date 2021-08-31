// split an array into chunked arrays of a specific length

const array = [1, 2, 3, 4, 5, 6, 7]

function arrayChunks(array, length){
let newArr = []
let tempArr = []
let count = 0
for(let chunks = 0; chunks < length; chunks++){
    tempArr = []
    for(let i = 0; i < length; i++){
        if(array[count]){
            tempArr.push(array[count])
            count++
        } 
    }
    
    newArr.push(tempArr)
}
    
console.log(newArr)

}

arrayChunks(array, 3)