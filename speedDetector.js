const ps = require("prompt-sync");

const promptUsr = ps();

const inputSpeedOfCar = promptUsr("Enter the speed of the car: ");

const speedOfCar = parseInt(inputSpeedOfCar, 10);


if (isNaN(speedOfCar)) {
    console.log("Invalid input");
}

speedGovern(speedOfCar);

function speedGovern(speed) {
    let demeritPoints = 0;
    if (speed < 70) {
        console.log("Ok");
    }
    if (speed > 70) {
        let speedPenalty = (speed - 70);
        if (speedPenalty >= 5) {
            demeritPoints = Math.floor(speedPenalty / 5);
        }
    }
    console.log(demeritPoints);
    if (demeritPoints > 12) {
        console.log("Licence suspended");
    }
}
