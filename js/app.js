let userInput = document.getElementById("user-input");
const addToDoBtn = document.getElementById("add-todo-btn");
let toDoList = document.getElementById("user-list");
let warning = document.querySelector(".warning");

function resetInputs() {
	userInput.value = "";
}

function addToList(newToDo) {
	const li = document.createElement("li");
	newToDo = userInput.value;

	if (newToDo === "") {
		console.log("task empty");
		warning.style.opacity = 1;
	} else {
		toDoList.appendChild(li);
		li.textContent = newToDo;
		warning.style.opacity = 0;
	}
}

function addToDo() {
	addToList();
	resetInputs();
}

addToDoBtn.addEventListener("click", addToDo);
