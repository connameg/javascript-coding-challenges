//Coderbyte Easy: Dash insert

/*
Objective:
insert a dash between 2 odd numbers
*/

function DashInsert(num) {
var str = num.toString();                     //convert number to string
var newNum = [];                              //will hold the new string
for (var i = 0; i < str.length; i++) {        //loop through each item in str
//+str converts str into a number so it can be tested for divisibility
  if (+str[i] % 2 !== 0) {                    //if +str[i] is odd:
    if (+str[i+1] % 2 !== 0 && +str[i+1]) {   //if str[i+1] exists and it's odd
      newNum += str[i] + "-";                 //add the number and a dash
    }
    else {                                    //otherwise just add the number
      newNum += str[i];
    }
  } else {                                    //if the number is even,
    newNum += str[i];                         //just add it 
  }
}
return newNum;
};

DashInsert(999469);                     //call function with a NUMBER as the argument





