function positiveOrNegative(event) {

    let numb= event.target.value;

    if (!numb) {
        return;
    }

    let result;

    if (numb >=0) {
        result = "Positive"
    } else {
        result = "Negative;"
    }

    alert ("This number is " + result)

}
//This function is comented out until I can figure out how to get more than one input from a user
//function greatestNumber(event) {

    //let num1 = event.target.value;
    
const num1= 5;
const num2= 77;
const num3= 76;

if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the greatest number");
} else if (num2>= num1 && num2 >= num3) {
    console.log(num2 + " is the greatest number");
} else {
    console.log(num3 + " is the greatest number")
}





//}