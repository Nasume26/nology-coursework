function handleCalculateGrade(event) {

    const grade = event.target.value

    let percentage;
    switch (grade) { //Grade is the value being evaluated, each case is referencing Grades value. 
        //If grade is = to A then percentage = "90-100%"
        case "A":
            percentage = "90-100%"
            break;
        case "B":
            percentage = "75-90%"
            break;
        case "C":
            percentage = "50-75%"
            break;
        case "D":
            percentage = "25-50%"
            break;
        case "F":
            percentage = "0-25%"
            break;       
    }
    // =This alert will inform the user onblur according to the percentage set by the user defined grade value. 
    alert("The percentage was " + percentage);
}