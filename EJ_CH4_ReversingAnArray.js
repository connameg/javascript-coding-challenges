//Eloquent Javascript Chapter 4: Reversing an Array

/*
Objective:
Write 2 functions:
A) Takes an array as an argument and makes a NEW reversed array from it.
B) Reverses the array given as the argument without making a new array.
Do not use the built in reverse method.
*/

//Version A
//creates a new array that contains the contents of the argument in reverse
function reverseArray(arr){                        //takes array as an argument
	var backward = [];                             //empty array to hold contents of new array
	for (var i = arr.length - 1; i >= 0; i--) {    //starting at END of array, 
		backward.push(arr[i]);                     //push each item to the end of the array backward
	}
	return backward;                               //return the resulting array
};
reverseArray(["dog", "cat",  "bird", "mouse"]);    //call function with array as argument



//Version B
//reverses the argument itself
function reverseArrayInPlace(arr) {
	for (var i = 0; i < Math.floor(arr.length / 2); i++) {    //loop through half of array to avoid repeats
		var swapStart = arr[i];                               //store first item in array before changing it
		arr[i] = arr[arr.length - 1 - i];                     //give first item the value of the last item
		arr[arr.length - 1 - i] = swapStart;                  //give the last item the value of the first item
	}
	return arr;
};
reverseArrayInPlace(["salamander", "newt", "frog", "axolotl"]); //call function with array as argument