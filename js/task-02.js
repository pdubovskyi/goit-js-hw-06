const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('#ingredients');
console.log(ingredientsListEl);

const ingredientsItemsEl = ingredients => {
  return ingredients.forEach(element => {
    const newTag = document.createElement('li');
    newTag.textContent = element;
    newTag.classList.add('item');
    ingredientsListEl.appendChild(newTag);
  });
};

ingredientsItemsEl(['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments']);
