// 10.Write a program that prints the next 20 leap years.



var year = prompt("please input a year to find out the next 20 years");
var counter = 20;
var result=true;


function leapyear(year, counter, result) {
    while (counter >= 0) {

        if ((year % 4 === 0) && (year % 100 !== 0)||(year % 400 === 0))
        {
            result = true;
            console.log(year);
            year++;
            counter--;
        } 
        else {
        year++;
        }    
    }
}