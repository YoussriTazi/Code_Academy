/*Race Day
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. 
You have been hired to write a program that will register runners
for the race and give them instructions on race day.
*/

let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
let runnerAge = 18;

if (runnerAge > 18 && registeredEarly == true) {
  console.log(`You will race in the race number ${raceNumber} at 9:30 am !`);
} else if (runnerAge > 18 && registeredEarly == false) {
  console.log(`You will race in the race number ${raceNumber} at 11:00 am !`);
} else if (runnerAge < 18) {
  console.log(`You will race in the race number ${raceNumber} at 12:30 am !`);
} else {
  console.log(
    "You are exactly 18, be welcome to visit the registration desk, Thnak you !"
  );
}
