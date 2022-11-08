const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('#ingredients');
console.log(ingredientsListEl);

// const ingredientsItemsEl = ingredients => {
//   return ingredients.forEach(function (element, index, array) {
//     const newTag = document.createElement('li');
//     newTag.textContent = element;
//     newTag.classList.add('item');
//     // ingredientsListEl.appendChild(newTag);
//   });
// };

const array = ingredients.map(element => {
  const newTag = document.createElement('li');
  newTag.textContent = element;
  newTag.classList.add('item');
  return newTag;
  console.log(newTag);
});

console.log(...array);
ingredientsListEl.append(...array);

// ingredientsItemsEl(['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments']);
