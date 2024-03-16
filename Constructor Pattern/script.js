let Rectangle = function(width, height){

    this.width = width
    this.height = height

    this.draw = function(){
        console.log('I am a rectangle')
        this.print()
    }

    this.print = function(){
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)
    }

}

let rec4 = new Rectangle(30, 20)
rec4.draw()