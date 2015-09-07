//Coderbyte Easy: Letter Changes

/*
Objective:
Replace every letter in the argument with the next letter in 
the argument. Then, capitalize each vowel.
*/

function LetterChanges(str) {
//array contains all letters from a to z
var changeAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var newWord = "";                                         //holds results
var i;                                                    //declare counter variable
for (i = 0; i < str.length; i++) {                        //loop through each character in str
	if (/[^a-z]/.test(str[i])) {                          //if character at i is something OTHER than a letter,
		newWord += str[i];                                //add it to newWord
	} else {                                              //otherwise,
	for (j = 0; j < changeAlpha.length; j++) {            //loop through each item in changeAlpha array
		//if the character is a letter and has a match in changeAlpha:
		if (str[i] === changeAlpha[j]){
			if (changeAlpha[j] === "z") {                 //if the letter is z, replace it with a
				newWord += "a";
			} else {                                      //for any other letter, replace it with the matching index in the array plus 1
				newWord += changeAlpha[j + 1];
			}
		} 
	} 
	}
}
var capVowel = "";                                        //new variable holds final version of string
	for (var k = 0; k < newWord.length; k++){             //loop through every character in newWord
		                                                  //if the character at k is a vowel,
		if (newWord[k] === "a" || newWord[k] === "e" || newWord[k] === "i" || newWord[k] === "o" || newWord[k] === "u") {
			capVowel += newWord[k].toUpperCase();         //capitalize it and add it to capVowel
		} else {
			capVowel  += newWord[k];                      //otherwise add the character to capVowel
		}
	}
return capVowel;                                          //return final version with capitalized vowels
};

LetterChanges("hello*3"); //call the function