
const taskOne = () => {
    console.log('Task1');
}

const taskTwo = () => {
    console.log('Task2');
}

// Asynchronous

// const dataLoading = () => {
//     console.log('task3 dataLoading');
// }

// const taskThree = () => {
//     setTimeout(dataLoading, 3000);
// }

const taskThree = () => {
    setTimeout(() => {
        console.log('task3 data Loading');
    }, 3000);
}


// Asynchronous


const taskFour = () => {
    console.log('Task4');
}

const taskFive = () => {
    console.log('Task5');
}


taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();