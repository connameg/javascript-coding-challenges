//Coderbyte Easy: Division Stringified

/*
Objective:
Return the value of num1 / num2 as a string.
If the value is longer than 3 digits, insert
commas to format it like 23,000
*/

function DivisionStringified(num1,num2) { 
//divide the numbers, convert to string, and split into array
var answer = Math.round(num1 / num2).toString().split(""); 
for (var i = answer.length-3; i > 0; i-=3) { //loop through array starting at 3rd from end
  answer.splice(i, 0, ",");                  //add a comma every three characters
}
return answer.join("");                      //join back into string
}

DivisionStringified(123456789, 10000);       //call function with two numbers as arguments