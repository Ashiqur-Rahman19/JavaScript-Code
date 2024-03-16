let array = [10, 2, 173, 4, 55]

// let sum = array.reduce(function(prev, curr){
//     // return prev + curr
//     // return Math.max(prev, curr)
//     return Math.min(prev, curr)
// })

// console.log(sum)


function myReduce(array, callBack, acc){

    for(let i = 0; i < array.length; i++){
        acc = callBack(acc, array[i])
    }

    return acc
}


let sum = myReduce(array, function(prev, current){
    return prev + current
}, 0)

console.log(sum)

let max = myReduce(array, function(prev, current){
    return Math.max(prev, current)
}, 0)
console.log(max)

let min = myReduce(array, function(prev, current){
    return Math.min(prev, current)
},array[0])
console.log(min)