//Coderbyte Easy: SwapCase

/*
Objective:
Swap the case of every letter in the argument, leaving
punctuation unaltered. ie: "a" becomes "A", "!" remains "!".
*/

function SwapCase(str) {
	var i;                                             //declare counter variable
	var swap = "";                                     //declare variable to hold results
	for (i = 0; i < str.length; i++) {                 //loop through each letter in argument
		if (str[i] === str[i].toLowerCase()) {         //if letter at i is lowercase,
			swap += str[i].toUpperCase();              //add uppercase version to swap variable
		} else if (str[i] === str[i].toUpperCase()) {  //if letter at i is uppercase
			swap += str[i].toLowerCase();              //add lowercase version to swap variable
		}
	}
	return swap;                                       //return the results
};

SwapCase("Hello-LOL");                                 //call the function