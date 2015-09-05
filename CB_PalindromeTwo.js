//Coderbyte Medium: Palindrome Two

/*
Objective:
Write a function that tells you if the argument is a palindrome.
This is almost same as CB_Palindrome, but this one needs to ignore punctuation.
*/

/*
The "trick" to solving this was learning about regular expressions.
I needed that knowledge to remove the punctuation from the string.
*/

function palindromeTwo(str) {
  // code goes here 
  var noPunc = str.replace(/\W/gi, "");           //remove all punctuation, replace it with ""
  var string1 = noPunc.toLowerCase();             //make string all lower case
    
  //the original string (stored in string1) is now lower case with no punctuation
  //to create the reversed version for comparison:
  var splitMe = string1.split("");                //split string into array 
  var reverseMe = splitMe.reverse();              //so it can be reversed using array reverse method
  var string2 = reverseMe.join("");               //join it back into an array
  
  
  if (string1 === string2){                       //compare original and reversed strings
    return true;
  } else {
    return false;
  }
}

palindromeTwo("neV!!!!!! ! ! !!  !!!!!!er odd or evEn"); //call function with a string as an argument
//the argument above will become "neveroddoreven" forward and backward once punctuation is removed