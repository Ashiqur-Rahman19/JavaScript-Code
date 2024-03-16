console.clear();


// console.log(window.location);

// // href
// console.log(location.href);

// // protocol
// console.log(location.protocol);

// // hostname
// console.log(location.hostname);

// // port
// console.log(location.port);

// // pathname
// console.log(location.pathname);


var locationDiv = document.querySelector('.locationDiv');

let para1 = locationDiv.children[0];
para1.textContent = location.href;

let para2 = locationDiv.children[1];
para2.textContent = location.protocol;

let para3 = locationDiv.children[2];
para3.textContent = location.hostname;

let para4 = locationDiv.children[3];
para4.textContent = location.port;

let para5 = locationDiv.children[4];
para5.textContent = location.pathname;


var myButton = document.querySelector('#myButton');

myButton.addEventListener('click', function(){
    location.assign('https://ashiqur-rahman19.github.io/Website-01/');
})
