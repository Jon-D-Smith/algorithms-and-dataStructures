// Return the amount of times x is in a string

const string = "axbxcxd"

const countX = (string) => {
    if(string.length == 1){
        if(string[0] == 'x') {
            return 1
        } else {
            return 0
        }
    }

    if(string[0] == "x"){
        return 1 + countX(string.substring(1, string.length))
    } else {
        return countX(string.substring(1, string.length))
    }
}

console.log(countX(string))

console.log(string.substring(1, string.length))