//checking if the given number is a palindrome or not
let reminder = 0;
let check = 0;
function checkPalindrome(number){
    while(number>0){
        reminder =number % 10;
        check = (check * 10) + reminder;
        number = parseInt(number / 10);
    }
    return check;
}
let number = 2002;
let temp =number;
let reverse = checkPalindrome(number);
console.log(reverse);
if(reverse == temp){
    console.log("Given number is a Palindrome");
}
else{
    console.log("Given number is not a Palindrome");
}




