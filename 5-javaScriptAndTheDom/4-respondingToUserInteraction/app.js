// const listItems = document.getElementsByTagName('li');

// for(let i = 0; i < listItems.length; i++){
// 	listItems[i].addEventListener('mouseover', () => {
// 		listItems[i].textContent = listItems[i].textContent.toUpperCase();
// 	})
// 	listItems[i].addEventListener('mouseout', () => {
// 		listItems[i].textContent = listItems[i].textContent.toLowerCase();
// 	})

// }

const listDiv = document.querySelector('.list');
listDiv.addEventListener('mouseover', (event) => {
	if (event.target.tagName == 'LI') {
		event.target.textContent = event.target.textContent.toUpperCase();
	}
})
listDiv.addEventListener('mouseout', () => {
	if (event.target.tagName == 'LI') {
		event.target.textContent = event.target.textContent.toLowerCase();
	}
})

// document.addEventListener('click', (event) => {
// 	console.log(event.target);
// })