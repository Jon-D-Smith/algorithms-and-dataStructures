function maxRepeating(str) {
    let currentCount = 0;
    let currentLeading = 0;
    let winner;

    for(let i = 0; i < str.length; i++){
        currentCount = 0
        for(let j = 0; j < str.length; j++){
            if(str[j] == str[i]) {
                currentCount++
            }
        }
        if(currentCount > currentLeading){
            currentLeading = currentCount
            winner = str[i]
        }
    }
    return winner
}

//expects a
console.log(maxRepeating('javascript'))
//expects o
console.log(maxRepeating('loop de loop'))