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
  console.log(ingredientEl);

  ingredientsArray.push(ingredientEl);
})

ingredientsArray.forEach(ingredient => {
  ingredientsEl.append(ingredient);
});

