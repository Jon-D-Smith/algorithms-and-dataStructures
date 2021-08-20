const first_array = [1,3,5,7,9]
const second_array = [3, 6, 9, 12, 15]

function intersection(array1, array2) {
    let result = [];
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array1[i] == array2[j]){
                result.push(array1[i])
            }
        }
    }
    return result
}

console.log(intersection(first_array,second_array))