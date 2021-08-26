// Return the products of multiple arrays

const array1 = [1,2,3]
const array2 = [10, 100, 1000]

function twoNumberProducts(array1, array2) {
    let products = []
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++) {
            products.push(array1[i] * array2[j])
        }
    }
    return products
}

// This is a complexity for BigO since it has multiple datasets. It sits somewhere between O(N * M) and O(N^2)

console.log(twoNumberProducts(array1, array2))