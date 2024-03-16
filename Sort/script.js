//sorting program

// The sort() method sorts an array alphabetically:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Sorts the elements of fruits

//The reverse() method reverses the elements in an array.
// You can use it to sort an array in descending order:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // First sort the elements of fruits
fruits.reverse(); // Then reverse the order of the elements

// You can fix this by providing a compare function:
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  console.log(a + " , " + b);
  console.log(points);
  return a - b;
});

// se the same trick to sort an array descending:
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return b - a;
});

/*
The Compare Function

The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:
function(a, b){return a - b}

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative a is sorted before b.

If the result is positive b is sorted before a.

If the result is 0 no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

*/







let myNumber = [11 , 5, 7, 9, -1, -8, 5, -6, 8, 2, 3, -8 ]

myNumber.sort(function(a, b) {
    if(a > b){
        return 1
    }else if(a < b){
        return -1
    }else{
        return 0
    }
})

console.log(myNumber)



let myFamilly =[
    {
        name: 'A',
        age: 25
    },
    {
        name: 'B',
        age: 28
    },
    {
        name: 'C',
        age: 47
    },
    {
        name: 'D',
        age: 12
    },
    {
        name: 'E',
        age: 65
    }
]

myFamilly.sort(function(a, b){
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})

console.log(myFamilly)


// every

let array = [11 , 5, 7, 9, 5,  3, -9 ]

let res1 = array.every(function(value){
    // return value % 2 == 0
    return value % 2 == 1
})
console.log(res1)


// some

let res2 = array.some(function(value){
    return value < 0
})
console.log(res2)