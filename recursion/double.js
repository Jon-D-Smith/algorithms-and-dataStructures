let array = [1,2,3,4,5]

function double(array, index=0) {
    if(index >= array.length) {
        return
    }
    array[index]*=2
    double(array, index+1)
    return array
}

console.log(double(array))