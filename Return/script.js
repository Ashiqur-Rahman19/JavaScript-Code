
function sumAll (){
    sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
   return sum 
//    console.log(sum)
}




let a = sumAll(1, 2, 3)
let b = sumAll(1, 3, 5, 7, 9, 11, 13, 15)
console.log(a)
console.log(b)


function greet(msg){
    function greetings(name){
        return msg + ', ' + name
    }

    return greetings
}

let gm = greet('Good morning')
let msg1 = gm('Ashiqur Rahman')
console.log(msg1)

//

function base(b){
 function result(n){
    let result = 1
    for(let i = 0; i < b; i++){
        result *= n
    }
    return result
 }
 return result
}

let  base3 = base(3)
console.log(base3(3))

let base5 = base(5)
console.log(base5(5))











