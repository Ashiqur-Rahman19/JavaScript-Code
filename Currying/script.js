
// function add(a, b, c){
//     return a + b + c
// }
// let result = add(5, 10, 15)
// console.log(result)

function add(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

let result = add(5)(10)(15)
console.log(result)