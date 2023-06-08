const listStyleChangeStartY = 373;
const listStyleChangeEndY = 1585;

const listItems = document.querySelectorAll(".list-item");

window.addEventListener("scroll", () => {
  if (document.getElementById("on"))
    document.getElementById("on").removeAttribute("id");

  if (
    window.scrollY > listStyleChangeStartY &&
    window.scrollY < listStyleChangeEndY
  ) {
    listItems[0].id = "on";
  }
});
