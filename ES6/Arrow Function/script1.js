console.clear();

var students =[
    {
        ID : 101,
        Name : 'Ashique',
        GPA : 4.75
    },

    {
        ID : 102,
        Name : 'Rakib',
        GPA : 2.45
    },

    {
        ID : 103,
        Name : 'Liakot',
        GPA : 3.42
    },

    {
        ID : 104,
        Name : 'Ridoy',
        GPA : 3.15
    },

    {
        ID : 105,
        Name : 'Ripon',
        GPA : 4.63
    }
];

// Traditional function

function studentsNames1(){
   return students.filter(function(x){
        return x.GPA > 3
    }).map(function(y){
        return y.Name;
        // return y.GPA
        // return y.ID
    })
};

console.log(studentsNames1());


// Arrow function

const studentsNames2 = () => students.filter((x) => x.GPA > 4).map((y) => y.Name);

console.log(studentsNames2())



