
//Coderbyte Easy: Palindrome

function Palindrome(str) {

	var splitMe = str.split(" ");				//split string at every space. Becomes array.
	var join1 = splitMe.join("");				//join array. Any/all spaces should be gone

	var splitMeAgain = join1.split("");			//split string again. 
	var reverseMe = splitMeAgain.reverse();		//reverse the resulting array
	var join2 = reverseMe.join("");				//and join it again

	if (join1 === join2) { 						//if both strings are the same,
		return true;							//return true.
	} else {									//if not,
		return false;							//return false.
	}
}

Palindrome(readline());  							//call the function with an argument

/*
The main problem I had writing this was how to make the function 
return true if the argument is a palindrome, but contains spaces.
This script separates the argument string at each space, then joins 
it back without spaces to create join1 for the sake of comparison. 
If the argument had no spaces to begin with, it won't be affected. 
Next the script splits, reverses, and rejoins join1. This is stored 
as join2. An if/else statement checks if join1 & join2 are equal. If
so, it's a palindrome!
*/