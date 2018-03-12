// var answer = prompt("What programming language is the name of a gem?");
// if (answer.toUpperCase() === "RUBY"){
// 	document.write("<h1>That's right!</h1>");
// } else {
// 	document.write("<h1>Sorry! That's wrong</h1>");
// }

// var correctGuess = false;
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
// if (parseInt(guess) === randomNumber){
// 	correctGuess = true;
// } else if (parseInt(guess) < randomNumber) {
// 	var guessMore = prompt("Try again. The number I am thinking of is more than " + guess);
// 	if (parseInt(guessMore) === randomNumber){
// 		correctGuess = true;
// 	}
// } else if (parseInt(guess) > randomNumber){
// 	var guessLess = prompt("Try again. The number I am thinking of is less than " + guess);
// 	if (parseInt(guessLess) === randomNumber){
// 		correctGuess = true;
// 	}
// }
// if (correctGuess){
// document.write("<h1>You guessed the number</h1>");
// }
// else{
// 	document.write("<h1>Sorry! The number was " + randomNumber + ".</h1>");
// }


// Quiz application

// quiz begin, no answers correct
// var correct = 0;

// ask questions

// var answer1 = prompt("Name a programming language that's also a gem");
// if (answer1.toUpperCase() === "RUBY"){
// 	correct +=1;
// }
// var answer2 = prompt("Name a programming language that's also a snake");
// if (answer2.toUpperCase() === "PYTHON"){
// 	correct +=1;
// }
// var answer3 = prompt("What language do you use to style web pages?");
// if (answer3.toUpperCase() === "CSS"){
// 	correct +=1;
// }
// var answer4 = prompt("What language do you use to build the structure of web pages?");
// if (answer4.toUpperCase() === "HTML"){
// 	correct +=1;
// }
// var answer5 = prompt("What language do you use to add interactivity to the web pages?");
// if (answer5.toUpperCase() === "JAVASCRIPT"){
// 	correct += 1;
// }

// output results

// document.write("<h1>You got " + correct + " out of 5 questions correct</h1><br>");

// output rank

// if (correct === 5){
// 	document.write("<h1><strong>You earned a gold crown!</strong></h1>");
// } else if (correct >= 3){
// 	document.write("<h1><strong>You earned a silver crown!</strong></h1>");
// } else if (correct >=1){
// 	document.write("<h1><strong>You earned a bronze crown!</strong></h1>");
// } else {
// 	document.write("<h1>No crown for you. You need to study.</h1>");
// }