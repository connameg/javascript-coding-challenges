//Eloquent Javascript Chapter 3: Minimum

/*
goal: create a program that returns the lesser of two arguments
without using Math.min
*/

//I used simple if/else statements:

function min(ar1, ar2) {                  //declare function with 2 parameters
    if (ar1 > ar2) {
        return ar2;                       //return ar2 if less than ar1
    } else if (ar1 < ar2) {
        return ar1;                       //return ar1 if less than ar1
    } else {                              //if equal, return both in a sentence
        return ar1 + " and " + ar2 + " are equal.";  
    }
}
min(7, 90);                               //call function with arguments
                    