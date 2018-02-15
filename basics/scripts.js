// var visitor = prompt("What is your name?");
// var message = "Hello " + visitor;
// document.write(message);

// var stringToshout = prompt("What should I shout?");
// var shout = stringToshout.toUpperCase();
// shout += '!!!';
// alert(shout);

// var questions = 3;
// var questionsLeft = ' [' + questions + ' questions left]';
// var adjective = prompt("Please type an adjective" + questionsLeft);
// questions -= 1;
// questionsLeft = ' [' + questions + ' questions left]';
// var verb = prompt("Please type a verb" + questionsLeft);
// questions -= 1;
// questionsLeft = ' [' + questions + ' questions left]';
// var noun = prompt("Please type a noun" + questionsLeft);
// alert("All done! Ready for the message?");
// var sentence = "<h1>There once was a " + adjective;
// sentence += " programmer who wanted to use JavaScript to " + verb;
// sentence += " the " + noun + ".</h1>";
// document.write(sentence);

// var secondsPerMinut = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var secondsPerDay = secondsPerMinut * minsPerHour * hoursPerDay;
// document.write("</h1>" + "There are " + secondsPerDay + " seconds in a day" + "</h1>");

// var dieRoll = Math.floor(Math.random() * 6);
// alert("You rolled a " + dieRoll);

// var input1 = "Please type a starting number";
// var bottomNumber = parseInt(input1);
// var input = prompt("Please type a number");
// var topNumber = parseInt(input);
// var randomNumber = Math.floor(Math.random() * topNumber) + 1;
// var message = "<h1>" + randomNumber + " is a number between 1 and " + topNumber + ".</h1>";
// document.write(message);

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




//Quiz application

//quiz begin, no answers correct
// var correct = 0;

// // //ask questions

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

// //output results

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

// Create a function in JavaScript.
// function alertRandom() {
//  var randomNumber = Math.floor(Math.random() * 6) + 1;
//  alert(randomNumber);
// }

// alertRandom();

// function isEmailEmpty(){
// 	var field = document.getElementById("email");
// 	if (field.value === ''){
// 		return true;
// 	}	else {
// 		return false;
// 	}
// }
// var fieldTest = isEmailEmpty();
// if (fieldTest === true){
// 	alert("Please provide your email address")
// }

// isEmailEmpty();

// function goToCoffeShop(drink, beer){
// 	alert(drink + " and " + beer + " are on the way!");
// }
// goToCoffeShop("Milk", "Heineken");

//Calculate the area of a rectangle.

// function getArea(length, width, unit){
// 	var area = length * width;
// 	return area + " " + unit;
// }
// document.write( "<h1>" + getArea(10,2.5,"square meters") + "</h1>");

//create a function that return the maximum between two numbers.
// function max(num1, num2){
//   if (num1 > num2){
//   	return (num1 + " is the maximum number");
//   }	else if (num1 === num2) {
//   	return (num1 + " is equal with " + num2 + " and the maximum is " + num1);
//   } else {
//   	return (num2 + " is the maximum number")
//   }
// }
// document.write( "<h1>" + max(2.2,2.21) + "</h1>");

// function getRandomNumber(lower, upper){
// 	if (isNaN(lower) || isNaN(upper)){
// 		throw new Error ("Both arguments must be numbers!");
// 	}
// 	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
// }
// document.write("<h1>" + getRandomNumber(1,24) + "</h1>");
// document.write("<h1>" + getRandomNumber("nine", 9) + "</h1>");