// function randomNumber(upper){
// 	return Math.floor(Math.random() * upper) + 1;
// }
// var counter = 0;
// while(counter < 22){
// 	var randNum = randomNumber(6);
// 	document.write(randNum + ' ');
// 	counter += 1;
// }


// var count = 0;
// while(count<10){
//   document.write('<h1>' + count + ' ' + '</h1>');
//   count += 1;
// }

// Guess a number between 1 and 10000 by the computer
// var upper = 10000;
// var randomNumber = getRandomNumber(upper);
// var guess;
// var attempts = 0;

// function getRandomNumber(upper){
// 	return Math.floor(Math.random() * upper) + 1;	
// }

// while(guess !== randomNumber){
// 	guess = getRandomNumber(upper);
// 	attempts += 1;	
// }
// document.write("<h1>The random number was: " + randomNumber + "</h1>");
// document.write("<h1>It took the computer " + attempts + " attempts to get it right.</h1>");

// var secret = prompt("What is the secret password?");

// while(secret !== "sesame") {
//   secret = prompt("That's not it! Try again");
// }

// document.write("You know the secret password. Welcome.");


//Create an array and iterate through it.

// var students = ['Sascha', 'Lynn', 'Jennifer', 'Paul'];

// document.write("<h1>The elements of the array are:</h1><br>");

// for (var i = 0; i < students.length; i += 1){
// 	document.write("<h1>" + students[i] + "</h1>" + "<br><br>");
// }

// var i = students.length;
// console.log(i);

//Create a playlist.

// var playList = [
// 	"I did it my way",
// 	"Respect",
// 	"Imagine",
// 	"Born to run",
// 	"Louie Louie",
// 	"Maybellene"
// ];

// function print(message){
// 	document.write(message);
// }

// function printList(list){
// 	var listHtml = "<ol>";
// 	for (i = 0; i < list.length; i +=1){
// 		listHtml += "<li>" + list[i] + "</li>";
// 	}
// 	listHtml += "</ol>";
// 	print(listHtml);
// }
// printList(playList);


// var students = ['Sascha', 'Lynn', 'Jennifer', 'Paul'];
// var afiseaza = students.join(' ,     ');
// document.write("<h1>" + afiseaza + "</h1>");
// var index = students.indexOf("Lynn");
// document.write("<h1>" + index + "</h1>");

//Grocery list.


// var inStock = ['apples', 'eggs', 'milk', 'cookies', 'chesse', 'bread', 'lettuce', 'carrot', 
// 			'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'
// 			];
// var search;

// function print(message){
// 	document.write("<h1>" + message + "</h1>");
// }

// while  (true) {
// 	search = prompt("Search for a product in our store. Type 'list' to show all of the products or 'quit' to exit");
// 	if (search === 'quit') {
// 		break;
//  	}	else if (search === 'list') {
//  		print( inStock.join(', ') );
// 	}	else {
// 		if (inStock.indexOf(search) > -1){
// 			print("<h1>Yes we have " + search + " in the store.</h1>");
// 			}	else {
// 				print("<h1>" + search + " is not in the store</h1>");
// 			}
// 	}
// }


//Quiz challenge.

// var questions = [
// 	['How many states are in the United States?', 50],
// 	['How many continents are there?', 7],
// 	['How many legs does an insect have?', 6]
// ];

// var correctAnswers = 0;
// var question;
// var answer;
// var response;
// //var html;
// var correct = [];
// var wrong = [];

// function print(message){
// 	var outputDiv = document.getElementById('output');
// 	outputDiv.innerHTML = message;
// }

// function buildList(arr){
// 	var listHTML = '<ol>';
// 	for (var i = 1; i < arr.length; i+=1){
// 		listHTML += '<li>' + arr[i] + '</li>';
// 	}
// 	listHTML += '</ol>';
// 	return listHTML;
// }

// for(var i=0; i<questions.length;i+=1){
// 	question = questions[i][0];
// 	answer = questions[i][1];
// 	response = parseInt(prompt(question));
// 	if(response === answer){
// 		correctAnswers +=1;
// 		correct.push(question);
// 	}else {
// 		wrong.push(question);
// 	}
// }

// html = "You got " + correctAnswers + " question(s) right!";
// html += "<h2>You got these question(s) correct:</h2>";
// html += buildList(correct);
// html += "<h2>You got these question(s) wrong:</h2>";
// html += buildList(wrong);
// print(html);


//Objects.

// var student = {
// 	name: 'Sarah',
// 	country: 'US',
// 	age: 35,
// 	treehouseStudent: true,
// 	skills: ['JavaScript', 'HTML', 'CSS']
// };

// function print(message){
// 	var outputDiv = document.getElementById('output');
// 	outputDiv.innerHTML = message;
// };

// // var ana = "<h1>Hello my name is " + student.country + "</h1>";
// // document.write("<h1>" + student.country + "</h1>");
// print(student.skills);

//Create a for-in loop.

// var student = {
// 	name : 'Sarah',
// 	country : 'US',
// 	age : 35,
// 	treehouseStudent : true,
// 	skills: ['JavaScript', 'HTML', 'CSS']
// };


// for (prop in student){
// 	document.write('<br>' + prop);
// }


//
// var students = [
// 	{
// 		name: 'Dave',
// 		track: 'Front End Development',
// 		achievements: 158,
// 		points: 14730
// 	},
// 	{
// 		name: 'Jody',
// 		track: 'iOS Development',
// 		achievements: 175,
// 		points: 16375
// 	},
// 	{
// 		name: 'Jordan',
// 		track: 'PHP Development',
// 		achievements: 55,
// 		points: 2025
// 	},
// 	{
// 		name: 'John',
// 		track: 'Learn WordPress',
// 		achievements: 135,
// 		points: 19730
// 	}
// ];

// var message = "";
// var student;
// var search;

// function print(message){
// 	var outputDiv = document.getElementById('output');
// 	outputDiv.innerHTML = message;
// }

// function getStudentReport(student){
// 	var report = '<h2>Student: ' + student.name + '</h2>';
// 	report += '<p>Track: ' + student.track + '</p>';
// 	report += '<p>Points: ' + student.points + '</p>';
// 	report += '<p>Achievements: ' + student.achievements + '</p>';
// 	return report;
// }

// while (true){
// 	search = prompt('Search student records: type a name [Jody] (or type "quit" to end)');
// 	if (search === null || search.toLowerCase() === 'quit'){
// 		break;
// 	}

// 	for (var i = 0; i < students.length; i +=1){
// 	student = students[i];
// 	if (student.name === search){
// 		message = getStudentReport(student);
// 		print(message);
// 		}
// 	}
// }
