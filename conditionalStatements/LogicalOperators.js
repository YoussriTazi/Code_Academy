/*Logical Operators :
the AND operator (&&)
the OR operator (||)
the NOT operator, otherwise known as the BANG operator (!)
*/

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 4) {
  console.log('time to sleep')
} else {
  console.log('not bed time yet')
}

// what if the mood is not sleepym but the tirdness level is still greater than 4(only the condition tirdness level is checked, while using OR statement our condition is achieved)
if (mood !== 'sleepy' || tirednessLevel > 4) {
  console.log('time to sleep')
} else {
  console.log('not bed time yet')
}

