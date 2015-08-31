/*Looping a Triangle (Eloquent Javascript challenge chapter 2)*/

//Version 1
/*this version will work with any string length, and the string doesn't need to contain "#" characters*/
function triangle(hash) {
var hashLength = hash.length; 				//store length of argument string
msg = "";									//empty string
	for ((i = 0); i < hashLength; i++) {	//loop as long as i is less than hashLength...
	console.log(msg += hash.charAt(i));		//add character with index (i) to msg & print to console.
	}										
};

triangle("#######");						//call function with string as argument



//Version 2
/*Uses only "#" to create a triangle that is strictly 7 lines tall*/
function triangle() {
var i;							//declare variable i
var msg = "";					//set empty string
	for (i = 1; i < 8; i++) {	//as long as i is less than 8...
	console.log(msg += "#");	//add # to the msg & print to console...
	}							
}
triangle();						//call function (no argument required)