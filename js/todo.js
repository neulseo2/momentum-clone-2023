const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // event.target.parentNode ---> to distinguish each button
  const parentLi = event.target.parentNode;
  parentLi.remove();
  toDos = toDos.filter(item => item.id !== parseInt(parentLi.id));
  saveToDos();
}

function paintToDo(newToDo) {

  // make variables for the li and span
  const li = document.createElement("li");
  const span = document.createElement("span");
  // the text of the span ---> newToDo
  span.innerText = newToDo;
  const btn = document.createElement("button");
  btn.innerText = "X";

  btn.addEventListener("click", deleteToDo)
  li.appendChild(btn);
  li.appendChild(span);
  toDoList.appendChild(li);

}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    // to get a "random" number
    id: Date.now()
  };
  toDos.push(newToDoObj);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}