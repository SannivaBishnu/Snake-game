//Calling and holding the canvas 
var canvasholder=document.getElementById("snakecanvas")

//Taking permission from the canvas
var permission= canvasholder.getContext("2d")
var ground=new Image()
ground.src="ground.png"
var fruit=new Image()
fruit.src="fruit.png"
var d
var snake=[]
snake[0]={
x:9 *32,y:5*32
}

var food={
    x:Math.round(Math.random()*17)*32,
    y:Math.round(Math.random()*17)*32
}
var score=0

//Adding event listner
document.addEventListener("keydown",move)
function move(event){
if (event.keyCode===37 && d!="right") {
    d="left"
}
else if (event.keyCode===38 && d!="down") {
    d="up"
} 
else if (event.keyCode===39 && d!="left") {
    d="right"
} else if(event.keyCode===40 && d!="up") {
    d="down"
}
    
}
//This function is to be read again and again
function Main(){
    permission.drawImage(ground,0,0)
    permission.drawImage(fruit,food.x,food.y)
    permission.fillText(score,32*2,32*1.5)
    permission.font="25px monospace"
    for(var i=0;i<snake.length;i++){
        permission.fillStyle=(i==0)?"yellow":"blue"
     permission.fillRect(snake[i].x,snake[i].y,32,32)
    }

    //Poping the snake
    var snakeX=snake[0].x
    var snakeY=snake[0].y
   
    if(d==="right"){
     snakeX=snakeX+32
    }
    if(d==="left"){
    snakeX=snakeX-32
    }
    if(d==="down"){
        snakeY=snakeY+32
        }
        if(d==="up"){
            snakeY=snakeY-32
            }
            var newHead={x:snakeX,y:snakeY}
            snake.unshift(newHead)

    if(snake[0].x===food.x && snake[0].y===food.y){
        food={
            x:Math.round(Math.random()*17)*32,
            y:Math.round(Math.random()*17)*32
        }
        score=score+1
    }
    else{
        snake.pop()
    }
   if(snake[0].x>608){
    snake[0].x=0
   }
   if(snake[0].x<0){
    snake[0].x=608
   }
   if(snake[0].y<0){
    snake[0].y=608
   }
   if(snake[0].y>608){
    snake[0].y=0
   }
}

// setting an interval
setInterval(Main,250)

