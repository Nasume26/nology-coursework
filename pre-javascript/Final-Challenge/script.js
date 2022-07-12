//Challenge 1 : Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

function isPositiveOrNegative(number) {
    if (number >= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isPositiveOrNegative(-1));
console.log(isPositiveOrNegative(10));

//Write a function that takes a number of days and converts it into an age.

function convertDaysToAge (ammountOfDays) {
    const ammountInYears = ammountOfDays  / 365;
    return ammountInYears;
}

console.log (convertDaysToAge(3650));
console.log (convertDaysToAge(6570));

//Write a function that takes three numbers and returns the largest of the three numbers.

function getLargestNumber(num1,num2,num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
const numberMessage= " is the largest number.";

console.log(getLargestNumber(2,1,4) + numberMessage)
console.log(getLargestNumber(6,2,3) + numberMessage)

