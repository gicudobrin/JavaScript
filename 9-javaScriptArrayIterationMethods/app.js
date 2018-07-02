//Create a random number from 1 to ten:


// function random100() {
//   return Math.floor(Math.random() * 10) + 1;
// }

// var ana = random100();
// console.log(ana);

// var carsRomania = ['Dacia', 'Oltcit', 'Aro'];
// var carsGermania = ['BMW', 'Mercedes', 'Volkswagen'];

// for(i = 0; i < carsRomania.length; i++){
// 	console.log(carsRomania[i]);
// }

// carsRomania.push('Malaxa', 'Daewoo');
// console.log(carsRomania[4]);

// const fruits = ['apple', 'pear', 'cherry'];

// for(let i = 0; i < fruits.length; i++){
// 	console.log(fruits[i]+'\n');
// }

// fruits.forEach(cacat => console.log(cacat));

// let capitalizedFruits = [];

// fruits.forEach(fruit => {
// 	let capitalizedFruit = fruit.toUpperCase();
// 	capitalizedFruits.push(capitalizedFruit);
// });

// console.log(capitalizedFruits);

// const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

// let total = 0;

// prices.forEach(price => {
// 	total += price;
// });

// console.log(total);

// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin']; // Result: ['Selma', 'Sam', 'Sharon'];

// let sNames = []; 

// names.forEach(name => {
// 	if (name.charAt(0) === 'S') {
// 		sNames.push(name);
// 	}
// });


// console.log(sNames);


// const numbers = [1,2,3,4,5];
// const no3 = numbers.filter(number => number !== 3);
// console.log(no3); 

// const evens = numbers.filter(number => number % 2 === 0);
// console.log(evens);


function fact(n){
	if (n === 0) {
		return 1;
	} else {
		return n * fact(n-1);
	}
}

console.log(fact(0));
console.log(fact(2));
console.log(fact(3));