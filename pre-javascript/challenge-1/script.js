function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;
    let inputvalue= 65 - currentAge;
    if (currentAge < 65) {
        alert("You have " + inputvalue + " years till retirement.")
    } else {
        alert ("You should already be retired!")
    }
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if (greeting == "Hello" || greeting == "hello") {
        alert("Bonjour")
    } else if (greeting == "Goodbye" || greeting == "goodbye") {
        alert("Au revoir")
    } else {
        alert("not recognized")
    }
}