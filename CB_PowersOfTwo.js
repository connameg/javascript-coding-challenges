//Coderbyte Easy: Powers of Two

/*
Objective:
Write a function that takes a number and returns true if that number is
a power of 2, and false otherwise.
*/

function PowersofTwo(num) { 
//since we're checking for powers of two, set product equal to 2 to start
var product = 2;
while (product < num) {         //loop while product is less than argument
  product *= 2;                 //each time, multiply product by 2
}
if (product === num) {          //if the final number is the same as argument
  return true;                  //then it is a power of 2
} else {
  return false;
}       
}

PowersofTwo(124);                        

