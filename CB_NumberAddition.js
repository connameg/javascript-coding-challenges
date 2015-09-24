//Coderbyte Easy: Number Addition

/*
Objective:
Write a function that takes a string containing numbers and other characters, and 
return the sum of all the numbers in the string.
*/

function NumberAddition(str) { 
  var nums = str.match(/(\d)+/g);    //search for all digits in str (returns array)
  if (!(nums)) {                     //if nums returns falsy value (no numbers in str)
    return 0;
  } else {
  var numstring = nums.join("+");    //join array into string serparated by +
  var sum = eval(numstring);         //evaluate it as a mathematical expression
  return sum; 
  }    
}
   
NumberAddition("55Hello5");      


//-----Loop Version-----//

//this function does the same thing using while loop
function NumberAddition(str) {
  var nums = str.match(/(\d)+/g);   //search for all digits in str (returns array)
  if (!(nums)) {                    //if nums returns a falsy value, return 0
    return 0;
  } else {
  while (nums.length > 1) {         //loop until only one item is left in the array
    nums[0] = +nums[0] + +nums[1];  //set nums[0] equal to the sum of nums[0] and nums[1]
    nums.splice(1,1);               //delete nums[1], since it's just been added
   }
  return +nums;                     //return the sum (use "+" so it returns a number)
 }
}
   
NumberAddition("55Hello5");      