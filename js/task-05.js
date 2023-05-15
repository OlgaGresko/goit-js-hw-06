let inputEl = document.querySelector('#name-input');
let nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    nameEl.textContent = event.currentTarget.value;
})