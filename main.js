const $todoDiv = document.querySelector("#todo");
const $todoInput = document.querySelector("#todo-form__text");
const $todoButton = document.querySelector("#todo-form__button");
const $todoList = document.querySelector(".todo-list");

const addTodo = () => {
  $todoList.innerHTML =
    `
  <li class='todo-list__li'>
    <input type='checkbox'/>
    <span>${$todoInput.value}</span>
    <button class='todo-list__remove-button'>삭제</button>
  </li>
  ` + $todoList.innerHTML;

  $todoInput.value = "";
};

const addTodoEnter = (e) => {
  if (e.key !== "Enter") return;
  addTodo();
};

$todoList.addEventListener("change", (e) => {
  e.target.nextElementSibling.style.textDecoration = e.target.checked
    ? "line-through"
    : "none";
});

$todoButton.addEventListener("click", addTodo);
$todoInput.addEventListener("keyup", addTodoEnter);
