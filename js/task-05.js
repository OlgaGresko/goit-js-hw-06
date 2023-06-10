let inputEl = document.querySelector('#name-input');
let nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    if (inputEl.value.trim() === "") {
        nameEl.textContent = "Anonymous";
    } else {
        nameEl.textContent = event.currentTarget.value;
    }
    });


