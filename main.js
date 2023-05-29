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

document.addEventListener("DOMContentLoaded", () => {
  const getLocalData = [...JSON.parse(localStorage.getItem("todoLists"))];
  getLocalData.forEach((list) => {
    if (list.todoLists === "") {
      console.log("type some thing");
    } else {
      //  creating new elements
      const newList = document.createElement("li");
      const div = document.createElement("div");
      const divBtn = document.createElement("div");
      // creating class for list and passing value to div
      newList.className = "todo-item";
      div.textContent = list.todoList;
      newList.append(div, divBtn);
      // set attribute for the divBtn and create a class
      divBtn.setAttribute("onclick", "removeTodoItem(event)");
      divBtn.className = "fa";
      divBtn.innerHTML = `X`;
      newList.append(divBtn);
      todoContainer.append(newList);
    }
  });
  addList();
});

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
  }

  // set localStorage
  if (inputList.value != "") {
    localStorage.setItem(
      "todoLists",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("todoLists") || "[]"),
        { todoList: inputList.value },
      ])
    );
  }

  // to reset the input value
  inputList.value = "";

  addList();
};

inputBtn.addEventListener("click", inputGetEl); //Event for add button

//remove the list
function removeTodoItem(event) {
  let todoRemove = event.target.parentNode;
  todoRemove.remove();
  addList();

  //remove local storage
  const getLocalData = [...JSON.parse(localStorage.getItem("todoLists"))];

  getLocalData.forEach((list) => {
    const addLocalStorage = list.todoList + "X";
    if (addLocalStorage === todoRemove.innerText) {
      getLocalData.splice(getLocalData.indexOf(list), 1);
    }
  });
  //restore the localStorage of remove li
  localStorage.setItem("todoLists", JSON.stringify(getLocalData));
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
