console.clear();


var textArea =  document.querySelector('textarea');


textArea.addEventListener('keydown', function(e){
    console.log('key down');

    if(e.repeat){
        alert('Do not repeat')
    }
});

textArea.addEventListener('keypress', function(){
    console.log('key keypress');
});


textArea.addEventListener('keyup', function(e){
    console.log('key up');
    console.log(e.key);
    console.log(e.code);
    console.log(e.keyCode);
    console.log(e.shiftKey)

    if(e.shiftKey){
        console.log('Shift + ' + e.key);
    }
});

