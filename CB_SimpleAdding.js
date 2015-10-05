//Coderbyte Easy: Simple Adding

/*
Objective: Write a function that takes a number (num) and returns 
the sum of every number from 1 to num.
*/

function SimpleAdding(num) { 
if (num <= 0) {          //stop recursion when num is down to 0
  return 0;
}
else {                   //continuously add num to num-1
  return num + SimpleAdding(num - 1);
}       
}

SimpleAdding(10);           