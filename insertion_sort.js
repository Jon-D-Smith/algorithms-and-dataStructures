const array = [4,2,7,1,3]

function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        let temp_value = array[i]
        let position = i - 1

        while(position >= 0) {
            if(array[position] > temp_value) {
                array[position + 1] = array[position]
                position = position - 1
            }
            else {
                break
            }
        }
        array[position + 1] = temp_value
    }
    return array
}

console.log(insertionSort(array))