//Coderbyte Easy: Ex Oh

/*
Objective:
Write a function that returns true if the argument has an equal number of x's and o's.
Only x's and o's will be entered as the argument string.
*/

function ExOh(str) {
var xnum = 0;                               //holds number of x's
var onum = 0;                               //holds number of o's
for (var i = 0; i < str.length; i++) {      //loop through each character in str
  if (str[i] === "x" || str[i] === "X") {   //if the character is x
    xnum += 1;                              //add to xnum
  } else {
    onum += 1;                              //otherwise add to onum
  }
}
return xnum === onum;     //returns true if there's an equal number of x's and o's
}
ExOh("xooxxo");           //call function with string of x's and o's