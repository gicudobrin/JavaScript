// const myHeading = document.getElementById('myHeading');
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');

// myButton.addEventListener('click', () => {
// 	myHeading.style.color = myTextInput.value;
// });

// const myParagraph = document.getElementsByTagName('p');
// document.write (myParagraph.length);

// const myList = document.getElementsByTagName('li');

// for (let i = 0; i < myList.length; i +=1){
// 	myList[i].style.color = 'purple';
// }

// const errorNotPurple = document.getElementsByClassName('error-not-purple');

// for (let i = 0; i < errorNotPurple.length; i +=1){
// 	errorNotPurple[i].style.color = 'red';
// }

// // document.querySelectorAll('li');
// // document.querySelector('li');

// // document.querySelector('#myHeading');
// // document.querySelectorAll('.error-not-purple');


// const evens = document.getElementsByClassName('li:nth-child(even)');

// for (let i = 0; i < evens.length; i +=1){
// 	evens[i].style.backgroundColor = 'lightgray';
// }

//Making changes to the DOM.

// let myHeading = document.querySelector('h1');
// myHeading.textContent = "This is a new heading";

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

toggleList.addEventListener('click', () => {
	if (listDiv.style.display == 'none'){
		toggleList.textContent = 'Hide list';
		listDiv.style.display = 'block';
	}	else {
		toggleList.textContent = 'Show list';
		listDiv.style.display = 'none';}
});


button.addEventListener('click', () => {
	p.textContent = input.value + ':';
});

addItemButton.addEventListener('click', () => {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.createElement('li');
	li.textContent = addItemInput.value;
	ul.appendChild(li);
	addItemInput.value ='';
});