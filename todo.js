/*
var lists =["read a chapter"];

var thing = prompt("what would you like to do?");

while(thing !== "quit") {
	
	if (thing ==="new") {
		var thing = prompt("Add A Todo");
		lists.push(thing);}
	else if (thing ==="list") {
		console.log("list all Todos");
		console.log(lists);}

	var thing = prompt("what would you like to do?");
}

console.log("Quit App");
*/

var lists =["read a chapter"];

var thing = prompt("what would you like to do?");

function addTodo (){
		var thing = prompt("Add A Todo");
		lists.push(thing);
		console.log("Task added")
}

function listTodo(){
		console.log("++++++++++++++++");
		lists.forEach(function(thing,i) {
			console.log(i + ":" + thing);
		});
		console.log("++++++++++++++++");
}

function deleteTodo(){
		var index = prompt("Enter index of todo to delete");
		lists.splice(index, 1);
		console.log("Delete task");
}

while(thing !== "quit") {
	
	if (thing ==="new") {
		addTodo();}

	else if (thing ==="list") {
		listTodo();}
	else if (thing ==="delete") {
		deleteTodo();}
	var thing = prompt("what would you like to do?");
}

console.log("Quit App");


