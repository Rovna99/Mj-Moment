const siteMap = document.querySelector(".sitebar-site"),
  sitebubble1 = document.querySelector(".sitebar-bubble1"),
  sitebubble2 = document.querySelector(".sitebar-bubble2");

function showSite(event) {
  siteMap.classList.toggle("show_sitebar");
  sitebubble1.classList.toggle("show_sitebar");
  sitebubble2.classList.toggle("show_sitebar");
}

const audioContainer = document.querySelector("#audioContainer");
const playBtn = document.querySelector(".js-playBtn");
const stopBtn = document.querySelector(".js-stopBtn");
const audioNextBtn = document.querySelector(".js-audioNextBtn");
const showAudio = document.querySelector(".show-audio");

const MUSIC_COUNT = 3;

let currentAudio = 1;

function playAudio() {
  audioContainer.volume = 0.4;
  audioContainer.loop = true;
  audioContainer.play();
}

function stopAudio() {
  audioContainer.pause();
}

function loadAudio() {
  const source = document.querySelector("#audioSource");
  source.src = `audio/${currentAudio}.mp3`;
  audioContainer.load();
  playAudio();
}

function handleNextButtonClick() {
  if (currentAudio < MUSIC_COUNT) {
    currentAudio += 1;
  } else {
    currentAudio = 1;
  }

  audioContainer.pause();
  loadAudio();
}

playBtn.addEventListener("click", loadAudio);
audioNextBtn.addEventListener("click", handleNextButtonClick);
stopBtn.addEventListener("click", stopAudio);

function showPlaybar(evnet) {
  showAudio.classList.toggle("show_sitebar");
}
