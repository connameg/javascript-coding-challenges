//Coderbyte Easy: AB Check

/*
Objective: 
Determine if a and b are separated by exactly 3 characters in a given string.
*/

function ABCheck(str) {
//two regular expressions check for a and b separated by any 3 characters:
var sequence1 = /a...b/;          //a before b
var sequence2 = /b...a/;          //b before a
	//if either sequence appears in the string,
	if (sequence1.test(str) || sequence2.test(str)) {
		return true;              //return true
	} else {
		return false;
	}
}

ABCheck("Laura sobs");