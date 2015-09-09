//Coderbyte Medium: Dash Insert Two

/*
Objective:
Write a function that places a dash between two odd numbers and an asterisk 
between two even numbers. Do not include zero as an even or odd number.
*/

function DashInsertII(num) { 

  // code goes here  
  var num2 = num.toString();                        //change argument to string for length property
  var newNum = "";                                  //holds new value
  for (var i = 0; i < num2.length; i++) {           //loop through each item in string
      if (+num2[i] === 0) {                         //if the number is 0,
          newNum += num2[i];                        //add to newNum
        }
      else if (+num2[i] % 2 !== 0 && +num2[i + 1] % 2 !== 0) {  //if item at i and i+1 are both odd
          if (+num2[i + 1] !== 0) {                             //as long as i+1 is not 0,
          newNum += num2[i] + "-";                              //add the number and a "-"
          } else {
            newNum += num2[i];
          }
        }
      else if (+num2[i] % 2 === 0 && +num2[i+1] % 2=== 0){      //if item at i and i+1 are both even
          if (num2[i + 1] != 0) {                               //as long as i+1 is not 0,
            newNum += num2[i] + "*";                            //add the number and a "*"
          } else {
            newNum += num2[i];
          }
        }
      else {                                                    //for anything else, add to newNum
        newNum += num2[i];
      }
  }
  if (newNum[newNum.length-1] === "-") {                        //if the last character is a dash,
    return newNum.slice(0, -1);                                 //remove it and return the string
  } else {
    return newNum;                                              //otherwise just return the string
  }       
} 

DashInsertII(4546793);                                         //call the function with a number
