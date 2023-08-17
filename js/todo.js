const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  event.preventDefault();
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // event.target.parentNode ---> to distinguish each button
  const parentLi = event.target.parentNode;
  parentLi.remove();
  toDos = toDos.filter(item => item.id !== parseInt(parentLi.id));
  saveToDos();
}

// function to add todo lists on HTML
function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  li.appendChild(span);

  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", deleteToDo)
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now() // to get a "random" number
  };
  toDos.push(newToDoObj);
  paintToDo(newToDo); // represents the value of the input
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}