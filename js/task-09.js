function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let changeColorBtn = document.querySelector('.change-color');
let colorDescrEl = document.querySelector('.color');
let bodyEl = document.querySelector('body');

changeColorBtn.addEventListener('click', changeHexColor);

function changeHexColor() {
  let randomHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomHexColor;
  colorDescrEl.textContent = randomHexColor;
}