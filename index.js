const listStyleChangeStartY = 373;
const listStyleChangeEndY = 1600;

const listItems = document.querySelectorAll(".list-item");
const division =
  (listStyleChangeEndY - listStyleChangeStartY) / listItems.length;

const panel1Img = document.getElementById("panel1-img");
const flyingSantaImg = document.getElementById("flying-santa-img");

const videoPlayBack = 50;
const videoElement = document.getElementById("video");

function centerElement(elementId) {
  const element = document.getElementById(elementId);
  const parent = element.parentElement;

  if (
    window.scrollY >
    parent.offsetTop -
      (document.documentElement.clientHeight - element.offsetHeight) / 2
  ) {
    element.style.position = "fixed";
    element.style.top = "50%";
    element.style.left = "50%";
    element.style.transform = "translate(-50%, -50%)";
  } else {
    element.style.position = "initial";
    element.style.top = "initial";
    element.style.left = "initial";
    element.style.transform = "initial";
  }
}

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

  videoElement.addEventListener("loadedmetadata", () => {
    document.getElementById("video-section").style.height =
      videoElement.duration * videoPlayBack + "px";
  });

  centerElement("fixed-wrapper");
});
