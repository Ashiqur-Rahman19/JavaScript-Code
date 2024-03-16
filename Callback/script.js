
function resultAll(a, b , callBack){
    let x = a + b
    let y = a - b
    let result = callBack(x, y)
    return result

}

function sum(x, y){
    return x + y
}

function sub(x, y){
    return x - y
}

function mul(x, y){
    return x * y
}

function div(x, y){
    return x / y
}

function mod(x, y){
    return x % y
}


let myResult = resultAll(5, 3, sum)
console.log(myResult)

let myResult2 = resultAll(5, 3, sub)
console.log(myResult2)

let myResult3 = resultAll(5, 3, mul)
console.log(myResult3)

let myResult4 = resultAll(5, 3, div)
console.log(myResult4)

let myResult5 = resultAll(5, 3, mod)
console.log(myResult5)