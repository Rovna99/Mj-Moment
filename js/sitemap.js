const siteMap = document.querySelector(".sitebar-site"),
  sitebubble1 = document.querySelector(".sitebar-bubble1"),
  sitebubble2 = document.querySelector(".sitebar-bubble2");

function showSite(event) {
  siteMap.classList.toggle("show_sitebar");
  sitebubble1.classList.toggle("show_sitebar");
  sitebubble2.classList.toggle("show_sitebar");
}
