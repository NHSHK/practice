const listStyleChangeStartY = 373;
const listStyleChangeEndY = 1600;

const listItems = document.querySelectorAll(".list-item");
const division =
  (listStyleChangeEndY - listStyleChangeStartY) / listItems.length;

const panel1Img = document.getElementById("panel1-img");
const flyingSantaImg = document.getElementById("flying-santa-img");

window.addEventListener("scroll", () => {
  if (document.getElementById("on"))
    document.getElementById("on").removeAttribute("id");

  if (
    window.scrollY > listStyleChangeStartY &&
    window.scrollY < listStyleChangeEndY
  ) {
    const targetIndex = Math.floor(
      (window.scrollY - listStyleChangeStartY) / division
    );
    console.log(targetIndex);
    if (listItems[targetIndex]) listItems[targetIndex].id = "on";
  }

  const scrollYBottom = window.scrollY + document.documentElement.clientHeight;

  if (
    scrollYBottom > panel1Img.offsetTop &&
    scrollYBottom < panel1Img.offsetTop + panel1Img.offsetHeight + 100
  ) {
    const translateX =
      100 -
      (100 * (scrollYBottom - panel1Img.offsetTop)) / panel1Img.offsetHeight;
    const translateY =
      -15 +
      (15 * (scrollYBottom - panel1Img.offsetTop)) / panel1Img.offsetHeight;
    const rotationDegree =
      -(40 * (scrollYBottom - panel1Img.offsetTop)) / panel1Img.offsetHeight;

    flyingSantaImg.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotationDegree}deg)`;
  }
});
