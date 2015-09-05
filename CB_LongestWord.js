//CoderByte Easy: Longest Word

/*
Objective: 
Write a function that will return the longest word in a string.
Ignore punctuation and if two words have the same length, return
only the first one.
*/

//here we go:

function LongestWord(sen) {             
  // code goes here 
var noPunc = sen.replace(/\W/gi, " ");            //remove punctuation from argument
var split =  noPunc.split(" ");                   //and split it into an array.

if (split.length === 1) {                         //if argument is only one word,
	return split.join("");                        //return it as a string
} else {                                          //if argument is longer than one word
	var compare = split[0];                           //set first array item as base for comparison
		for (i = 0; i < split.length; i++) {          //loop through each item in the array
			if (split[i].length > compare.length) {   //if an item is longer than current value in compare,
				compare = split[i];                   //change compare's value to hold new largest word
			} 
		}
  return compare;                                     //return the longest word!
  }      
}

LongestWord("fun&!! time");         //call the function with any string as a parameter