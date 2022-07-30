let userInput = document.getElementById("user-input");
const addToDoBtn = document.getElementById("add-todo-btn");
let toDoList = document.getElementById("user-list");
let warning = document.querySelector(".warning");
let checkbox = document.querySelectorAll(".checkbox");

let toDoListArray = Array.from(toDoList);

function resetInputs() {
	userInput.value = "";
}

function addToList(newToDo) {
	const listItemContainer = document.createElement("div");
	const listItemToDoContainer = document.createElement("span");
	const listItemBtnContainer = document.createElement("span");
	const li = document.createElement("li");
	const checkbox = document.createElement("input");
	const button = document.createElement("button");
	newToDo = userInput.value;

	if (newToDo === "" || newToDo === " ") {
		// Sets warning opacity to 1 so it appears if the user goes to add an empty task
		warning.style.opacity = 1;
	} else {
		// Sets warning opacity to 0 so it never appears when a valid task is entered
		warning.style.opacity = 0;

		// Inserts div container to toDoList (ul) and sets it's class
		toDoList.appendChild(listItemContainer);
		listItemContainer.setAttribute("class", "list-item-container");

		// Inserts List ToDo Container inside div container
		listItemContainer.appendChild(listItemToDoContainer);
		//Sets class of List ToDo Container
		listItemToDoContainer.setAttribute("class", "list-item-todo-container");
		// Inserts list item to List ToDo container
		listItemToDoContainer.appendChild(li);

		// Inserts input (to become checkbox below) into div container, before list item
		listItemToDoContainer.insertBefore(checkbox, li);
		// Sets input to checkbox for task completion
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("class", "checkbox");
		li.textContent = newToDo;

		// Inserts containing div for delete task button
		// listItemContainer.append(listItemBtnContainer);
		// listItemBtnContainer.setAttribute("class", "list-item-btn-container");
		// // Inserts task delete button after list item.
		// listItemBtnContainer.append(button);
		// button.textContent = "Delete";
		// button.setAttribute("id", "delete-btn");
		// button.setAttribute("class", "delete-btn");
	}
}

function addToDo() {
	addToList();
	resetInputs();
}

addToDoBtn.addEventListener("click", addToDo);
