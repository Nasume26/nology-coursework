function positiveOrNegative(event) {

    let amountEntered= event.target.value;

    if (!amountEntered) {
        return;
    }

    let result;

    if (amountEntered >=0) {
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
    let currentDay= event.target.value;

    if (!currentDay) {
        return;
    }

    currentDay = currentDay.toUpperCase();


    let currentDayResult;

    switch (currentDay) {
        case "MONDAY":
            currentDayResult = "4"
            break;
        case "TUESDAY":
            currentDayResult= "3"
            break;
        case "WEDNESDAY":
            currentDayResult= "2"
            break;
        case "THURSDAY":
            currentDayResult ="1"
            break;
        case "FRIDAY":
            currentDayResult="F"
            break;
        case "SATURDAY":
            currentDayResult="S"
            break;
        case "SUNDAY":
            currentDayResult="S"
            break;
        default:
            currentDayResult= "N";
    }


    if (currentDayResult == "F" ) {
        alert("The Weekend Starts Tonight At 6 PM !!!!!!");
    }else if (currentDayResult== "2" ) {
        alert("Only 2 more days until the weekend! PS. It's Wednesday my dudes.");
    }
    else if (currentDayResult =="S") {
        alert("The Weekend has already started!!!");
    }
    else if (currentDayResult== "N") {
        alert("Sorry, we didn't recognize that day.");
    }
    else {
        alert("Only " + currentDayResult + " more days until the weekend.");
    }




}


function veggiePrices(event){

    let vege = event.target.value

    if (!vege) {
        return;
    }


    vege = vege.toUpperCase();

    let rvege;
    let dvege;

    switch(vege) {
        case "POTATO":
            rvege = "10"
            break;
        case "CARROT":
            rvege = "10"
            break;
        case "BROCOLLI":
            rvege= "8"
            break;
        case "CABBAGE":
            rvege = "6"
            break;
        case "ASPARAGUS":
            rvege ="7"
            break;
    }

    switch(vege) {
        case "POTATO":
            dvege = "Potato's"
            break;
        case "CARROT":
            dvege = "Carrot's"
            break;
        case "BROCOLLI":
            dvege= "Brocolli"
            break;
        case "CABBAGE":
            dvege = "Cabbage's"
            break;
        case "ASPARAGUS":
            dvege ="Asparagus"
            break;
    }

    alert(dvege + " costs " + rvege + " dollars per kilogram")

}