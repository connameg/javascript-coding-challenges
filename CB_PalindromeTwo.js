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

function PalindromeTwo(str) {  
var original = str.replace(/\W/gi, "").toLowerCase();   //remove spaces, punctuation, capitalization
var reversed = original.split("").reverse("").join(""); //reverse
return original === reversed ? true : false;            //compare
}
   
PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna");  