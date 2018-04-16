"use strict";

function doMath(){
	var input = document.getElementById("userInput").value;
	var result = Math.sqrt(input);
	document.getElementById("result").value = result;

}

function createEventListeners(){
var submit = document.getElementById("submit");
if(submit.addEventListener){
	submit.addEventListener("click", doMath, false);
} else if (submit.attachEvent){
	submit.attachEvent("onclick", doMath);
}
}

function setUpPage() {
	createEventListeners();
}

if(window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if(window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}