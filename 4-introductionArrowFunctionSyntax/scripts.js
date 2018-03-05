//ECMASCRIPT2015  ES6

const name = "Andrew";

//function declaration

// function sayName(){
// 	const message = "My name is " + name;
// 	console.log(message);
// }

function sayBye(){
	console.log("Bye " + name);
}

// sayName();
// sayBye();

//function expression 

// const sayName = function(){
// 	const message = "My name is " + name;
// 	console.log(message);
// }

//arrow function expression 

const sayName = () => {
	const message = "My name is " + name;
	console.log(message);
}

const square = (x) =>{
	return x * x;
}

//multiple arguments

const multiply = (x,y) =>{
	return x * y
}

console.log(multiply(5,4));

//arrow function expression - concise

const square = x => x * x;