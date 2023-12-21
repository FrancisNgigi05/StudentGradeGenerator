const ps = require("prompt-sync");
const promptUsr = ps();

let userInput = promptUsr("Input your grade: ");
let confirmInt = parseInt(userInput, 10);

if (isNaN(confirmInt) || confirmInt > 100) {
    console.log("Invalid input");
}
else {
    const grade = gradeAutomation(confirmInt);
    console.log(grade);
}

function gradeAutomation(grade) {
    if (grade <= 100 && grade >= 79) {
        return ("A");
    }
    else if (grade < 79 && grade >= 60) {
        return ("B");
    }
    else if (grade <= 59 && grade > 49) {
        return ("C");
    }
    else if (grade <= 49 && grade >= 40) {
        return ("D");
    }
    else if (grade <= 40 && grade >= 0) {
        return ("E");
    }
    else {
        return ("Invalid input");
    }
}
