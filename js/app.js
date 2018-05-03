'use strict';

//SCRIPT FOR INDEX.HTML
var userName;
function userName() {
	// Ask for user's name
	var userName = prompt('Hi! What is your name!');

	// Greet the user by name in an alert
	alert('Hi,' + userName + ' thanks for stopping by');
	// Log that to the console
	console.log('The user said their name is' + userName);
}

function answer1() {
	// Ask the first guessing game question
	var answer1 = prompt('Do you thing I have any sibling?');

	// User gueses"yes/no" or "Y/N"

	// if(condition is true){
	//     do this stuff
	// } else{
	//     do this
	// }
	if (answer1 === 'yes' || answer1 === 'y') {
		//wrong answer
		alert('Unfortunately I was born under the one child policy era, I always want to have one tho');
		console.log('The user got the wrong answer to #1 (NOPE, I have a sibling)');
	} else {
		//right answer
		alert('Wish I have one!');
		console.log('The user got the correct answer to #1 (Yup,I am sibling-free)');
	}
}

function answer2() {
	// Tell user if they are wrong or right
	// Next question
	// var answer2 = prompt('');
	// if (answer2 === 'yes' || answer2 === 'y') {
	// 	// right answer
	// 	alert('YUP');
	// 	console.log('The user got the correct answer to #2');
	// } else {
	// 	//wrong answer
	// 	alert('Nah');
	// 	console.log('The user got the wrong answer to #2');
	// }
	var answer2 = prompt('I once spend entire night at Vegas only play slot machine');
	if (answer2 === 'yes' || answer2 === 'y') {
		// right answer
		alert('I lose quite a lot that night');
		console.log('The user got the correct answer to #2');
	} else {
		//wrong answer
		alert('I have learned my lesson');
		console.log('The user got the wrong answer to #2');
	}
}
function answer3() {
	var answer3 = prompt('I particiated seattle color run last year');
	if (answer3 === 'yes' || answer3 === 'y') {
		//right answer
		alert('3 miles was not that hard,right');
		console.log('The user got the correct answer to #3');
	} else {
		//wrong answer
		alert('3 miles was not that hard,right');
		console.log('The user got the wrong answer to #3');
	}
}

function answer4() {
	var answer4 = prompt('As a Chinese myself,do you think I like fortune cookie?');
	if (answer4 === 'yes' || answer4 === 'y') {
		//wrong answer
		alert('What is FORTUNE COOKIE!?');
		console.log('The user got the wrong answer to #4');
	} else {
		//right answer
		alert('IT IS NOT EVEN A THING!');
		console.log('The user got the correct answer to #4');
	}
}


// SCRIPT FOR QUESTIONS.HTML




function myFunction() {
	document.getElementById('quiz1').innerHTML = myFunction;
}


function myFunction() {
	document.getElementsByClassName('rightAnswer').innerHTML = myFunction;
}

// Function invocation
userName();
answer1();
answer2();
answer3();
answer4();