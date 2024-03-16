


// const promise1 = new Promise((resolve, reject) => {

//     let completedPromise1 = true;

//     if(completedPromise1){
//         resolve('Completed promise 1');
//     }
//     else{
//         reject(new Error('Rejected promise 1'));
//     }
// });

// console.log(promise1);

// promise1.then((complete) => {
//     console.log(complete);
// }).catch((eror) => {
//     console.log(eror);
//     console.log(eror.message);
// });
// console.log('End')



// const promise2 = new Promise((resolve, reject) => {
//     resolve('Promise 2 completed')
// });

// promise2.then((complete) => {
//     console.log(complete)
// })

// Promise.all([promise1, promise2]).then(([complete1, complete2]) => {
//     console.log(complete1);
//     console.log(complete2);
// });



// Promise race

const promise1 = new Promise((resolve, reject) => {

       setTimeout(() => {
        resolve('Completed promise 1');
       }, 5000);
   
});



const promise2 = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve('Promise 2 completed');
   }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve('Promise 3 has done');
    }, 7000);
 });
 


Promise.race([promise1, promise2, promise3]).then((x) => {
    console.log(x);  
});

