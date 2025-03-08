import "bootstrap";
import "./style.css";



window.onload = function() {
  //write your code here

function generateCard() {

const icons = [ "♠",  "♣", "♥",  "♦" ];
const classes = ["spade", "club", "heart", "diamond"];

const randomSuite = Math.floor(Math.random()* 4);

let topIconContainer = document.getElementById("top-icon-container");
let bottomIconContainer = document.getElementById("bottom-icon-container");
let numberContainer = document.getElementById("card-number-container")

topIconContainer.classList.remove(...classes);
bottomIconContainer.classList.remove(...classes);
numberContainer.classList.remove(...classes);

topIconContainer.innerHTML = icons[randomSuite];
bottomIconContainer.innerHTML = icons[randomSuite];

topIconContainer.classList.add(classes[randomSuite]);
bottomIconContainer.classList.add(classes[randomSuite]); 


let randomNumber = Math.floor(Math.random()* 13) + 1;


   if (randomNumber === 1) {
    randomNumber = "A";
   } else if (randomNumber === 11) {
    randomNumber = "J";
   } else if (randomNumber === 12) {
    randomNumber = "Q";
   } else if (randomNumber === 13) {
    randomNumber = "K";
   } else {
    randomNumber = randomNumber. toString();
   }



  ;
   numberContainer.innerHTML = randomNumber;

   numberContainer.classList.add(classes[randomSuite]);

};


generateCard();

let cardUpdateInterval = setInterval(generateCard,5000);

document.getElementById("updateCardBtn").addEventListener("click", function () {
  
  this.classList.remove('active');
  this.blur();
  clearInterval(cardUpdateInterval);

  generateCard();



  cardUpdateInterval = setInterval(generateCard, 5000);
});

};