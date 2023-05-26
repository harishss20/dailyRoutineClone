let inputList = document.getElementById("input-list");
let inputBtn = document.getElementById("input-btn");
let tempStore = document.getElementById("responses");
let todoContainer = document.getElementById("todo-container");
let inputContainer = document.getElementById("input-container");
let inputGetEl = () => {
  if (inputList.value === "") {
    alert("Please Type your daily routine List");
  } else {
    //  creating new elements
    const newList = document.createElement("li");
    const div = document.createElement("div");
    const divBtn = document.createElement("div");
    // creating class for list and passing value to div
    newList.className = "todo-item";
    div.textContent = inputList.value;
    newList.append(div, divBtn);
    // set attribute for the divBtn and create a class
    divBtn.setAttribute("onclick", "removeTodoItem(event)");
    divBtn.className = "fa";
    divBtn.innerHTML = `X`;
    newList.append(divBtn);
    todoContainer.append(newList);
    // to reset the input value
    inputList.value = "";
  }
};
inputBtn.addEventListener("click", inputGetEl);
function removeTodoItem(event) {
  let todoRemove = event.target.parentNode;
  todoRemove.remove();
}

inputContainer.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    inputGetEl();
  } else if (event.key === "z" && (event.ctrlKey || event.metaKey)) {
    inputContainer.value = "";
  }
});
