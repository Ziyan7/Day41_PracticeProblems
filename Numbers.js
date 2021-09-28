//Printing numbers in words
function NumToWords(number){
    switch (number){
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
    }
}

const number = Math.floor(Math.random() *10)%6;;
NumToWords(number);