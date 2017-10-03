var numbers = document.getElementById("list");

function listOfNum(){
  var display = "";
  for (var c = 1; c <= 50; c++) {
    if ((c%3==0)&&(c%5==0)) {
      display+= c+"Yippee! Ki-Yay!" + "<br/>";
    }
    else if (c%3==0) {
      display+= c+"Yipee!" +"<br/>"
    }
    else if (c%5==0) {
      display += c+"Ki-Yay! " +"<br/>"
    }
else {
  display += c + "<br/>"
}
    }

numbers.innerHTML= display;
  }

listOfNum();
