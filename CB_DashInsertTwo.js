//Coderbyte Medium: Dash Insert Two

/*
Objective:
Write a function that places a dash between two odd numbers and an asterisk 
between two even numbers. Do not include zero as an even or odd number.
*/

function DashInsertII(num) { 
  
var num = num.toString();                           //convert number to string
var inserted = "";                                  //will hold the modified string
for (var i = 0; i < num.length; i++) {              //loop through string
  if (+num[i] % 2 !== 0) {                          //if num at [i] is odd,
    if (+num[i+1] % 2 !== 0 && +num[i+1]) {         //AND if i+1 is odd and exists
      inserted += num[i] + "-";                     //add the dash after num[i]
    } else {                                        //if the 2nd number isn't odd or doesn't exist
      inserted += num[i];
    }
  } else if (+num[i] === 0) {                       //if number at [i] is 0
    inserted += num[i];
  } else if (+num[i] % 2 === 0 && +num[i] !== 0) {  //if num[i] is even (and not 0),
    if (+num[i+1] %2 === 0 && +num[i+1] !== 0) {    //AND if num[i+1] is even (and not 0)
      inserted += num[i] + "*";                     //add asterisk after num[i]
    } else {
      inserted += num[i];
    }
  }
}
return inserted;    
}
DashInsertII(4546793);
