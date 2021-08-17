const array = [4,2,7,1,3]

function selectionSort(array) {
    for(let i = 0; i < array.length - 1; i++){
        let lowestIndexNumber = i
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[lowestIndexNumber]) {
                lowestIndexNumber = j
            }
        }
        if (lowestIndexNumber != i){
            let temp = array[i]
            array[i] = array[lowestIndexNumber]
            array[lowestIndexNumber] = temp
        }
    }
    return array
}

console.log(selectionSort(array))