var pictureArray= ["Pic1.jpg","Pic2.jpg","Pic3.jpg","Pic4.jpg"];
//holds names of the pictures
setInterval(changePic,3000);
//timer, calls changPic every 3 seconds or 3000 miliseconds
var count = 0;
function changePic(){
if (count==pictureArray.length) {
count = 0;
}
document.getElementById("pics").innerHTML= "<img src='pics/" + pictureArray[count] + "'>"
count ++;
}
