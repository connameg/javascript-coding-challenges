/*Chess Board (Eloquent Javascript challenge chapter 2)*/
//third and final challenge for this chapter!

//VERSION 2.2 -- definitive version (for now)
/*After playing around with v2.1 (see end of document), I realized it doesn't play nice with odd numbers.
The following version fixes that using additional nested if/else statements.*/

var hashMsg = ""; 								//set empty var to hold values						
var i;											//declare i counter
var j;											//declare j counter
function flexGrid(gridSize) {					//declare flexGrid function
	var size = gridSize;						//store argument as variable
	for (i = 0; i < size; i++) {				//outer for loop controls height			
		if (i % 2 === 0) {						//if outer counter is divisible by 2...
			for (j = 0; j < size; j++) {		//begin inner for loop--controls width
				if (j % 2 === 0) {				//if inner counter is divisible by 2...
					hashMsg += " ";				//add a space to hashMsg
				} else {						//if NOT divisible by 2...
					hashMsg += "#";				//add a "#" to hashMsg
				}					
			} 		
		} else {								//if the outer counter is NOT divisible by 2...				
			for (j = 0; j < size; j++) {		//begin inner for loop--controls width
				if (j % 2 === 0) {				//if inner counter is divisible by 2...
					hashMsg += "#";				//add a "#" to hashMsg
				} else {						//if NOT divisible by 2...
					hashMsg += " ";				//add a space to hashMsg
				}							
			} 		
		}
		hashMsg += "\n";						//AFTER the inner loop executes, add a line break			
	}
	console.log(hashMsg);						//log contents of hashMsg to console
};

flexGrid(7); 									//call the function with any even or odd number!




/*---------------------------------------------*/

//OLDER VERSIONS:
/*
Below are my older (messier) attempts at this challenge. I've only left them 
here so I can see my process & improvement. They do not work with odd numbers.
*/

//VERSION 2.0 (inferior version)
/*Using this technique, the program doesn't make a grid with equal 
length and height unless both arguments are the same. */

var hashMsg = ""; 								//empty variable string
var i;											//declare counters i & j
var j;
function flexGrid(gridSize1, gridSize2) {		//declare function
	var size1 = gridSize1;						//create size 1 & size 2 (see note below)
	var size2 = gridSize2 / 2;							
	for (i = 0; i < size1; i++) {				//outer for loop to control	height	
		if (i % 2 === 0) {							
			for (j = 0; j < size2; j++) {		//inner for loop to control width
			hashMsg += " #";					//add space + # to hashMsg (horizontal)
			} 		
		} else {									
			for (j = 0; j < size2; j++) { 		//inner for loop to control width
			hashMsg += "# ";					//add # + space to hashMsg (horizontal)
			} 		
		}
		hashMsg += "\n";						//add line break after inner loops execute
	}
	console.log(hashMsg);						//log resulting message to console
};

flexGrid(10, 10);								//call the function width any two (even) numbers							

//VERSION 2.1 (still inferior, but getting there)
/*This version will always make a grid that is x units tall and x units wide. */

var hashMsg = ""; 								//set up empty string to hold #s					
var i;											//declare i
var j;											//declare j
function flexGrid(gridSize) {					//declare the flexGrid function
	var size1 = gridSize;						//store argument as a variable
	var size2 = gridSize / 2;					//store half the argument value (see note)	
	for (i = 0; i < size1; i++) {				//outer for loop--controls height			
		if (i % 2 === 0) {						//if divisible by 2...	
			for (j = 0; j < size2; j++) {		//inner for loop--controls width (see note)
			hashMsg += " #";					//add to hashMsg horizontally until condition is met
			} 		
		} else {								//if NOT divisible by 2				
			for (j = 0; j < size2; j++) {		//inner for loop--controls width
			hashMsg += "# ";					//add to hashMsg horizontally until condition is met
			} 		
		}
		hashMsg += "\n";						//line break AFTER each horizontal row is created
	}
	console.log(hashMsg);						//after looping is done, log hashMsg to console
};

flexGrid(10); 									//call the function with a number as the argument

/* NOTE: size2 divides the argument by 2 because size2 controls the loop that
adds characters to the horizontal lines. size2 is necessary here because each string added to hashMsg 
contains two characters-- "#", and " ", which must be different depending on whether
it's divisible by 2. If size1 was used instead, the resulting grid would be twice as wide
as it is long (although it would appear visually as a square). Additionally, this structure makes it 
incompatible with odd numbers. Of course, I could easily avoid 
this by splitting up the contents of the message... (see the improved VERSION 2.2 above). */


/*
Versions 1a and 1b create ONLY an 8x8 grid, as this is the objective for the first half
of the challenge. 
*/

//VERSION 1a (where it all started)

//lets talk it through: what I think I should do:
//loop!
//Each line has "# # # #" (7 characters)
//The only thing that needs to change is whether the space is at start or end
//if/else statement: If even, add space at end. If odd, add space at beginning.

var hashes = "# # # #"; 						//sets up the base string
var i; 											//declare counter variable
for (i = 0; i < 8; i++) {						//i starts at 0, as long as it is less than 8...
	if (i % 2 === 0) {							//if its even
		console.log(" " + hashes + "\n"); 		//add a space before the base string
	} else {									//if it's odd
		console.log(hashes + " " + "\n"); 		//add base string before space
	}
}

//VERSION 1b (while loop version, because why not?)
var hashes = "# # # #"; 						//sets up the base string
var i = 0; 										//declare counter variable
while (i < 8) {									//i starts at 0, as long as it is less than 8...
	if (i % 2 === 0) {							//if its even
		console.log(" " + hashes + "\n"); 		//add a space before the base string
	} else {									//if it's odd
		console.log(hashes + " " + "\n"); 		//add base string before space
	}
	i++;
}

//Version 1 and v1.5 both produce the chess board pattern (8 rows, 8 columns)