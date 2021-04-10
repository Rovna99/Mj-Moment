const focusForm = document.querySelector(".edit-focus"),
  focusInput = focusForm.querySelector("input"),
  focusList = document.querySelector(".your-list"),
  Cheering = document.querySelector(".cheering");

const FOCUS_LS = "focus";

let foCus = [];

function refocus() {
  focusForm.classList.add(SHOWING_CN);
  focusList.classList.add(SHOWING_NC);
  Cheering.classList.remove(SHOWING_NC);
}

function deletefocus(event) {
  const btn = event.target;
  const li = btn.parentNode;
  focusList.removeChild(li);
  const cleanfocus = foCus.filter(function (focus) {
    return focus.id !== parseInt(li.id);
  });
  foCus = cleanfocus;
  saveFocus();
  refocus();
}

function saveFocus() {
  localStorage.setItem(FOCUS_LS, JSON.stringify(foCus));
}

function paintfocus(text) {
  const li = document.createElement("li");
  const checkBox = document.createElement("button");
  const span = document.createElement("span");
  const newwId = foCus.length + 1;
  checkBox.innerText = "✔";
  checkBox.addEventListener("click", deletefocus);
  span.innerText = text;
  li.appendChild(checkBox);
  li.appendChild(span);
  li.id = newwId;
  focusList.appendChild(li);
  const foCusObj = {
    text: text,
    id: newwId,
  };
  foCus.push(foCusObj);
  saveFocus();
}

function mainfocus() {
  if (focus !== null) {
    focusForm.classList.remove(SHOWING_CN);
    focusList.classList.remove(SHOWING_NC);
    Cheering.classList.add(SHOWING_NC);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = focusInput.value;
  paintfocus(currentValue);
  focusInput.value = "";
  mainfocus();
}

function loadfocus() {
  const loadedfoCus = localStorage.getItem(FOCUS_LS);
  if (loadedfoCus !== null) {
    const parsedFocus = JSON.parse(loadedfoCus);
    parsedFocus.forEach(function (focus) {
      paintfocus(focus.text);
    });
  }
}

function init() {
  loadfocus();
  focusForm.addEventListener("submit", handleSubmit);
}

init();
