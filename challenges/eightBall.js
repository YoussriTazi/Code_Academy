let userName = 'Jane'
userName ? console.log (`Hello, ${userName}!`) : console.log(`Hello!`);

const userQuestion = 'Am i rich?'
console.log(userQuestion)
console.log(`${userName} asked whether ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8);

//Eight Ball
let eightBall = '7'

switch (eightBall) {
  case '0':
    console.log('It is certain')
      break;
 case '1':
    console.log('It is decidedly so')
      break;
 case '2':
    console.log('Reply hazy try again')
      break;
 case '3':
    console.log('Cannot predict now')
      break;
 case '4':
    console.log('Do not count on it')
      break;
 case '5':
    console.log('My sources say no')
      break;
 case '6':
    console.log('Outlook not so good')
      break;
 case '7':
    console.log('Signs point to yes')
      break;
 default:
    console.log('not a valid number!')
      break;
}

//let's use the if else statement
eightBall = 5
if (eightBall === 0) {
    console.log('Signs point to yes'
)
} else if (eightBall === 1){
    console.log('It is decidedly so')
} else if (eightBall === 2){
    console.log('Reply hazy try again')
} else if (eightBall === 3){
    console.log('Cannot predict now')
} else if (eightBall === 4){
    console.log('Do not count on it')
} else if (eightBall === 5){
    console.log('My sources say no')
} else if (eightBall === 6){
    console.log('Outlook not so good')
} else if (eightBall === 7){
    console.log('It is certain')
} else {
    console.log('Not a valid number!')
}






