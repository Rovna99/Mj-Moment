function createQuote(data) {
  const textQuote = document.querySelector(".bottom--quote");
  const testAuthor = document.querySelector(".bottom--author");
  const quote = data.content;
  const author = data.author;
  textQuote.innerText = `"${quote}"`;
  testAuthor.innerText = `- ${author}`;
}

function loadQuote() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch("https://api.quotable.io/random?maxLength=60", requestOptions)
    .then((response) => response.json())
    .then((json) => createQuote(json))
    .catch((error) => console.log("error", error));
}

function init() {
  loadQuote();
}

init();
