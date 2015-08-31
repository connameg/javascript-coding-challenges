//Coderbyte Easy: Check Nums

function CheckNums(num1,num2) { 

  // code goes here  
   //use conditional statement
   if (num1 < num2) {				//if num2 is greater, return true
    return true;
  } else if (num1 > num2) {			//if num1 is greater, return false
    return false;
  } else {							//if neither is greater return "-1"
    return "-1";
  } 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CheckNums(readline());    