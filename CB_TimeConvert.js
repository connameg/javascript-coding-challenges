//Coderbyte Easy: Time Convert

/*
Objective:
Write a function that takes a number and returns the number of 
hours/minutes it converts to in hr:min format. 
ie: 126(minutes) = 2:6(2 hrs, 6 mins)
*/

function TimeConvert(num) { 
var time;
var min = num;              //number of minutes
var hours = 0;              //hour counter
  while (min >= 60) { 
    min -= 60;              //each time 60 can be subtracted from mins,
    hours++;                //we add 1 hour to the variable
  }
time = hours + ":" + min;   //format time in "hrs : mins" format

return time;        
}

TimeConvert(126);  