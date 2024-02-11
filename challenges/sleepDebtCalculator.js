//Exercise
/*Exercise : Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.*/

const getSleepHours = (day) => {
    switch (day) {
      case "Monday":
        return 8;
      case "Tuesday":
        return 7;
      case "Wednesday":
        return 6;
  
      case "Thursday":
        return 5;
  
      case "Friday":
        return 11;
  
      case "Saturday":
        return 14;
  
      case "Sunday":
        return 13;
      default:
        return "Not a valid day!";
    }
  };
  
  //Example
  //getSleepHours('Saturday')
  
  const getActualSleepHours = () => {
    let sum =
      getSleepHours("Monday") +
      getSleepHours("Tuesday") +
      getSleepHours("Wednesday") +
      getSleepHours("Thursday") +
      getSleepHours("Friday") +
      getSleepHours("Saturday") +
      getSleepHours("Sunday");
    return sum;
  };
  
  //Test of the function getActualSleepHours
  console.log(`Your total sleep hours per week is ${getActualSleepHours()}`);
  
  //To get the ideal sleep hours per week we create the following function :
  const getIdealSleepHours = () => {
    let idealHours = 10;
    return idealHours * 7;
  };
  
  //Test : get ideal sleep hours
  console.log(`Your ideal sleep hours is ${getIdealSleepHours()}`);
  
  //Let's calculate sleep debt
  
  const calculateSleeDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    actualSleepHours === idealSleepHours
      ? console.log("You've slept weel this week")
      : actualSleepHours > idealSleepHours
      ? console.log("You've slept a lot this week")
      : console.log("You've slept less this week");
  };
  
  calculateSleeDebt();
  