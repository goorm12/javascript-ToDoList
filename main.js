const $todoDiv = document.querySelector("#todo");
const $todoInput = document.querySelector("#todo-form__text");
const $todoButton = document.querySelector("#todo-form__button");
const $todoList = document.querySelector("#todo-form__list");

const addTodo = (e) => {
  if (e.key !== "Enter") return;
  $todoList.innerHTML = `
    <li>
      <input type='checkbox' />
      ${$todoInput.value}
      <button class='todo-form__list--remove-button'>삭제</button>
    </li>
  `;
};

$todoInput.addEventListener("keyup", addTodo);
