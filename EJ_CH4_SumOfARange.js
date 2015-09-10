//Eloquent Javascript Chapter 4: The Sum of a Range

/*
Objective:
1) Write a function that takes two number arguments and
returns an array that contains the range of numbers between them.
ie: 1-10 returns [1,2,3,4,5,6,7,8,9,10]

2) Write a function that takes an array of numbers and returns
the sum. 
ie: sum of 1-10 = 55

3)BONUS: Modify the range function to include an optional third argument (step) 
that will determine how the array will increment/decrement. It should be able
to work with a negative step value.
*/

//1 - Range Array
//places numbers from num1 to num2 into an array
function range(num1, num2) {
	var arr = [];                           //empty array to hold range
	for (var i = 1; i < num2 + 1; i++) {    //loop from num1 to num2 (+1 to include last number)
		arr.push(i);                        //push each number to array
	}
	return arr;
}
range(1, 10);


//2 - Sum of a Range Array
//takes an array of numbers and returns the sum
function sum(arr, num){                     //takes array and a counter number
	if(num === arr.length){                 //if counter (num) is equal to array length,   
		return 1;                           //stop recursion
	} else {                                //otherwise, add each number in the array
		return arr[num] + sum(arr, num+1);  //to the next number using recursion
	}
}
sum(range(1, 10), 1);                      //call function with array & counter arguments


//BONUS - Range Array with Third Argument
//optional third argument determines how the array will increment/decrement
function rangeMod(num1, num2, step) {
	var arr = [];                                   //empty array to hold range
	if (step < 0) {                                 //if step is negative
		for (var i = num1; i >= num2; i+=step) {    //loop (negative step will count down)
			arr.push(i);                            //push each number to array
		}
		return arr;
	} else { 
		if (step === undefined) {
			step = 1;
		}
		for (var i = num1; i <= num2; i+=step) {    //loop (counting up) from num1 to num2
			arr.push(i);                            //push each number to array
		}
	}
	return arr;
}
rangeMod(5, 2, -1);                                 //call function with 2-3 arguments
