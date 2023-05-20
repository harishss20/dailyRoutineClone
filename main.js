let inputList = document.getElementById("input-list");
let inputBtn = document.getElementById("input-btn");
let tempStore = document.getElementById("responses");
let todoContainer = document.getElementById("todo-container");
inputBtn.addEventListener("click", () => {
  if (inputList.value === "") {
    alert("Please Type your daily routine List");
  } else {
    todoContainer.innerHTML += `<li class="todo-item"><div>${inputList.value}</div> <div class="fa" onclick="removeFoodItem(event)">X</div></li>`;
  }
});
function removeFoodItem(event) {
  let todoRemove = event.target.parentNode;
  todoRemove.remove();
}
