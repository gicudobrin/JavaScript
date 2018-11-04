const helloWorld = new Vue({
	el: '#helloVue',
	data: {
		title: "Hello World!",
		message: "This is my first Vue template!"
	}
});

const example = new Vue({
	el: '#example',
	data: {
		title: "Hello Nene!",
		message: "This is my daily program!",
		name: 'Diana',
		img: {
			src: 'https://placeimg.com/200/200/animals',
			alt: 'a placeholder'
		}
	}
});