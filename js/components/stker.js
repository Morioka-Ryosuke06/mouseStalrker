import { gsap } from "gsap";

const stker = document.querySelector(".stker");
const stkerCircle = document.querySelector(".stker_circle");
const links = document.querySelectorAll(".gnav_link");

function mouseEvent() {
  document.addEventListener("mousemove", onMove);
}

function onMove(e) {
  gsap.to(stker, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
  });
}

function handleLinkMouseOver() {
  gsap.to(stkerCircle, {
    opacity: 0.3,
    scale: 4,
  });
}

function handleLinkMouseOut() {
  gsap.to(stkerCircle, {
    scale: 1,
    opacity: 1,
  });
}

export function initializeStker() {
  mouseEvent();
  links.forEach((link) => {
    link.addEventListener("mouseover", handleLinkMouseOver);
    link.addEventListener("mouseout", handleLinkMouseOut);
  });
}
