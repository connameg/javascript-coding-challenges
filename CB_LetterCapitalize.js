//CoderByte Easy: Letter Capitalize

/*
Objective:
Capitalize the first letter of each word in a string.
*/

function LetterCapitalize(str) { 
var words = str.split(" ");                        //split into array
var arr = [];
  for (var i = 0; i < words.length; i++) {         //for each word in the array,
    //push the capitalized first letter & the remaining letters into arr
    arr.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
return arr.join(" ");                              //join arr into string
}

LetterCapitalize("i ran there");                   //call the function