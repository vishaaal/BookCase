const textEl = document.querySelector("#typewriter");

let index = 0;
let isErasing = false;
let charIndex = 0;
let start;
let delta = 300;

function typeWriter(timestamp) {
  window.requestAnimationFrame(typeWriter);

  if (start === undefined) start = timestamp;
  let progress = timestamp - start;

  if (progress > delta) {
    let text = textEl.getAttribute("data-text");

    if (!isErasing) {
      textEl.innerHTML = text.slice(0, ++charIndex);
      delta = 300 - Math.random() * 200;
    } else {
      textEl.innerHTML = text.slice(0, charIndex--);
    }

    start = timestamp;

    if (charIndex === text.length) {
      isErasing = true;
      delta = 50;
      start = timestamp + 800;
    }

    if (charIndex < 0) {
      isErasing = false;
      start = timestamp + 200;
    }
  }
}

window.requestAnimationFrame(typeWriter);
