let toDoList = [];
const userInput = document.getElementById("user-input");
const addToDoBtn = document.getElementById("add-todo-btn");
const toDoListUl = document.getElementById("user-list");
let toDoListFromLocalStorage = JSON.parse(localStorage.getItem("toDoList"));

if (toDoListFromLocalStorage) {
	toDoList = toDoListFromLocalStorage;
	renderToDoList();
}

addToDoBtn.addEventListener("click", function () {
	toDoList.push(userInput.value);
	userInput.value = "";
	localStorage.setItem("toDoList", JSON.stringify(toDoList));
	renderToDoList();
});

function renderToDoList() {
	let toDoListItems = "";
	for (let i = 0; i < toDoList.length; i++) {
		toDoListItems += `
      <li>${toDoList[i]}</li>
    `;
	}
	toDoListUl.innerHTML = toDoListItems;
}
