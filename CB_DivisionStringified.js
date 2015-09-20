//Coderbyte Easy: Division Stringified

/*
Objective:
Return the value of num1 / num2 as a string.
If the value is longer than 3 digits, insert
commas to format it like 23,000
*/

function DivisionStringified(num1,num2) { 

  // code goes here  
  var answer = Math.round(num1 / num2);      //divide the numbers and round the answer
  var stringify = String(answer);            //convert answer to string
  var modify = stringify.split("");          //split string into array

  for (var i = modify.length; i > 0; i-=3) { //loop through array starting from end
      modify.splice(i, 0, ",");              //add a comma every three characters
    }
    modify.pop();                            //remove comma from the end
    return modify.join("");                  //join back into string
}
   
DivisionStringified(123456789, 10000);       //call function with two numbers as arguments