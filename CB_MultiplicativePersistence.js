//Coderbyte Easy: Multiplicative Persistence

/*
Objective:
Write a function that takes a number as an argument and returns the 
number of times you must multiply its digits to reach one digit.
ie: 39 -> 3*9=27 -> 2*7=14 -> 1*4=4, so 39's multiplicative persistence is 3.
*/

function MultiplicativePersistence(num) { 
var c = 0;                                //set persistence counter
  while (num > 9) {                       //loop while num > 9 (num has 2+ digits)
  var arr = num.toString().split("");     //convert num to array
  var str = arr.join("*");                //join with "*" as a separator
  num = eval(str);                        //evaluate string to get product
  c++;
}
return c;
}
   
MultiplicativePersistence(39);            //call function