let counterValue = 0;

let decrementBtn = document.querySelector('button[data-action="decrement"]');
let incrementBtn = document.querySelector('button[data-action="increment"]');
let counterEl = document.querySelector('#value');

decrementBtn.addEventListener('click', (event) => {
    counterValue -=1;
    counterEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', (event) => {
    counterValue +=1;
    counterEl.textContent = counterValue;
});