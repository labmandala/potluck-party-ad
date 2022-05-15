// Change Instagram icon color
/*var instagram = document.querySelector(".fa-instagram");
instagram.style.color = "tomato";*/

// Add background image 
/*var foodImage = document.querySelector(".food");
foodImage.style.backgroundImage = "url('../img/victoria-shes-unsplash.jpg')"; */

// Dotted border-bottom around h1 
/*var noms = document.querySelector("h1");
noms.style.borderBottom = "4px dotted tomato"; */

/*
var title = document.querySelector("h1");
 
title.addEventListener("mouseover", function () { 
     title.innerText = "Let's PARTY!";
     title.style.color = "maroon";
});

var darkModeButton = document.querySelector(".dark-mode");
var body = document.querySelector("body");
 
darkModeButton.addEventListener("click", function () {
 body.classList.add("dark-palette");
});

var lightModeButton = document.querySelector(".light-mode");
 
lightModeButton.addEventListener("click", function () {
 body.classList.remove("dark-palette");
});
*/

// Toggle the styles on and off using just one button
var darkModeButton = document.querySelector(".dark-mode");
var theme = document.querySelector("body");
 
 
darkModeButton.addEventListener("click", function () {
 if (theme.classList.contains("dark-palette")) {
   theme.classList.remove("dark-palette");
   darkModeButton.innerText = "Dark Mode";
 } else {
   theme.classList.add("dark-palette");
   darkModeButton.innerText = "Light Mode";
 }
});
