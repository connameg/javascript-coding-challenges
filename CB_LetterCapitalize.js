//CoderByte Easy: Letter Capitalize

/*
Objective:
Capitalize the first letter of each word in a string.
*/

function LetterCapitalize(str) {
	newString = "";                                                  //declare variable to hold new string
	var splitMe = str.split(" ");                                    //split str into array for easier searching
		for (var i = 0; i < splitMe.length; i++) {                   //loop through each item in the array
			for (var j = 0; j < splitMe[i].length; j++) {            //loop through each character in each item in the array
				if (j === 0) {                                       //if j is 0 (the first letter at array index i),
					if (splitMe[i].length === 1) {                   //if the word at [i] is only one letter long,
						newString += splitMe[i].charAt(j).toUpperCase() + " ";   //add to newString with a space at the end
					} else {                                          //otherwise,
					newString += splitMe[i].charAt(j).toUpperCase(); //make it uppercase and add to newString
				}
				} else if (j === splitMe[i].length - 1) {            //if j is the last letter of the word at index i,
					newString += splitMe[i].charAt(j) + " ";         //add the letter plus a space to newString
				} else {                                             //otherwise,
					newString += splitMe[i].charAt(j);               //add the letter to newString
				}
			}
		}
	return newString;
}

LetterCapitalize("i ran there");                                     //call the function