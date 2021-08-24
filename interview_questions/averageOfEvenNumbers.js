const array = [1,2,3,4,5,6,7,8,9,10]

function averageOfEvenNumbers(array) {
    let sum = 0
    let count = 0

    array.map(number => {
        if(number % 2 == 0) {
            sum += number
            count++
        }
    })
    return sum / count
}

console.log(averageOfEvenNumbers(array))