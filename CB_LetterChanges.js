//Coderbyte asy: Letter Changes

/*
Objective:
Replace every letter in the argument with the next letter in 
the alphabet. Then, capitalize each vowel.
*/

function LetterChanges(str) {
//array contains all letters from a to z
var changeAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var newWord = "";                                       //holds results
for (var i = 0; i < str.length; i++) {                  //loop through each character in str
  if (/[^a-z]/.test(str[i])) {                          //if character at i is something OTHER than a letter,
    newWord += str[i];                                  //add it to newWord
  } else {                                              //otherwise,
    for (var j = 0; j < changeAlpha.length; j++) {      //loop through each item in changeAlpha array
//if the character is a letter and has a match in changeAlpha:
      if (str[i] === changeAlpha[j]){
        if (changeAlpha[j] === "z") {                   //if the letter is z, replace it with a
          newWord += "a";
        } else {                                        //for other letters, replace with next letter in array
          newWord += changeAlpha[j + 1];
        }
      } 
    } 
  }
}
//replace all vowels with capitalized versions
var fix = newWord.replace(/a/g, "A")
.replace(/e/g, "E")
.replace(/i/g, "I")
.replace(/o/g, "O")
.replace(/u/g, "U");
return fix;                                             //return final version with capitalized vowels
};

LetterChanges("hello*3"); //call the function