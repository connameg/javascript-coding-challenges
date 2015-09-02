//Eloquent Javascript Chapter 3: Bean Counting

/*
Objectives:
A) Make a program that returns how many capital "B"s are in a string
B) Make a program that tells you the number of any given character 
in a string
*/

//Version A:
//take the argument and loop through each character in it
//if character at i is a capital "B", add it to an empty variable. 
//when loop is complete, return length of that variable

function beanCounter(str) {                  //function takes one argument
	var numberB = "";                        //set up empty string to hold "B"s
	var i;                                   //declare counter variable
		for (i = 0; i < str.length; i++) {   //loop through each character
			if (str.charAt(i) === "B") {     //and check for "B"
				numberB += str.charAt(i);    //if "B" is found, add to numberB
			}
		}
	return numberB.length;                   //return length of numberB
};

beanCounter("Berries, Bombs, Bunnies");      //call function with any string as argument

//Version B:
/*Almost the same as version A except this one takes an additional argument called char,
which represents the character to search for and count.*/

function charCounter(str, char) {            //function takes two arguments
	var numberChar = "";                     //set up empty string to hold characters
	var i;                                   //declare counter variable
		for (i = 0; i < str.length; i++) {   //loop through each character in str
			if (str.charAt(i) === char) {    //if any character matches char, 
				numberChar += str.charAt(i); //add it to the numberChar variable
			}
		}
	return numberChar.length;                //return length of numberB
};

charCounter("Bunnies Know Nothing", "n");    //call function with any string and character













