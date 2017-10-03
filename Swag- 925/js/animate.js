var canvas= document.getElementById("myCanvas");
canvas.style.border= "10px solid #000000"
var ctx= canvas.getContext("2d");
ctx.strokeStyle= "blue";
ctx.fillStyle= "red";
canvas.style.backgroundColor= "grey";
var ballX= 75;
var ballY= 75;

var ballRadius= 15;

draw();

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2, false);
  ctx.closePath();
  ctx.fill();
}

function keyDownHandler(event){
  var key= event.which;
  if (key >46){
    return;
  }
  else if (ballX <= 15) {
    ballX= 15;
    draw();
    switch(key) {
    case 38: //up key
    ballY -= 3;
    break;

    case 39: //right arrow
    ballX += 3;
    break;

    case 40: //down key
    ballY +=3;
    break;
    default:
    break;
  }
  }
  else if (ballY<= 15) {
    ballY= 15;
    draw();
    switch(key){
      case 39: //right arrow
      ballX += 3;
      break;

      case 37: //left arrow
      ballX -= 3;
      break;

      case 40: //down key
      ballY +=3;
      break;
      default:
      break;
    }
  }
  else if ((ballX<=15)&&(ballY<=15)) {
    ballX=15;
    ballY=15;
    draw();
    switch(key){
      case 39: //right arrow
      ballX += 3;
      break;

      case 40: //down key
      ballY +=3;
      break;
      default:
      break;
    }
}
else if(ballX>= 585){
  ballX= 585;
  draw();
  switch(key){

      case 37: //left arrow
      ballX -= 3;
      break;

      case 38: //up key
      ballY -= 3;
      break;

      case 39: //right arrow
      ballX += 3;
      break;
      default:
      break;
  }
}
else if (ballY >= 585) {
  ballY=585
  draw();
  switch(key){
    case 37: //left arrow
    ballX -= 3;
    break;

    case 38: //up key
    ballY -= 3;
    break;

    case 39: //right arrow
    ballX += 3;
    break;
    default:
    break;
  }
}
  switch(key){
    case 37: //left arrow
    ballX -= 3;
    break;

    case 38: //up key
    ballY -= 3;
    break;

    case 39: //right arrow
    ballX += 3;
    break;

    case 40: //down key
    ballY +=3;
    break;
    default:
    break;
  }
  draw();
}
window.addEventListener("keydown", keyDownHandler, true);
//make it move up and down
//up is 38 down is 40
//make it move faster
//make it stop at the edge
