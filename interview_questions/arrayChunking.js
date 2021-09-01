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


function arrayChunksB(array, length){
    let chunkedArr = []
    let i = 0;

    while( i < array.length) {
       chunkedArr.push(array.slice(i, i + length)) 
       i+=length
    }
    return chunkedArr
}

// Using a foreach on the array itsself
function arrayChunksC(array, len){
    const chunkedArr = []
    array.forEach((val) => {
        const last = chunkedArr[chunkedArr.length - 1]
    
        // Check if there is a last and if last.length = to chunk length
        if(!last || last.length === len){
            chunkedArr.push([val])
        } else {
            last.push(val)
        }
    })
    return chunkedArr
}


arrayChunks(array, 3)
console.log(arrayChunksB(array, 3))
console.log(arrayChunksC(array, 3))