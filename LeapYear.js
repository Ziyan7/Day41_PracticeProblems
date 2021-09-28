//program to check wether given year is a leap year or not

function checkYear(year){
    if((0== year %4) && (0!= year % 100) || (0 == year % 400)){
        console.log(year + ' is a leap year');
    }
    else {
        console.log(year + ' is not a leap year');
    }
}

//input
const year = 2020;

checkYear(year);