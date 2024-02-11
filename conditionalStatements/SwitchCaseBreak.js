//Switch statment are better than if and else if we have a lot of cases 

let award = 'Tres Bien'
switch (award) {
  case 'Tres Bien' :
    console.log('You deserve a choclate!');
      break;
  case 'Assez Bien' :
    console.log('keep Going!');
      break;
  case 'Passable' :
    console.log('Work more');
      break;
  default:
    console.log('invalid');
      break;
}