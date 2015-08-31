/*FizzBuzz (Eloquent Javascript Chapter 2)*/


for (var i = 0; i < 100; i++) {                     //for numbers 0 - 100
	if (i % 3 === 0 && !(i % 5 ===0)) {             //if number is divisible by 3, and NOT 5,
		console.log("Fizz");                        //display "Fizz"
	} else if (i % 5 === 0 && !(i % 3 === 0)) {     //if number is divisible by 5 and NOT 3,
		console.log("Buzz");                        //display "Buzz"
	} else if (i % 3 === 0 && i % 5 ===0) {         //if divisible by 3 AND 5, 
		console.log("FizzBuzz");                    //display "FizzBuzz"
	} else {                                        //if NOT divisible by either 3 or 5
		console.log(i);                             //just display the number
	}
}