let userInput = document.getElementById("user-input");
const addToDoBtn = document.getElementById("user-submit-btn");
let toDoList = document.getElementById("user-list");
let toDoListArray = [];

function listFromArray() {
	toDoListArray.forEach((toDo) => {
		let li = document.createElement("li");
		toDoList.append(li);
		li.textContent += toDo;
	});
}

function resetInputs() {
	userInputValue = "";
	userInput.value = "";
}

function addToDo() {
	let userInputValue = userInput.value;
	toDoListArray.push(userInputValue);
	console.log(toDoListArray);
	console.log(userInputValue);
	listFromArray();
	resetInputs();
}

addToDoBtn.addEventListener("click", addToDo);
