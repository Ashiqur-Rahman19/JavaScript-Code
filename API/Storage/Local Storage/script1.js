// localStorage.setItem("userName", "Ashiqur Rahman");
// localStorage.setItem("password", "01931536316");
// localStorage.setItem('email', 'ashique2745@gmail.com');




// const userName = localStorage.getItem("userName");
// const userPassword = localStorage.getItem("password");
// const email = localStorage.getItem('email');
// console.log(userName, userPassword, email);



// localStorage.removeItem("userName");
// localStorage.removeItem("password");



const userNames = ['Ashiqur Rahman', 'Nusrat Jahan Era'];
const countries = ["Australia", "Bangladesh", "Nepal"];

// localStorage.setItem('userNames', JSON.stringify(userNames));
// localStorage.setItem("countries", JSON.stringify(countries));

// getItem(key)



const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);