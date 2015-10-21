//Coderbyte Easy: First Factorial

/*
Objective:
Write a function that returns the factorial of a given number,
meaning the product of every number between num and 1.
ie: factorial of 4 is (4 * 3 * 2 * 1) or 24
*/

function FirstFactorial(num) { 
 
if (num === 0) {             //will stop recursion
  return 1;
} else if (num < 0) {        //error message if num is negative
  return "Error!"
} else {
  return num * FirstFactorial(num - 1); //recursively multiply num by itself-1
}       
}

FirstFactorial(8);