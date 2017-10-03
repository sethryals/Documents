var canvas= document.getElementById("myCanvas");
canvas.style.border= "10px solid #000000"
var ctx= canvas.getContext("2d");
ctx.strokeStyle= "blue";
ctx.fillStyle= "red";
canvas.style.backgroundColor= "white";


class Point{
  constructor(x, y){
    this.x= x;
    this.y=y;
  }
  moveRight(){
    this.x+=1;
  }
  moveLeft(){
    this.x-=1;
  }
  moveUp(){
    this.y-=1;
  }
  moveDown(){
    this.y+=1;
  }
}
var ball = new Point(75,75);
var ballRadius= 15;

draw();

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ball.x,ball.y, ballRadius, 0, Math.PI*2, false);
  ctx.closePath();
  ctx.fill();
}

function animate(){
  ball.moveRight();
  draw();
}
window.setInterval(animate,15);

function animateY(){
  ball.moveDown();
  draw();
}
window.setInterval(animateY,15)
