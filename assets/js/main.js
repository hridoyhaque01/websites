const header = document.getElementById("header");

function scrollEvent() {
  const scrollTop = window.scrollY;
  scrollTop > 0
    ? header.classList.add("shaddow")
    : header.classList.remove("shaddow");
}

window.addEventListener("load", scrollEvent);
window.addEventListener("scroll", scrollEvent);
