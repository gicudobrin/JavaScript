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
// 	} else {
// 		return false;
// 	}
// }
// var fieldTest = isEmailEmpty();
// if (fieldTest === true){
// 	alert("Please provide your email address")
// }

// isEmailEmpty();


// function getYear(){
//   var year = new Date().getFullYear();
//   return year;
// }

// alert(getYear());


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

// create a function that return the maximum between two numbers.
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