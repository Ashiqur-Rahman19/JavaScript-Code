
// Array destructure

// let numbers = [10, 20, 30, 40, 50];
// let [num1, num2, num3, num4, num5] = numbers;
// console.log(num1);
// console.log(num3);
// console.log(num2);




// Swap variables

//  let a = 10, b = 20;

//  [a,b]= [b,a]

//  console.log(a);
//  console.log(b);




// Nested Object destructure

// const studentInfo = {
//     Id : 101,
//     Name : 'Ashiqur Rahman',
//     Gpa : 4.75,
//     Language : {
//         native : 'Bangla',
//         begginer : 'English'
//     }
// }

// const {Id, Name, Gpa, Language} = studentInfo;

// console.log(Id);
// console.log(Name);
// console.log(Gpa);

// console.log(Language.native);
// console.log(Language.begginer);



// Destructing function parameters

// const studentInfo = (student) => {
//     console.log(`${student.Id}, ${student.Gpa}, ${student.Name}`);
// };

// const student = {
//     Id : 101,
//     Name : 'Ashiqur Rahman',
//     Gpa : 4.75
// }

// studentInfo(student);


const studentInfo = (id, Name, Gpa) => {
    console.log(`${student.Id}, ${student.Gpa}, ${student.Name}`);
};

const student = {
    Id : 101,
    Name : 'Ashiqur Rahman',
    Gpa : 4.75
}

studentInfo(student);
