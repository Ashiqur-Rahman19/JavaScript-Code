console.clear();

var myInput = document.querySelector('input');

myInput.addEventListener('blur', function(e){
    console.log('blur');
    myInput.style.backgroundColor = 'transparent';
    myInput.style.border = '1px solid ';
    myInput.style.padding = '0px';

    myInput.value = e.target.value.toUpperCase();
    console.log(e.target.value)
})

myInput.addEventListener('focus', function(){
    console.log('focus');
    myInput.style.backgroundColor = 'orangered';
    myInput.style.border = '2px solid black';
    myInput.style.padding = '20px';

})

myInput.addEventListener('focusin', function(){
    console.log('focusin');
})

myInput.addEventListener('focusout', function(){
    console.log('focusout');
})