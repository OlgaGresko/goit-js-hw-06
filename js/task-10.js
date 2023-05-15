function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let inputEl = document.querySelector('input[type="number"]');
let createBtn = document.querySelector('button[data-create]');
let destroyBtn = document.querySelector('button[data-destroy]');
let boxesContainer = document.querySelector('#boxes');
let amount = 0;

inputEl.addEventListener('change', () => {
  amount = Number(inputEl.value);
})

createBtn.addEventListener('click', () => createBoxes(amount));

function createBoxes(amount) {
  let size = '30';
  for (let i = 0; i < amount; i++) {
    size = Number(size) + i * 10;
    let box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    boxesContainer.append(box);
  }
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}
