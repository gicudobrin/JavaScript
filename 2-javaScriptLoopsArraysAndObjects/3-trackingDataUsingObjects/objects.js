//Objects.

// var student = {
// 	name: 'Sarah',
// 	country: 'US',
// 	age: 35,
// 	treehouseStudent: true,
// 	skills: ['JavaScript', 'HTML', 'CSS']
// };

// function print(message){
// 	var outputDiv = document.getElementById('output');
// 	outputDiv.innerHTML = message;
// };

// // var ana = "<h1>Hello my name is " + student.country + "</h1>";
// // document.write("<h1>" + student.country + "</h1>");
// print(student.skills);

//Create a for-in loop.

// var student = {
// 	name : 'Sarah',
// 	country : 'US',
// 	age : 35,
// 	treehouseStudent : true,
// 	skills: ['JavaScript', 'HTML', 'CSS']
// };


// for (prop in student){
// 	document.write('<br>' + prop);
// }


//
// var students = [
// 	{
// 		name: 'Dave',
// 		track: 'Front End Development',
// 		achievements: 158,
// 		points: 14730
// 	},
// 	{
// 		name: 'Jody',
// 		track: 'iOS Development',
// 		achievements: 175,
// 		points: 16375
// 	},
// 	{
// 		name: 'Jordan',
// 		track: 'PHP Development',
// 		achievements: 55,
// 		points: 2025
// 	},
// 	{
// 		name: 'John',
// 		track: 'Learn WordPress',
// 		achievements: 135,
// 		points: 19730
// 	}
// ];

// var message = "";
// var student;
// var search;

// function print(message){
// 	var outputDiv = document.getElementById('output');
// 	outputDiv.innerHTML = message;
// }

// function getStudentReport(student){
// 	var report = '<h2>Student: ' + student.name + '</h2>';
// 	report += '<p>Track: ' + student.track + '</p>';
// 	report += '<p>Points: ' + student.points + '</p>';
// 	report += '<p>Achievements: ' + student.achievements + '</p>';
// 	return report;
// }

// while (true){
// 	search = prompt('Search student records: type a name [Jody] (or type "quit" to end)');
// 	if (search === null || search.toLowerCase() === 'quit'){
// 		break;
// 	}

// 	for (var i = 0; i < students.length; i +=1){
// 	student = students[i];
// 	if (student.name === search){
// 		message = getStudentReport(student);
// 		print(message);
// 		}
// 	}
// }