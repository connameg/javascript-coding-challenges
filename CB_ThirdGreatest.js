//Coderbyte Easy: Third Greatest

/*
Objective:
Write a function that takes an array of strings and
returns the third longest string. If there are multiple 
words with that length, return the one that appears last.
*/


function ThirdGreatest(strArr) { 
//sort the array by length, ignoring alphabetical order
//all words with the same length will retain their order in the array
strArr.sort(function(a,b){
  if (a.length < b.length) {return -1;}
  else if (a.length > b.length) {return 1;}
  else {return 0;}
});
var thirdGreat;                                        //stores 3rd greatest word in array
//since the array is now sorted by length, 
//one of the last three values HAS to be the third greatest
var c = strArr.length-1;     //start searching for 3rd greatest at the end of the array
//conditions:
if (strArr[c].length === strArr[c-1].length) {          //If last & 2nd last are equal,
  if (strArr[c].length === strArr[c-2].length){         //and if its a 3 way tie for 3rd longest
    thirdGreat = strArr[c];                             //last is 3rd longest b/c it appears last.
  } else {                                              //otherwise,
  thirdGreat = strArr[c-2];                             //3rd last has to be 3rd greatest
  }
} else if (strArr[c-1].length === strArr[c-2].length) { //If 2nd last and 3rd last are equal,
  thirdGreat = strArr[c-1];                             //2nd last is 3rd greatest b/c it appears last
} else {                                                //in any other case, 
  thirdGreat = strArr[c-2];                             //3rd from last is the 3rd greatest
}
return thirdGreat;        
}

ThirdGreatest(["hello", "world", "before", "all"]); //returns world