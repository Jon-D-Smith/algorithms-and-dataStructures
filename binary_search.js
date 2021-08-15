array = [1, 3, 9, 12, 15, 21, 67, 89, 120]

function binarySearch(array, search_value) {
    let lower_value = 0
    let upper_value = array.length - 1
    let count = 0
    while(lower_value <= upper_value) {
        let mid_value = Math.floor((upper_value + lower_value) / 2)
        let value_at_midpoint = array[mid_value]

        if(search_value == value_at_midpoint){
            count++
            return `your value is at ${mid_value} and it took ${count} steps to find`
        }else if(search_value < value_at_midpoint) {
            count++
            upper_value = mid_value - 1
        } else if(search_value > value_at_midpoint){
            count++
            lower_value = mid_value + 1
        }
    }
    

    return `Value not found`
}

console.log(binarySearch(array, 21))
console.log(binarySearch(array, 3))

console.log(binarySearch(array, 25))