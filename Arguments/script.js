
function sumAll (){
    sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}

sumAll(1, 2, 3)
sumAll(1, 3, 5, 7, 9, 11, 13, 15)