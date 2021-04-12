const pendingList = document.getElementById("js-pending"),
  formTodo = document.getElementById("js-form__todo"),
  inputTodo = formTodo.querySelector("input");

const PENDING = "PENDING";

let pendingTasks;

function getTaskObject(text) {
  return {
    id: String(Date.now()),
    text,
  };
}

function savePendingTask(task) {
  pendingTasks.push(task);
}

function findInPending(taskId) {
  return pendingTasks.find(function (task) {
    return task.id === taskId;
  });
}

function removeFromPending(taskId) {
  pendingTasks = pendingTasks.filter(function (task) {
    return task.id !== taskId;
  });
}

function addToPending(task) {
  pendingTasks.push(task);
}

function deleteTask(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  removeFromPending(li.id);
  saveState();
}

function handleFinishClick(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInPending(li.id);
  removeFromPending(li.id);

  saveState();
}

function buildGenericLi(task) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  li.setAttribute("class", "todo-margin");
  deleteBtn.setAttribute("class", "btnTodo");
  span.innerText = task.text;
  deleteBtn.innerText = "✔";
  span.style.wordBreak = "break-word";
  deleteBtn.addEventListener("click", deleteTask);
  li.append(span, deleteBtn);
  li.id = task.id;
  return li;
}

function paintPendingTask(task) {
  const genericLi = buildGenericLi(task);
  const completeBtn = document.createElement("button");
  completeBtn.setAttribute("class", "btnTodo");
  completeBtn.innerText = "✖";
  completeBtn.addEventListener("click", handleFinishClick);
  pendingList.append(genericLi);
  genericLi.append(completeBtn);
}

function saveState() {
  localStorage.setItem(PENDING, JSON.stringify(pendingTasks));
}

function loadState() {
  pendingTasks = JSON.parse(localStorage.getItem(PENDING)) || [];
}

function restoreState() {
  pendingTasks.forEach(function (task) {
    paintPendingTask(task);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  const taskObj = getTaskObject(inputTodo.value);
  inputTodo.value = "";
  paintPendingTask(taskObj);
  savePendingTask(taskObj);
  saveState();
}

function init() {
  formTodo.addEventListener("submit", handleFormSubmit);
  loadState();
  restoreState();
}
init();
