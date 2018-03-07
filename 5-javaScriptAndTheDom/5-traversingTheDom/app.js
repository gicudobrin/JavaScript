// const listItems = document.getElementsByTagName('li');

// for(let i = 0; i < listItems.length; i++){
// 	listItems[i].addEventListener('mouseover', () => {
// 		listItems[i].textContent = listItems[i].textContent.toUpperCase();
// 	})
// 	listItems[i].addEventListener('mouseout', () => {
// 		listItems[i].textContent = listItems[i].textContent.toLowerCase();
// 	})

// }

function atachListItemButtons(li){
	let up = document.createElement('button');
	up.className = 'up';
	up.textContent = 'Up';
	li.appendChild(up);

	let down = document.createElement('button');
	down.className = 'down';
	down.textContent = 'Down';
	li.appendChild(down);

	let remove = document.createElement('button');
	remove.className = 'remove';
	remove.textContent = 'Remove';
	li.appendChild(remove);
}





const listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');
listUl.addEventListener('click', (event) => {
	if (event.target.tagName == 'BUTTON') {
		let li = event.target.parentNode;
		let ul = li.parentNode;
		ul.removeChild(li);
	}
})

// document.addEventListener('click', (event) => {
// 	console.log(event.target);
// })