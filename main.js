const todoDiv = document.querySelector("#todo");
const todoInput = document.querySelector("#todo-form__text");
const todoButton = document.querySelector("#todo-form__submit-button");
const todoList = document.querySelector("#todo-form__list");

function addButton(e) {
  const todoText = todoInput.value.trim();

  e.preventDefault();
  if (todoText === "") {
    alert("할 일을 입력해주세요!");
  } else {
    const item = document.createElement("div");
    const checkbox = document.createElement("input");
    const text = document.createElement("span");
    const button = document.createElement("button");

    todoList.appendChild(item).classList.add("todo-form__list-content");
    item.appendChild(checkbox).classList.add("todo-form__list--checkbox");
    item.appendChild(text).classList.add("todo-form__list-text");
    item.appendChild(button).classList.add("todo-form__list--remove-button");

    text.textContent = todoText;
    button.textContent = "삭제하기";
    checkbox.type = "checkbox";
  }
}

todoButton.addEventListener("click", addButton);
