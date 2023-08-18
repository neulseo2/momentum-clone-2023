const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

// saving toDos in local storage
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // turn the toDos array into string
}
// handleToDoSubmit 함수에서 사용하는 함수로, 오브젝트의 밸류로 '저장'하기 위한 과정이다: * setter *
// localStorage.setItem 을 사용, object를 만들어준다: setItem(key, value);
// 오브젝트의 밸류는 스트링이어야하기 때문에, JSON.stringify() 를 사용, toDos array (line7) 를 스트링으로 변환한다.
// 이렇게 만들어진 오브젝트는 handleToDoSubmit() 에서 불려지고(line49), displayToDo()를 거쳐 화면에 보여진다.
// setter and getter 비교: savedToDos(line52) variable은, localStorage에 function saveToDos()를 거쳐 저장된(setter) 정보를 가져온다(getter).
// setter 에서는 오브젝트에 저장을 해야하니까 array -> string 으로 바꿔주고, getter 에서는 저장된 값을 자바스크립트가 읽어야하니까, string -> array 로 바꿔준다.

function deleteToDo(event) {
  const liSelected = event.target.parentNode;// ---> distinguishes each button
  liSelected.remove(); // removes selected list
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(liSelected.id)); // keeps the toDos that are not selected
  saveToDos();
}

// function to add todo lists on HTML
function displayToDo(newToDoObj) {
  const liCreated = document.createElement("li");
  liCreated.id = newToDoObj["id"]; // because newToDo is ---> handleTodoSubit()'s newToDoObj{}
  // adding an id attribute to li tag on HTML same as ---> the localStorage's obj's key("id")'s value.
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", deleteToDo)
  liCreated.appendChild(span);
  liCreated.appendChild(btn);
  toDoList.appendChild(liCreated);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now() // to get a "random" number
  }; // saves the input in obj with id -- more organized
  toDos.push(newToDoObj);
  displayToDo(newToDoObj); // represents the value of the input
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // * getter *

if (savedToDos) { // typeof savedToDos === string
  const parsedToDos = JSON.parse(savedToDos); // turning the string value into an array
  toDos = parsedToDos;
  // initially, toDos starts with an empty array. But if the array exstis already,
  // instead of replacing the old values, restore them and add new values
  parsedToDos.forEach(displayToDo); // each eleement in the array 를 displayToDo 로 보낸다.
}
