//Challenge 1 : Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

function isPositiveOrNegative(number) {
    if (number >= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isPositiveOrNegative(-1))