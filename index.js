

// find number for image 1 
var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomImage1 = "images/dice" + randomNumber1 +".png";

var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImage1)

// find number for image 2 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomImage2)


// find who is winner 

if (randomNumber1 == randomNumber2 ){
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 is winner!";
} else {
    document.querySelector("h1").innerHTML = "Play 2 is winner! 🚩";
}