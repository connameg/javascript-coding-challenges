//Coderbyte Easy: Ex Oh

/*
Objective:
Write a function that returns true if the argument has an equal number of x's and o's.
Only x's and o's will be entered as the argument string.
*/

function ExOh(str) {
	var xnum = "";                              //holds number of x's
	var onum = "";                              //holds number of o's
	for (var i = 0; i < str.length; i++) {      //loop through each character in str
		if (str[i] === "x" || str[i] === "X") { //if the character is x
			xnum += str[i];                     //add it to xnum
		} else {
			onum += str[i];                     //otherwise add it to onum
		}
	}

	if (xnum.length === onum.length) {          //if xnum & onum are the same length
		return true;                            //return true
	} else { 
		return false;
	}
}
ExOh("xooxxo");                           //call function with string of x's and o's