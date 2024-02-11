/*
Exercise : Dog Years
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
*/

//Objectif: Calculate my age in Dog's age perspective

//My Age
let myAge = 26
//Early years before 2 years
let earlyYears = 2
//Reassigning early years by multiplying by 10.5
earlyYears *= 10.5
//We should substract the early years from the later years
let laterYears = myAge - 2
// We know that each year following equtes to 4 dog years
laterYears *= 4
console.log(earlyYears)
console.log(laterYears)

let myAgeInDogYears = earlyYears + laterYears
console.log(`My age in dog years is ${myAgeInDogYears}.`)

let myName = 'Youssri'
console.log(myName.toLowerCase())

//
 console.log(`My name is ${myName} I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)


