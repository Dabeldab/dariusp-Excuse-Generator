import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
let action = [' ate ', ' peed ', ' crushed ', ' broke '];
let what = [' my homework ', ' my phone ', ' the car '];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let rdm1 = Math.floor(Math.random() * who.length);
let rdm2 = Math.floor(Math.random() * action.length);
let rdm3 = Math.floor(Math.random() * what.length);
let rdm4 = Math.floor(Math.random() * when.length);

// creating a sentence (the excuse)
document.querySelector("#excuse").innerHTML = who[rdm1] + action[rdm2] + what[rdm3] + when[rdm4];

};