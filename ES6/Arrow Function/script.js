
// Arrow function and traditional function

console.clear();

// Traditional function

function add1(num1, num2){
    return num1 + num2;
}
console.log(add1(15, 17));



// Arrow function

const add2 = (num1, num2) =>{
    return num1 + num2;
}

console.log(add2(25, 27));



const add3 = (num1, num2) => num1 + num2;
console.log(add3(35, 37));