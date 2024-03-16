console.clear();

document.querySelector('#my_button').addEventListener('click', function(){
    var myInput = document.querySelector('#my_input').value;
 
    try{
        if(myInput < 5){
            throw 'The number is too low.'
        }
        else if(myInput > 10){
            throw 'The number is too high.'
        }else{
            throw 'You are enter a right number.'
        }

    }catch(err){
        console.log(err);
    }


   

})
