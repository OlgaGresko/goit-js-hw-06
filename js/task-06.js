let inputEl = document.querySelector('#validation-input');

function classSwitching(a, b) {
    inputEl.classList.remove(a);
    inputEl.classList.add(b);
}

inputEl.addEventListener("change", (event) => {
    if (inputEl.value.length === Number(event.currentTarget.getAttribute('data-length'))) {
        classSwitching('invalid', 'valid');
       } else {
        classSwitching('valid', 'invalid');
    };
})