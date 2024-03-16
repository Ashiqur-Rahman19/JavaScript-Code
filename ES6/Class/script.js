

class Student{
    constructor(id, name, gpa){
        this.id = id;
        this.name = name;
        this.gpa = gpa;
    }


    set studentName(name){
        this.name = name;
    }

    get studentInfo(){
        return this.id + ' ' + this.name;
    }


};


let info = new Student(101, 'Ashiqur Rahman', 4.25);
// console.log(info);
// console.log(info.name);

// info.studentName = 'Nusrat Jahan Era';
// console.log(info.name);

console.log(info.studentInfo);