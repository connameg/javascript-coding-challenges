//Eloquent Javascript Chapter 3: Recursion

/*
Objective:
create a function (using recursion) that indicates whether
a number is even or odd.
*/


function isEven(n){
	if (n < 0){
		return "Please enter a positive number";
	} else if (n === 0) {                  //stops recursion if n is even
		return true;
	} else if (n === 1){                  //stops recursion if n is odd
		return false;
	} else {
		return isEven(n - 2); //see note below
	}
}

isEven(55);


/*
The statement return isEven(n - 2) will continuously call isEven, 
taking 2 off of n until it reaches either 1 or 0. If it can reach 1 
this way, it is an odd number. If continuously subracting 2 can 
bring it to 0, it is even.
*/

