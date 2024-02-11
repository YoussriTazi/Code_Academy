//Exercise 1
let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // prints Stranger

        //using short circuit evaluation
username = 'Youssri';
defaultName = username || 'Stranger';

console.log(defaultName); // prints Youssri

//Exercise 2
        //what if tool is falsy, with an empty string ''
let tool = '';

        // Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

        //what if tool is truthy, with the value 'marker'
tool = 'marker';

        // Use short circuit evaluation to assign  writingUtensil variable below:
writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
