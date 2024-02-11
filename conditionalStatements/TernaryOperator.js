// First Example for using Ternary Operator

let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}
    //Ternary operator method
isLocked ?   console.log('You will need a key to open the door.') :   console.log('You will not need a key to open the door.');

//Second Example

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}
    //Ternary operator method
isCorrect ? console.log('Correct!') :  console.log('Incorrect!');

//Third Example
let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

    //Ternary operator method by making sure that favorite phrase is love that
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");







