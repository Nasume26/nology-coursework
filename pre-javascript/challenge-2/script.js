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