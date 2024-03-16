console.clear();

var myDiv = document.querySelector('div');

myDiv.addEventListener('click', function(e){
    console.log('click')
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.innerHTML);
    console.log(e.target.innerText);
    console.log(e.target.textContent);
})

myDiv.addEventListener('dblclick', function(){
    console.log('dblclick')
})

myDiv.addEventListener('mousedown', function(){
    console.log('mousedown')
})

myDiv.addEventListener('mouseup', function(){
    console.log('mouseup')
})

myDiv.addEventListener('mouseenter', function(){
    console.log('mouseenter')
})

myDiv.addEventListener('mouseleave', function(){
    console.log('mouseleave')
})

myDiv.addEventListener('mousemove', function(){
    console.log('mousemove')
})

myDiv.addEventListener('mouseover', function(e){
    console.log('mouseover')
    console.log('clientX = ' + e.clientX + 'clientY = ' + e.clientY);
    console.log('offsetX = ' + e.offsetX);
    console.log('offsetY = ' + e.offsetY);
})



var myButtons = document.querySelectorAll('.btn');

Array.from(myButtons).map((button) => {
    button.addEventListener('click', function(e){
        console.log('clicked');
        console.log(e.target.innerText);
    })
})
