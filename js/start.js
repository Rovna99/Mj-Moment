function loadIndex() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser !== null) {
    focusForm.classList.add(SHOWING_CN);
    focusList.classList.add(SHOWING_NC);
  }
  stopfocus();
}

function stopfocus() {
  if (foCus.length === 1) {
    focusForm.classList.remove(SHOWING_CN);
    focusList.classList.remove(SHOWING_NC);
    Cheering.classList.add(SHOWING_NC);
  }
}

function init() {
  loadIndex();
}
init();
