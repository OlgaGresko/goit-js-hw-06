let inputEl = document.querySelector('#font-size-control');
let textEl = document.querySelector('#text');

inputEl.addEventListener('input', (event) => {
    textEl.style.fontSize = inputEl.value + 'px';
})