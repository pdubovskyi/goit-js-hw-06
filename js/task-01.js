// Variant #1

// const categoriesEl = document.querySelector('#categories');
// const amountCategoriesEl = categoriesEl.children;
// console.log(`Number of categories: ${amountCategoriesEl.length}`);

// const firstCategoryEl = categoriesEl.firstElementChild;
// const firstCategoryTitleEl = firstCategoryEl.querySelector('h2');
// console.log(`Category: ${firstCategoryTitleEl.textContent}`);
// const firstCategoryItemEl = firstCategoryEl.querySelectorAll('li');
// console.log(`Elements: ${firstCategoryItemEl.length}`);

// const secondCategoryEl = amountCategoriesEl[1];
// const secondCategoryTitleEl = secondCategoryEl.querySelector('h2');
// console.log(`Category: ${secondCategoryTitleEl.textContent}`);
// const secondCategoryItemEl = secondCategoryEl.querySelectorAll('li');
// console.log(`Elements: ${secondCategoryItemEl.length}`);

// const thirdCategoryEl = categoriesEl.lastElementChild;
// const thirdCategoryTitleEl = thirdCategoryEl.querySelector('h2');
// console.log(`Category: ${thirdCategoryTitleEl.textContent}`);
// const thirdCategoryItemEl = thirdCategoryEl.querySelectorAll('li');
// console.log(`Elements: ${thirdCategoryItemEl.length}`);

// Variant #2

const itemAmount = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemAmount.length}`);

const first = itemAmount.forEach(element => {
  const category = element.querySelector('h2');
  const categoryLength = element.querySelectorAll('li');
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${categoryLength.length}`);
});
