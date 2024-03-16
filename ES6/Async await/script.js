console.log('Welcome');

const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve('Task 1 is completed')
    });
};

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        resolve('Task 2 is completed')
    });
};

const taskThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 3 is completed')
        }, 3000);
    });
};

const taskFour = () => {
    return new Promise((resolve, reject) => {
        reject('Task 4 is not completed')
    });
};

const taskFive = () => {
    return new Promise((resolve, reject) => {
        resolve('Task 5 is completed')
    });
};

// taskOne()
// .then((res) => console.log(res))
// .then(taskTwo)
// .then((res) => console.log(res))
// .then(taskThree)
// .then((res) => console.log(res))
// .then(taskFour)
// .then((res) => console.log(res))
// .then(taskFive)
// .then((res) => console.log(res))
// .catch((err) => console.log(err));



console.log('Bye');


const callAllTask = async () => {

try{
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
    const t5 = await taskFive();
    console.log(t5);
}catch(e){
    console.log(e);
}

};

callAllTask();





// const workOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Work one is completed');
//     });
// };