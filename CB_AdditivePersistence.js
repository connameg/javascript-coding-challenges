//Coderbyte Easy: Additive Persistence

/*
Objective:
Write a function that takes a number and returns the number of times you must 
add its digits to reach one digit.
ie: 2718 -> 2+7+1+8=18 -> 1+8=9 , so persistence is 2
*/

function AdditivePersistence(num) { 
var c = 0;                                   //persistence counter
  while (num > 9) {                          //while num is more than 9 (meaning it has 2+ digits)
  var arr = num.toString().split("");        //convert num to string, then an array
  var str = arr.join("+");                   //join back to string with "+" between each number
  num = eval(str);                           //eval evaluates string as mathematical expression
  c++;
}
return c;
}
   
AdditivePersistence(2718);                   //call function with number