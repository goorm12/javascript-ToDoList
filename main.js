const $todoInput = document.querySelector("#todo-form__text");
const $todoButton = document.querySelector("#todo-form__button");
const $todoList = document.querySelector(".todo-list");

const addTodo = () => {
  if ($todoInput.value.trim() === "") return;
  $todoList.innerHTML =
    `
  <li class='todo-list__li'>
    <input type='checkbox' class="todo-list__checkbox"/>
    <span>${$todoInput.value}</span>
    <button class='todo-list__remove-button'>삭제</button>
  </li>
  ` + $todoList.innerHTML;

  $todoInput.value = "";
};

const addTodoEnter = (e) => {
  if (e.key !== "Enter" && e.target.value.trim() !== "") return;
  addTodo();
};

$todoList.addEventListener("click", (e) => {
  if (!e.target.matches(".todo-list__remove-button")) {
    return;
  }
  e.target.parentNode.remove();
});

$todoButton.addEventListener("click", addTodo);
$todoInput.addEventListener("keyup", addTodoEnter);
