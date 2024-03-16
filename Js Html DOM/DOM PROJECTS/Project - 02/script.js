// Project Requirements:

// Change the background color by generating hex color by clicking a button.
// Also display the hex code to a disabled input field.

console.clear();

const myDiv = document.querySelector('.my_div');
const myButton = myDiv.querySelector('.my_button');
const myInput = myDiv.querySelector('.my_input');

myButton.addEventListener('click', function(){

    const bgColor = hexColor();
    const bgColor2 = hexColor()
    myDiv.style.backgroundColor = bgColor;
    myDiv.style.color = bgColor2;
    myInput.value = bgColor;
})



function hexColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}



