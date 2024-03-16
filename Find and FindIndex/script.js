let array = [2, 3, 8, 7, 10, 75, 25, 62, 6, 42, 18, 91]

// let result = array.find(function(value){
//     return value == 75
// })
// console.log(result)


// let result2 = array.findIndex(function(value){
//     return value == 75
// })
// console.log(result2)


function myFind(array, callBack){
    for(let i = 0; i < array.length; i++){
        if(callBack(array[i])){
            return array[i]
        }
    }
}

let result = myFind(array, function(value){
    return value == 75
})
console.log(result)

function myFindIndex(array, callBack){
    for(let i = 0; i < array.length; i++){
        if(callBack(array[i])){
            return i
        }
    }
}

let result2 = myFindIndex(array, function(value){
    return value == 75
})
console.log(result2)

