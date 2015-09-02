//Coderbyte Easy: First Factorial

/*
I used recursion to multiply the argument by (itself - 1) repeatedly 
until the first condition is met.
To prevent overloading the call stack, I include an error message if
a negative number is used as an argument,
*/


function FirstFactorial(num) { 

  // code goes here  
  if (num === 0) {        //will stop recursion
    return 1;
  } else if (num < 0) {   //error message for negative numbers
    return "Error!"
  } else {				
  return num * FirstFactorial(num - 1); //multiply number by (itself - 1)
  }
         
}