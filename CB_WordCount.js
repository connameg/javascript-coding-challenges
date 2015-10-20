//Coderbyte Easy: Word Count

/*
Objective:
Write a function that takes a string and returns how many
words are in the string.
ie: "Hello World" = 2
*/

function WordCount(str) { 
var splitString = str.split(" ");  //split with spaces to separate words
return splitString.length;         //return length of resulting array    
}

WordCount("one 22 three");
