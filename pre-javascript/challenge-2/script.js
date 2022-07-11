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


function timeUntilWeekend(event) {
    let cday= event.target.value;

    if (!cday) {
        return;
    }

    cday = cday.toUpperCase();


    let rday;

    switch (cday) {
        case "MONDAY":
            rday = "4"
            break;
        case "TUESDAY":
            rday= "3"
            break;
        case "WEDNESDAY":
            rday= "2"
            break;
        case "THURSDAY":
            rday ="1"
            break;
        case "FRIDAY":
            rday="F"
            break;
        case "SATURDAY":
            rday="S"
            break;
        case "SUNDAY":
            rday="S"
            break;
    }


    if (rday == "F" ) {
        alert("The Weekend Starts Tonight At 6 PM !!!!!!");
    }else if (rday== "2" ) {
        alert("Only 2 more days until the weekend! PS. It's Wednesday my dudes.");
    }
    else if (rday =="S") {
        alert("The Weekend has already started!!!");
    }
    else {
        alert("Only " + rday + " more days until the weekend.");
    }




}