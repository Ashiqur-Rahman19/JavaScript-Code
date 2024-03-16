// Form => Submit

console.clear()

var form = document.querySelector('form');
var myName = form.querySelector('.myDiv #myName');
var email = form.querySelector('.myDiv #email');
var password = form.querySelector('.myDiv #password');

form.addEventListener('submit', formHandler);

function formHandler(e){
    e.preventDefault();
    
    const userInfo = {
        name: myName.value,
        email: email.value,
        password: password.value
    }

    console.log(userInfo);
    myName.value = '';
    email.value = '';
    password.value = '';
  
}