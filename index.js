


var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage="dice"+randomNumber1+".png";

var randomImageSource="images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimgsrc="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimgsrc);

// If player 1 wins...
if(randomNumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!!";
}
else if(randomNumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 wins !!";
}
else{
    document.querySelector("h1").innerHTML="Tie!!"
}