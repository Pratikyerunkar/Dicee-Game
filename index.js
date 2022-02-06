var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imagePath1 = "images/dice" + randomNumber1 + ".png";
var imagePath2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imagePath1);
document.querySelectorAll("img")[1].setAttribute("src", imagePath2);

var heading = document.querySelector("h1");
// alert(heading);
// heading.textContent = "Refresh Me.";

if (randomNumber1 > randomNumber2){
  heading.textContent = "!! Player 1 Won !!";
}else if (randomNumber1 < randomNumber2){
  heading.textContent = "!! Player 2 Won !!";
}else{
  heading.textContent = "Draw";
}

function throwDice(){
  window.location.reload();
}
