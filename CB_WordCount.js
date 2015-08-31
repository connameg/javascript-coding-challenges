//Coderbyte Easy: Word Count

/*Splitting the string sentence at each space
 means that each word becomes its own item in 
 the resulting array. Thus the length of the 
 array will be the length of the sentence.
 */

function WordCount(str) { 
 
  var splitString = str.split(" ");			//split string with space
  var sentenceLength = splitString.length;	//get length of resulting array
  return sentenceLength;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
WordCount(readline());