// for...of

const names = ['Ashiqur', 'Era', 'Ashique', 'Nusrat'];

for(let x of names){
    console.log(x);
    console.log(names);
}


// // for...in

let sNames = {
    ID : 101,
    Name : 'Ashiqur Rahman',
    Cgpa : 3.71
}

for(let x in sNames){
    console.log(x);
    console.log(sNames);
    console.log(sNames[x]);
    console.log(`${x} : ${sNames[x]}`);
}