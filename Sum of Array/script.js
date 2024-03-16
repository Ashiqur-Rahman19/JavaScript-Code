let array1 = [1, 3, 5, 7 ]
let array2 = [2, 4, 6, 8, 10]
let array3 = [2, 3, 5, 7, 11]

function sumOfAddFunction(array){
    sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    console.log(sum)
}

sumOfAddFunction(array1)
sumOfAddFunction(array2)
sumOfAddFunction(array3)
