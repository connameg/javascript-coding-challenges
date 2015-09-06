//Coderbyte Easy: Dash insert

/*
Objective:
insert a dash between 2 odd numbers
*/

function DashInsert(num) {
	var str = num.toString();                     //convert number to string
	var i;                                        //declare counter variable
	var newNum = "";                              //will hold the new string
		for (i = 0; i < str.length; i++) {        //loop through each item in str
            //use + before str; this converts str into a number so it can be tested for divisibility
			//if the number version of str[i] AND the item after it are both odd numbers
			if (+str[i] % 2 !== 0 && +str[i+1] % 2 !== 0) {
				newNum += str[i] + "-";           //add first number (as a string) and "-" to newNum
			}
			else {
				newNum += str[i];                 //else, just add the number to newNum
			}
		}
	if (newNum[newNum.length - 1] === "-") {      //if the last character is a dash
		return newNum.slice(0, -1);               //slice the string before the dash
	} else {
		return newNum;                            //othewise just return newNum
	}
};

DashInsert(999469);                     //call function with a NUMBER as the argument