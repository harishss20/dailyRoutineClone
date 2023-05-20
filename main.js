let inputList = document.getElementById("input-list");
let inputBtn = document.getElementById("input-btn");
let tempStore = document.getElementById("responses");
inputBtn.addEventListener("click", () => {
  tempStore.innerText = inputList.value;
});
