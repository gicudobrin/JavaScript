// DOM = Document Object Model

// DOM stands for Document Object Model. The DOM is a representation of a webpage that JavaScript can use. 
// Changes that JavaScript makes to the DOM alter the web page.




const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
	myHeading.style.color = myTextInput.value;
});

const myParagraph = document.getElementsByTagName('p');
document.write (myParagraph.length);

const myList = document.getElementsByTagName('li')[0];
myList[2].style.color = 'red';

for (let i = 0; i < myList.length; i +=1){
	myList[i].style.color = 'purple';
}

const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < errorNotPurple.length; i +=1){
	errorNotPurple[i].style.color = 'orange';
}

document.querySelectorAll('li');// return the hole collection
document.querySelector('li');// only the first one

document.querySelector('#myHeading');
document.querySelectorAll('.error-not-purple');


const evens = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < evens.length; i +=1){
	evens[i].style.backgroundColor = 'lightgray';
}