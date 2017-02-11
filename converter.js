var userTempInput = document.getElementsByName("temp");

// Get a reference to the button element in the DOM
var convert = document.getElementById("convertButton");
var clear = document.getElementById("clearButton");
var resultDiv = document.getElementById("conversion"); //answer goes here
var temp = document.getElementById("userInput");


function toCelsius (toC) {
	var result = (toC - 32) * 5/9;
	result = Math.round(result);
	writeToDom(result, "celsuis");
}

function toFahrenheit (toF) {
	var result = (toF * 9/5) + 32;
	result = Math.round(result);
	writeToDom(result, "fahrenheit");
}


// console.log("45"(toFahrenheit));

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
  // what temp was inputed
  //var stufffrominput = ;
  // which radio button was clicked ???
  for (i=0; i<userTempInput.length; i++){
  	 if(userTempInput[i].id === "ctof" && userTempInput[i].checked) {
  	 // console.log("ctof value is checked");
		toFahrenheit (parseInt(temp.value));
  	//toFahrenheit(stufffrominput)
  	} else if (userTempInput[i].id === "ftoc" && userTempInput[i].checked) { 
  		toCelsius (parseInt(temp.value)); 
  	//run toCelsius
  	//toCelsius(stufffrominput)
  	}
  }
 
}

function writeToDom (result, units){
	// if (units === "fahrenheit" && result > 90){
	// 	// we add class to have div be red
	// } else if ()
	if (units === "fahrenheit" ) {
		// define ranges for result that should be a certain color
		if (result > 90){
			// we add class to have div be red
			resultDiv.className = "red";
		}
		else if (result < 32){
			//we add a class to have the div be blue
			resultDiv.className = "blue";
		}
		else {
			resultDiv.className = "green";
		}
		
	} else if (units === "celsuis"){
		if (result > 32){
			// we add class to have div be red
			resultDiv.className = "red";
		}
		else if (result < 0){
			//we add a class to have the div be blue
			resultDiv.className = "blue";
		}
		else {
			// color must be green
			resultDiv.className = "green";
		}		
	}

//Color stuff will go here
// put answer in resultDiv
// boybands.innerHTML += "this is the text inside the div"; This is a setter of text inside html 
 resultDiv.innerHTML = result;

}

// Assign a function to be executed when the button is clicked
convert.addEventListener("click", determineConverter);
temp.addEventListener("keypress", function(e){
	// console.log(e);
	if (e.charCode === 13) {
		determineConverter();
	}
});

clear.addEventListener("click", function() {
	userInput.value = "";
	resultDiv.innerHTML = "";
})



