let createRect = function(width, height){
    
    return {
    
        width: width,
        height: height,
    
        draw: function(){
            console.log('I am a rectangle')
            this.print()
        },
    
        print: function(){
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }
    
        
    }
    
    }
    
    let rec1 = createRect(10, 20)
    rec1.draw()
    
    let rec2 = createRect(30, 40)
    rec2.draw()
    
    let rec3 = createRect(50, 40)
    rec3.draw()