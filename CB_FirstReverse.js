//Coderbyte Easy: First Reverse

/*
Objective:
Write a function that takes a string and returns it reversed.
ie: "Hello World" --> "dlroW olleH"
*/


/*------NO REVERSE METHOD METHOD------*/
//works without using the array reverse method or loops:
function FirstReverse(str) { 
var reversed = "";
var split = str.split("");     //split into array
while (split.length > 0) {     //remove every element from array
  reversed += split.pop();     //and add it to a variable 
}                              //pop removes from the end, so it will be reversed
return reversed;       
}
FirstReverse("Hello World");        


/*-------REVERSE METHOD METHOD-------*/
//uses the array reverse method
function FirstReverse(str) { 
var splitMe = str.split("");           //split individual string characters into array
var reverseMe = splitMe.reverse();     //reverse the array
var joinMe = reverseMe.join("");       //join the array back into one string
return joinMe;       
}
FirstReverse("Hello World");    


/*----------LOOP VERSION----------*/
function FirstReverse(str) {
var msg = "";                                 //set msg to empty string
for (var i = str.length; i >= 0; i--) {       //start at end of string, loop backward
  msg += str.charAt(i);                       //add the character with index i to msg
}
return msg;
}
FirstReverse("Hello World");
