// var shoppingList = ['carrots', 'milk', 'eggs'];

// console.log(shoppingList[0]);
// console.log(shoppingList.length);
// shoppingList[shoppingList.length] = 'beer';
// console.log(shoppingList);
// shoppingList.push('water', 'wine');//add items to the end of an array
// console.log(shoppingList);
// shoppingList.unshift('bread','glasses');//add items to the begin of an array
// console.log(shoppingList);

// shift//remove the first item
// pop//remove the last item


//Create an array and iterate through it.

// var students = ['Sascha', 'Lynn', 'Jennifer', 'Paul'];

// document.write("<h1>The elements of the array are:</h1><br>");

// for (var i = 0; i < students.length; i += 1){
// 	document.write("<h1>" + students[i] + "</h1>" + "<br><br>");
// }

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
// var afiseaza = students.join(', ');
// document.write("<h1>" + afiseaza + "</h1>");
// // var index = students.indexOf("Lynn");
// // document.write("<h1>" + index + "</h1>");
// alert(afiseaza);


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

//two-dimensional arrays = a list containing other list.

// var grades = [
// 	[78, 89, 90],
// 	[45, 67, 76],
// 	[56, 34, 45]
// ]


//Quiz challenge.

var questions = [
	['How many states are in the United States?', 50],
	['How many continents are there?', 7],
	['How many legs does an insect have?', 6]
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print(message){
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}

function buildList(arr){
	var listHTML = '<ol>';
	for (var i = 1; i < arr.length; i+=1){
		listHTML += '<li>' + arr[i] + '</li>';
	}
	listHTML += '</ol>';
	return listHTML;
}

for(var i=0; i<questions.length;i+=1){
	question = questions[i][0];
	answer = questions[i][1];
	response = parseInt(prompt(question));
	if(response === answer){
		correctAnswers +=1;
		correct.push(question);
	} else {
		wrong.push(question);
	}
}

html = "You got " + correctAnswers + " question(s) right!";
html += "<h2>You got these question(s) correct:</h2>";
html += buildList(correct);
html += "<h2>You got these question(s) wrong:</h2>";
html += buildList(wrong);
print(html);