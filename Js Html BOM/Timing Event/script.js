console.clear();

// setTimeout(() => {
//     console.log('hi')
// }, 3000);


// var myButton = document.querySelector('.myButton');
// var message = document.querySelector('.message');

// myButton.addEventListener('click', saveUser);

// function saveUser(){
//     message.textContent = 'user registration successful.'

//     setTimeout(() => {
//         message.textContent = '';
//     }, 2000)
// }



// var myButton = document.querySelector('.myButton');
// var message = document.querySelector('.message');

// myButton.addEventListener('click', displayCount);

// function displayCount(){
//     let count = 1;
//     message.textContent = count;

//     setInterval(() => {
//         count++
//         message.textContent = count;
//     }, 1000);

// }



var myButton = document.querySelector('.myButton');
var message = document.querySelector('.message');

myButton.addEventListener('click', startClock);

function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = formateTime(hours)
    minutes = formateTime(minutes);
    seconds = formateTime(seconds);

    let time = hours + ':' + minutes + ':' + seconds;

    message.textContent = time;

    setInterval(startClock, 1000);
}

function formateTime(value){
    if(value < 10){
        value = '0' + value;
    }
    return value
}