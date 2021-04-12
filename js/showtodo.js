const todo = document.querySelector(".todo"),
  bars = document.querySelector(".bars"),
  statusBar = document.querySelector(".todo__status-bar"),
  searchBar = document.querySelector(".part-top-search"),
  searchBarIcon = document.querySelector(".top-icon img"),
  searchBarIcon2 = document.querySelector(".top-icon");

function handleShow(event) {
  todo.classList.add("show__status-bar2");
  bars.classList.remove("show__status-bar");
  searchBar.classList.add("Hide-bar");
  searchBarIcon.classList.add("Hide-bar");
  searchBarIcon2.classList.add("Hide-bar");
}

function handleHide(event) {
  todo.classList.remove("show__status-bar2");
  bars.classList.add("show__status-bar");
  searchBar.classList.remove("Hide-bar");
  searchBarIcon.classList.remove("Hide-bar");
  searchBarIcon2.classList.remove("Hide-bar");
}

function init() {
  const hide = statusBar.querySelector("button");
  const show = bars.querySelector("i");
  hide.addEventListener("click", handleHide);
  show.addEventListener("click", handleShow);
}
init();
