//Coderbyte Easy: First Reverse


function FirstReverse(str) { 

  // code goes here  
  var splitMe = str.split(""); 			//split individual string characters into array
  var reverseMe = splitMe.reverse(); 	//reverse the array
  var joinMe = reverseMe.join(""); 		//join the array back into one string
  return joinMe;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());    


/*----------LOOP VERSION BELOW----------*/

/*This version works too. I wrote it before I studied more about string & array methods.*/


function FirstReverse(str) {
var stringLength = str.length;              //set string length as variable
msg = "";                                   //set msg to empty string
for ((i = stringLength); i >= 0; i--) {     //start at end of string, loop backward
msg += str.charAt(i);                       //add the character with index i to msg

}
console.log(msg);                           //log msg to console.
};

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());
