// Javascript is used to manipulate html
// this is one way to do that
document.getElementById("main").innerHTML = "Hello";
document.getElementById("main").innerHTML = "<b>Hello</b>";
// variables can hold more than just numbers and strings
var myPage = document.getElementById("main");
//you can also change the syle
myPage.style.backgroundColor = "red";
myPage.style.color="white";
myPage.style.fontSize = "40px";
myPage.style.textAlign = "center";
myPage.style.fontFamily = "verdana";

//make a prompt asking for a name
// have the webpage say hello to that name

var name = prompt("Como te llamas");
myPage.innerHTML = "<b>Hola " + name + "</b>";
// html has many predefined colors
// or you can make your own color
// using hexadecimal number
//hexadecimal meand base 16
//hexadecimal is real easy tio change to binary
//f = 15 in decimal
// f = to 11111 in binary
//colors work like this rr/gg/bb
// ff= 255
// ffffff = r=255 b=255 g=255
