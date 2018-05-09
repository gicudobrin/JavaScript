// const ernie = {
// 	animal: 'dog',
// 	age: 1,
// 	breed: 'pug',
// 	bark: function(){
// 		console.log('Woof!');
// 	}
// }

// console.log(ernie.animal);
// console.log(ernie.breed);
// ernie.bark();

class Pet{
	constructor(animal, age, breed, sound){
		this.animal = animal;
		this.age = age;
		this.breed = breed;
		this.sound = sound;
	}

	//this is a getter

	get activity(){
		const today = new Date();
		const hour = today.getHours();

		if (hour > 8 && hour <= 20){
			return 'playing';
		}	else {
			return 'sleeping';
		}
	}


	get owner(){
		return this._owner;
	}


	//this is a setter. it receive always only a single parameter.

	set owner(owner){
		this._owner = owner;
		console.log(`setter called: ${owner}`);
	}


	speak(){
		console.log(this.sound);
	}
}



class Owner{
	constructor(name, address){
		this.name = name;
		this.address = address;
	}

	set phone(phone){
		const phoneNormalized = phone.replace(/[^0-9]/g, '');
		this._phone = phoneNormalized	
	}

	get phone(){
		return this._phone;
	}
}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');

ernie.speak();
vera.speak();


console.log(ernie);
console.log(vera);

console.log(ernie.activity);

const data = new Date();
console.log(data.getHours());

ernie.owner = 'Claudiu';
console.log(ernie.owner);

ernie.owner = new Owner('Diana', 'str. Castanilor, nr. 17.');
ernie.owner.phone = '(555) 22222-222';

console.log(ernie.owner);


/*class Pet{
	constructor(animal, age){
		this.animal = animal;
		this.age = age;
		// so
	}
	speak(){
		console.log(this.animal);
	}
}

const boby = new Pet('dog', 12);
console.log(boby.age);
boby.speak();
boby.animal;
*/

const x=0;
console.log(x);
const ana = new Object();
ana.name = 'Diana';
ana.age = 12;
ana.address = 'Romania, Craiova';
ana.school = 'High school';
ana.weight = 78;
console.log(ana);


for(i in ana){
	console.log(i);
}