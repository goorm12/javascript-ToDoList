const $todoInput = document.querySelector("#todo-form__text");
const $todoList = document.querySelector(".todo-list");
const $todoForm = document.querySelector("#todo-form");

const addTodo = (e) => {
  e.preventDefault();

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

$todoList.addEventListener("click", (e) => {
  if (!e.target.matches(".todo-list__remove-button")) {
    return;
  }
  e.target.parentNode.remove();
});

$todoForm.addEventListener("submit", addTodo);
