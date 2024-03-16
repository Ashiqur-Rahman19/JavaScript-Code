// Find (callback, value) return the value of the first element that pass certain condition


// let numbers = [5, 13, 50, 40, 56];
// let evenNumber = numbers.find(x => x % 2 === 0);

// console.log(evenNumber);






// FindIndex (callback, value) return the index of the first element that pass certain conditon


// let numbers = [5, 21, 41, 28, 20];

// const evenNumber = (value, index, array) => {
//     if(value % 2 === 0){
//         return value
//     }
// }

// let firstEvenNumber = numbers.find(evenNumber);
// let firstEvenNumberIndex = numbers.findIndex(evenNumber);

// console.log(firstEvenNumber);
// console.log(firstEvenNumberIndex)




let students = [
    {
        ID : 101,
        Name : 'Hafizur',
        Gpa : 2.75
    },

    {
        ID : 102,
        Name : 'Lotif',
        Gpa : 3.75
    },

    {
        ID : 103,
        Name : 'Ashiqur Rahman',
        Gpa : 4.75
    },

    {
        ID : 104,
        Name : 'Zahid',
        Gpa : 5.00
    },

    {
        ID : 105,
        Name : 'Bipul',
        Gpa : 3.25
    }
]

let firstBoy = students.find(x => x.Gpa > 4);
let firstBoyIndex = students.findIndex(x => x.Gpa > 4);
console.log(firstBoy);
console.log(firstBoy.Name);
console.log(firstBoyIndex);
