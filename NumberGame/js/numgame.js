function startgame()
{
  alert("Pick a number between 1 and 20");


/**var randomNumber= Math.random();
randomNumber= randomNumber* 20;
randomNumber= Math.floor(randomNumber);
**/
var randomNumber = Math.floor(Math.random()* 20);
alert(randomNumber)
                                    /**var hi = "hi";
                                    for(var c =0; c < 10; c++){
                                      hi= hi + c +"\n"
                                    }
                                    alert(hi);
                                    //forever loop
                                    var count = 0
                                    for(;;){
                                      count++;
                                      if (count == 10) {
                                        break;
                                      } **/

var score = 0

var matchnumber= randomNumber;
var pickedNumber = prompt("pick a number") ;
for(;;){

if(parseInt(pickedNumber) < matchnumber) {
  pickedNumber= prompt("too low try again");
  score= score + 1;
}
else if(parseInt(pickedNumber) > matchnumber){
  pickedNumber = prompt("too high try again")
  score = score + 1
}
else if(parseInt(pickedNumber) == matchnumber){
if(score == 0){
  document.getElementById("score").innerHTML= "You got it right!";
  break;
}
else{
  document.getElementById("score").innerHTML= "It took you " + score + " tries!";

  break;


}


}
}
}
