var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomnumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

var randomDiceImage2 = "images/dice" + randomnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "DRAW!";
}