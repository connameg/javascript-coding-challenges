
//Coderbyte Easy: Palindrome

/*
Objective:
Write a function that returns true if the string is a palindrome
and false otherwise.
ie: "never odd or even", "racecar", and "tacocat" are true
*/

function Palindrome(str) { 
str = str.replace(/\W/gi, "").toLowerCase();                      //remove spaces in original
var reverseStr = str.split("").reverse().join("").toLowerCase();  //reverse string
return str === reverseStr ? true : false;                         //compare    
} 
Palindrome("never odd or even"); 