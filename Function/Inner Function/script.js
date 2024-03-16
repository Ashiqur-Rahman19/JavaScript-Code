function myName(greet, name){
    function lastName(){
        if(name){
            return name.split(' ')[2]
        }else{
            return ''
        }
    }

    let message = greet + ' ' + lastName()
    console.log(message)
    
}

myName('Good Morning')