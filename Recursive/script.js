// function myFun(n){
//     if(n == 10){
//         return
//     }else{
//         console.log('I love Bangladesh')
//     }

//     myFun(n + 1)
// }
// myFun(0)

//  function myFun2(n){
//     if(n == 0){
//         return
//     }else{
//         console.log('I love Matherhat')
//     }

//     myFun2(n - 1)
// }

// myFun2(10)




// function mySum(n){

//     if(n == 11){
//         return 0
//     }
//     return n + mySum(n + 1)
// }

// console.log(mySum(0))


// function myFun(x){
//     if(x == 0){
//         return 0
//     }

//     return x + myFun(x - 1)
// }
// console.log(myFun(10))








// function myFact(x){
//     if(x === 6){
//         return 1
//     }

//     return x * myFact(x + 1)
// }

// console.log(myFact(1))

// function myFact(x){
//     if(x === 1){
//         return 1
//     }

//     return x * myFact(x - 1)
// }
// console.log(myFact(5))








// let array = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]

// function sumOfArray(array, lastIndex){
//     if(lastIndex === 0){
//         return 0
//     }

//     return lastIndex + sumOfArray(array, lastIndex - 1)
// }

// let result = sumOfArray(array, array.length)
// console.log(result)

let array = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]

function sum(array, firstIndex){
    if(firstIndex === array.length + 1){
        return 0
    }

    return firstIndex + sum(array, firstIndex + 1)
}

console.log(sum(array, 0))