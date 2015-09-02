//Coderbyte Easy: Alphabet Soup

function AlphabetSoup(str) { 

  // code goes here  
  var array = str.split("");     //split characters array
  var sortMe = array.sort();     //sort array by unicode
  var joinMe = sortMe.join("");  //join the sorted array
  return joinMe;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline());  