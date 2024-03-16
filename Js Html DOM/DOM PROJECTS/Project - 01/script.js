
+// Generate RGB Color By Clicking a button


console.clear();

const myDiv = document.querySelector('.my_div');
const myButton = myDiv.querySelector('.my_button');

myButton.addEventListener('click', function(){
    const myRGBColor = RGBColor();
    const myRGBColor2 = RGBColor();
    myDiv.style.backgroundColor = myRGBColor;
    myDiv.style.color = myRGBColor2;
    
});

function RGBColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}

