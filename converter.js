var inputC = document.getElementById("ctof");
var inputF = document.getElementById("ftof");

// Get a reference to the button element in the DOM
var convert = document.getElementById("convertButton");
var clear = document.getElementById("clearButton");
var resultDiv = document.getElementById("conversion"); //answer goes here


function toCelsius (toC) {
	var result = (toC * 9/5) + 32;
	result = Math.round(result);
	writeToDom(result);
}

function toFahrenheit (toF) {
	var result = (toF - 32) * 5/9;
	result = Math.round(result);
	writeToDom(result);
}




// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
  // what temp was inputed
  //var stufffrominput = ?????;
  // which radio button was clicked
  //if(CtoF){
  	//run toFahrenheit
  	//toFahrenheit(stufffrominput)
  //} else{
  	//run toCelsius
  	//toCelsius(stufffrominput)
  //}
}

function writeToDom (result){
//Color stuff will go here
// put answer in resultDiv
}

// Assign a function to be executed when the button is clicked
convert.addEventListener("click", determineConverter);