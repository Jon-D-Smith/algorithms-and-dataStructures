const array = [1,45,6,87,3,4,5,23,76]

function merge(left, right) {
    let results = []
    let leftIndex = 0, rightIndex = 0

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            results.push(left[leftIndex])
            leftIndex++
        } else {
            results.push(right[rightIndex])
            rightIndex++
        }
    }

    return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

function mergeSort(array) {
    if(array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2)

    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(
        mergeSort(left), mergeSort(right)
    )

}


console.log(mergeSort(array))