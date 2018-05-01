

// Ask for user's name
var userName = prompt('Hi! What is your name!');

// Greet the user by name in an alert
alert('Hi,'+ userName + ' thanks for stopping by');
// Log that to the console
console.log('The user said their name is'+ userName);

// Ask the first guessing game question
var answer1 = prompt('Do you thing I have any sibling?');

// User gueses"yes/no" or "Y/N"

// if(condition is true){
//     do this stuff
// } else{
//     do this
// }
if(answer1 === 'yes' && answer1 ==='y'){
// right answer
alert('You got it right!!!');
console.log('The user got the correct answer(yes)');
//  wrong answer
alert('Fail');
console.log('The user got the wrong answer(No)');
}
// Tell user if they are wrong or right
// Next question