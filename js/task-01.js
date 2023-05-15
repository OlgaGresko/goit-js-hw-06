let categoriesEl = document.querySelector('#categories');
let categoryEl = document.querySelectorAll('.item');

console.log('Number of categories: ', categoriesEl.children.length);


categoryEl.forEach(category => {
    console.log('Category: ', category.firstElementChild.textContent);
    console.log('Elements: ', category.lastElementChild.children.length)
}) 