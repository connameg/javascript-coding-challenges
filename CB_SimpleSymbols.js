//Coderbyte Easy: Simple Symbols

/*
Objective:
Write a function that takes a string and returns whether or not
every letter is surrounded by "+" symbols. ie:
"+d+=3=+s+" is true.
"++d+===+c++==a" is false because the a is not surrounded by "+"
"f++d+" is also false
*/

function SimpleSymbols(str) { 
//regexps to test for a letter next to something other than a "+"
var incorrect = /[^\+][a-z]/gi.test(str);     //wrong character before letter
var incorrect2 = /[a-z][^\+]/gi.test(str);    //wrong character after letter
//if it starts or ends with a letter, it can't be surrounded by "+":
var incorrectStart = /^[a-z]/gi.test(str);    //starts with letter
var incorrectEnd = /[a-z]$/gi.test(str);      //ends with letter
//if any of the above are TRUE, function should return FALSE
var correct = /\+([a-z])\+/gi.test(str);      //correct sequence

 //FINAL CONDITIONAL
 //if any of the "incorrect" variables are true
if (incorrect === true || incorrect2 === true || incorrectStart === true || incorrectEnd == true) {
  return false;
} else {
  if (correct === true) {
    //correct sequence prevents a non-letter character between "+"s from passing
    return true;
  } else {
    return false;
  }
}        
}
   
//some test cases
SimpleSymbols("++d+===+c++==a");    //false
SimpleSymbols("+d+=3=+s+");         //true
SimpleSymbols("f++d+");             //false