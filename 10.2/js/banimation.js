/* betterAnimation
written by: Mr Donze.
Extended by: Seth Ryals
10/2/17
Description: Creates moving circle which can have both speed and direction controlled by user
***class ane enum example**
*********************************/

//Global variables
var movementDirection ={ //enum variable
//enum to enumerate direction
  LEFT: 0,
  RIGHT: 1,
  UP: 2,
  DOWN: 3
};

//canvas holds reference to HTML canvas
var canvas= document.getElementById("theCanvas");

//ctx holds drawing context
var ctx = canvas.getContext("2d");

class Ball{
  //member variables
  //x- x coordinate
  //y- y coordinate
  //radius- ball radius
  //speed- movemnet speed
  //color- ball color
  //direction- direction the ball is moving

  /*member functions
  constructor- creates new ball
  draw- tells ball to draw itself
  move- tells ball to move
  setDirection- sets balls direction*/

  constructor(x, y, radius, color, speed, direction){
    //constructor for ball class
    this.x=x; //starting x coordinate
    this.y=y;
    this.radius= radius;
    this.color=color;
    this.speed=speed; //can be 0
    this.direction=direction;
  }
  draw(){
    //draws ball to canvas
    /* input: none
    output: circle on HTML canvas */
    ctx.fillStyle= this.color; //sets color
    ctx.beginPath(); //starts drawing
    ctx.arc(this.x, this.y, this.radius,0, 2*Math.PI,false);
    ctx.fill();
  }
  move(){
    /*Description: will set the movement direction by changing x and y
    input: none
    output: incremnet/decrement the correct x/y variable */

    switch(this.direction){

      case movementDirection.RIGHT:
      this.x += this.speed;
      break;

      case movementDirection.LEFT:
      this.x -= this.speed;
      break;

      case movementDirection.UP:
      this.y -= this.speed;
      break;

      case movementDirection.DOWN:
      this.y += this.speed;
      break;
      default:
      break;

    }
    this.draw();
  }
  setDirection(direct){
    //member funvtion
    //input: movementDirection, output: none
    this.direction= direct;
  }

}

//functions of program
function animate(){ //loops for the animation
  ctx.clearRect(0,0, canvas.width, canvas.height);
  b.move();
  for (var i = 0; i < ballList.length; i++) {
    ballList[i].move();
  }
  count++
  if (count% 100==0) {
    ballList.push(new Ball(30,0,10,"blue",1,movementDirection.DOWN));
  }
  document.getElementById("x").innerHTML= b.x;
  document.getElementById("y").innerHTML= b.y;
}
var b = new Ball(50, 50, 70, "red",1,movementDirection.DOWN);
var ballList=[new Ball(50,50,10, "blue",1, movementDirection.DOWN)];
var count =0;
window.setInterval(animate, 10);
window.addEventListener("keydown", eventHandler);

function eventHandler(event){
  var keyCode= event.keyCode;
  switch (keyCode) {
    case 37: //left
      b.setDirection(movementDirection.LEFT);
      break;

      case 38: //up
      b.setDirection(movementDirection.UP);
      break;

      case 39: //right
      b.setDirection(movementDirection.RIGHT);

      break;

      case 40: //down
      b.setDirection(movementDirection.DOWN);
      break;

      case 65: //a
      if (b.speed>0) {
        b.speed-=1;
      }
      break;
      case 68: //d
      b.speed+=1;
      break;
      case 83://s
      if (b.radius >3) {
        b.radius-=1;
      }
      break;

      case 87: //w
      if (b.radius < 400) {
        b.radius +=1;
      }
      break;
    default:
      break;
  }
}
