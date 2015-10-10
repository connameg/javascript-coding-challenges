//Coderbyte Easy: Second GreatLow

/*
Objective:
Write a function that takes an array and returns the second 
lowest and second greatest numbers.
*/

function SecondGreatLow(arr) { 
//sort array to make sure it's in numerical order:
arr.sort(
function(a,b){
if (a < b) {return -1;}
else if (a > b) {return 1;}
else {return 0;}
});

//variables to store second lowest/greatest values
var secLow;         
var secHigh; 

if (arr.length === 2) {                    //if there are only 2 elements in the array,
  secLow = arr[1];                         //the last number HAS to be the 2nd lowest
  secHigh = arr[0];                        //and the 1st number HAS to be 2nd highest
} else {                                   //if there are more than 2 elements:
  for (var i = 0; i < arr.length; i++){    //start at 1st index to search for 2nd lowest
    if (arr[i] < arr[i+1]) {               //if value at index i is less than the next,
    secLow = arr[i+1];                     //then it's the second lowest
    break;                                 //end loop since secLow has been found
    }	
  }
  for (var j = arr.length-1; j > 0; j--){  //start at last index to search for 2nd greatest
    if (arr[j] > arr[j-1]) {               //if value at j is greater than the element before it,
    secHigh = arr[j-1];                    //it's the second greatest
    break;                                 //end loop
    }
  }
}
return secLow + " " + secHigh;             //return the values 
}

SecondGreatLow([7, 7, 12, 98, 106]);      