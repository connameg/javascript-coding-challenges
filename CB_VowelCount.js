//Coderbyte Easy: Vowel Count

/*
Objective: Write a function that will return how many vowels are in a string.
*/

/*------NESTED LOOP VERSION-----*/
function VowelCount(str) { 

var vowels = "AEIOUaeiou";                     //list of all vowels
var vowelCount = 0;                            //number of vowels
for (var i = 0; i < str.length; i++){          //loop through str
  for (var j = 0; j < vowels.length; j++) {    //loop through vowel list
    if (str[i] === vowels[j]) {                //if there's a match
      vowelCount += 1;                         //increase vowelCount
    }
  }
}
return vowelCount;     
}

VowelCount("Hello world");                            


/*-----OLD VERSION-----*/

function VowelCount(str) {

var i;                                          //declare counter variable
var numVowels = "";                             //numVowels will hold all vowels found
for (i = 0; i < str.length; i++){               //loop through each letter in string
//checking for upper/lowercase versions of vowels. If a vowel is found, add to numVowels:
if (str[i] === "A" || str[i] === "a") {     
  numVowels += str[i];
} else if (str[i] === "E" || str[i] === "e") {
  numVowels += str[i];
} else if (str[i] === "I" || str[i] === "i") {
  numVowels += str[i];
} else if (str[i] === "O" || str[i] === "o") {
  numVowels += str[i];
} else if (str[i] === "U" || str[i] === "u") {
  numVowels += str[i];
}
}
return numVowels.length;  //return length of numVowels.
};

VowelCount("coderbyte"); //call the function


