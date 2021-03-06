//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var spidermanScore = 0;
var blackWidowScore = 0;
var starLordScore = 0;
var buzzLightyearScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", spiderman);
q2a1.addEventListener("click", spiderman);
q3a1.addEventListener("click", spiderman);
q4a1.addEventListener("click", spiderman);

q1a2.addEventListener("click", blackWidow);
q2a2.addEventListener("click", blackWidow);
q3a2.addEventListener("click", blackWidow);
q4a2.addEventListener("click", blackWidow);

q1a3.addEventListener("click", starLord);
q2a3.addEventListener("click", starLord);
q3a3.addEventListener("click", starLord);
q4a3.addEventListener("click", starLord);

q1a4.addEventListener("click", buzzLightyear);
q2a4.addEventListener("click", buzzLightyear);
q3a4.addEventListener("click", buzzLightyear);
q4a4.addEventListener("click", buzzLightyear);

//#TODO: Define quiz functions here

function spiderman() {
  spidermanScore += 1;
  questionCount += 1;
  //alert("Spiderman!");
  if (questionCount >= 4) {
    updateResult();
  }
}

function blackWidow() {
  blackWidowScore += 1;
  questionCount += 1;
  //alert("Black Widow!");
  if (questionCount >= 4) {
    updateResult();
  }
}

function starLord() {
  starLordScore += 1;
  questionCount += 1;
  //alert("Starlord!");
  if (questionCount >= 4) {
    updateResult();
  }
}

function buzzLightyear() {
  buzzLightyearScore += 1;
  questionCount += 1;
  //alert("Buzz Lightyear!");
  if (questionCount >= 4) {
    updateResult();
  }
}

var result = document.getElementById("result")

function updateResult() {
  if (spidermanScore >= 2) {
    result.innerHTML = "Your result is our freindly-neighborhood Spiderman!";
  } else if (blackWidowScore >= 2) {
    result.innerHTML = "Your result is Black Widow!";
  } else if (starLordScore >= 2) {
    result.innerHTML = "Your result is Starlord!";
  } else if (buzzLightyearScore >= 2) {
    result.innerHTML = "Your result Buzz Lightyear. To infinity and beyond!!";
  } else{
    result.innerHTML = "We're not sure, but let's go with Captain Marvel! You're awesome in every way."
}
}