const array = [65, 55, 23, 64, 123, 45, 27]

function bubbleSort(array) {
    let sortLimit = array.length - 1
    let sorted = false

    while(!sorted){
        sorted = true
        for(let i = 0; i < sortLimit; i++){
            if(array[i] > array[i+1]){
                let smaller = array[i+1]
                array[i+1] = array[i]
                array[i] = smaller
                sorted = false
            }
            
        }
        sortLimit--
    }
    return array
}

console.log(bubbleSort(array))