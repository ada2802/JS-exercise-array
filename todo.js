var lists =["read a chapter"];

var thing = prompt("what would you like to do?");

while(thing !== "quit") {
	
	if (thing ==="new") {
	var thing = prompt("Add A Todo");
	lists.push(thing);
	} else if (thing ==="list") {
	console.log("list all Todos");
	console.log(lists);
	}

	var thing = prompt("what would you like to do?");
}

console.log("Quit App");
