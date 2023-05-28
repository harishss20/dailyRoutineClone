let inputList = document.getElementById("input-list");
let inputBtn = document.getElementById("input-btn");
let tempStore = document.getElementById("responses");
const newList = document.createElement("li");
let todoContainer = document.getElementById("todo-container");
let inputContainer = document.getElementById("input-container");
let inputContainerSec = document.getElementById("input-container2");
let imgDiv = document.getElementById("imgEl");

//create div element after the ul element
const listNo = document.createElement("div");
listNo.className = "showList";
inputContainerSec.prepend(listNo);

//call back function for add button
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
    addList();
  }
};

inputBtn.addEventListener("click", inputGetEl); //Event for add button

//remove the list
function removeTodoItem(event) {
  let todoRemove = event.target.parentNode;
  todoRemove.remove();
  addList();
}
// enter key for the input value
inputContainer.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    inputGetEl();
  } else if (event.key === "z" && (event.ctrlKey || event.metaKey)) {
    inputContainer.value = "";
  }
});

//better UI
function addList() {
  if (todoContainer.children.length > 0) {
    listNo.textContent = `You have ${todoContainer.children.length} work`;
    imgDiv.hidden = true;
    listNo.hidden = false;
  } else {
    imgDiv.hidden = false;
    listNo.hidden = true;
  }
}
