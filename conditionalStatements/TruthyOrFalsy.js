let wordCount = 7;
    //truthy response is not 0 so the code run this block
if (wordCount) {
  console.log("Great! You've started your work!");
    //Falsy response in case that the value is falsy (0, null, undefined, empty string "" or '')
} else {
  console.log('Better get to work!');
}

//we have an empty string which is considered Falsy
let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
//the code run the else block since it is falsy  
} else {
  console.log('This string is definitely empty.');
}