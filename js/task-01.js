let categoriesEl = document.querySelector('#categories');

console.log('Number of categories: ', categoriesEl.children.length);


[...categoriesEl.children].forEach(category => {
    console.log('Category: ', category.firstElementChild.textContent);
    console.log('Elements: ', category.lastElementChild.children.length)
}) 