let inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("change", (event) => {
    if (inputEl.value.length === Number(event.currentTarget.getAttribute('data-length'))) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
});