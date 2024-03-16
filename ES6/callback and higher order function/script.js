
// // Callback and higher order function

// const square = (x) => {
//     console.log(`Square of ${x}: ${x * x}`);
// };

// // square(7); 

// // const y = square;
// // y(9);

// const higerOrderFunction = (num, callback) => {
//     callback(num);
// }

// higerOrderFunction(7, square);





const taskOne = (callback) => {
    console.log('Task1');
    callback();
}

const taskTwo = (callback) => {
    console.log('Task2');
    callback();
}

const taskThree = (callback) => {
    setTimeout(() => {
        console.log('task3 data Loading');
        callback();
    }, 5000);
}

const taskFour = (callback) => {
    console.log('Task4');
    callback();
}

const taskFive = () => {
    console.log('Task5');
}


taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive();
            });
        });
    });
});

