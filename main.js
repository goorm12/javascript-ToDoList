const todoDiv = document.querySelector("#todo");
const todoInput = document.querySelector("#todo-form__text");
const todoButton = document.querySelector("#todo-form__button");
const todoList = document.querySelector("#todo-form__list");

function addTodo(e) {
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const text = document.createElement("span");
    const button = document.createElement("button");

    todoList.appendChild(div).classList.add("todo-form__list-content");
    div.appendChild(checkbox).classList.add("todo-form__list--checkbox");
    div.appendChild(text).classList.add("todo-form__list-text");
    div.appendChild(button).classList.add("todo-form__list--remove-button");

    text.textContent = todoText;
    button.textContent = "삭제하기";
    checkbox.type = "checkbox";
    // 체크박스
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        div.style.textDecoration = "line-through";
      } else {
        div.style.textDecoration = "";
      }
    });
    // 삭제하기 버튼
    button.addEventListener("click", (e) => {
      e.preventDefault();
      div.parentNode.removeChild(div);
    });
  } else {
    alert("할 일을 입력해주세요!");
  }
}

todoButton.addEventListener("click", addTodo);

// 엔터키를 누르면 추가하기
todoInput.addEventListener("keydown", (e) => {
  const ENTER = 13;
  if (e.keyCode === ENTER) {
    addTodo();
  }
});
