const ingredientsEl = document.querySelector('#ingredients');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsArray = [];

ingredients.forEach (ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  ingredientsArray.push(ingredientEl);
})

ingredientsEl.append(...ingredientsArray);


