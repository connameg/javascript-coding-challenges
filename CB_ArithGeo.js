//Coderbyte Easy: Arith Geo / Coderbyte Medium: Arith Geo II

/*
Objective:
Write a function that takes an array of numbers and returns whether or not the
sequence of numbers is geometric or arithmetic. An arithmetic sequence 
is one in which the difference between each number is the same (ie: 1,3,5,7,9...).
A geometric sequence is one in which each number is multiplied by a constant amount. 
(ie: 2,4,8,16,32,64...).
For ArithGeoII, the function must be able to determine if the sequence is arithmetic
or geometric even when negative numbers are used in the argument.
This code works for both Arith Geo (easy) and Arith Geo II (medium).
*/

function ArithGeo(arr) { 
//test for arithmetic sequence
var diff = arr[1] - arr[0];     //subtract to determine difference between nums
var arithmetic;                 //stores result from looping (true/false)
//loop through each item in arr to check
//if arr[i] & arr[i+1] are separated by same amount
for (var i = 0; i < arr.length-1; i++) {
  if (diff + arr[i] === arr[i+1]) {     
    arithmetic = true;                  //if true for each index pair, it's arithmetic
  } else {                              //if any pair fails to meet the condition,
    arithmetic = false;                 //set arithmetic to false
    break;                              //and jump out of loop
  }
} 
//test for geometric sequence
var div = arr[1]/arr[0];    //divide to get quotient that should separate each number
var geometric;              //whether or not sequence is geometric
//loop through each item in arr to
//check if each number can be multiplied by a constant amount to reach the next number
for (var j = 0; j < arr.length-1; j++) {
  if (div * arr[j] === arr[j+1]) {
    geometric = true;                 //if true for each index pair, it's geometric
  } else {                            //if any pair fails the condition,
    geometric = false;                //set geometric to false and         
    break;                            //jump out of loop
  }
}
//final condition: is it arithmetic, geometric, or neither?
if (arithmetic === true) {
  return "Arithmetic";
} else if (geometric === true) {
  return "Geometric";
} else {                        //if it's neither geometric nor arithmetic
  return -1;
}

};

//some test cases
ArithGeo([5,10,15]);       //arithmetic
ArithGeo([2,6,18,54]);     //geometric 
ArithGeo([-2,-6,-18,-54]); //geometric 
ArithGeo([1,3,5,28,7]);    //neither
ArithGeo([2,4,16,24]);     //neither  