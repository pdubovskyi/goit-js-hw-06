const categoriesEl = document.querySelector('#categories');

const amountCategoriesEl = categoriesEl.children;
console.log(`Number of categories: ${amountCategoriesEl.length}`);

const firstCategoryEl = categoriesEl.firstElementChild;
const firstCategoryTitleEl = firstCategoryEl.querySelector('h2');
console.log(`Category: ${firstCategoryTitleEl.textContent}`);
const firstCategoryItemEl = firstCategoryEl.querySelectorAll('li');
console.log(`Elements: ${firstCategoryItemEl.length}`);

const secondCategoryEl = amountCategoriesEl[1];
const secondCategoryTitleEl = secondCategoryEl.querySelector('h2');
console.log(`Category: ${secondCategoryTitleEl.textContent}`);
const secondCategoryItemEl = secondCategoryEl.querySelectorAll('li');
console.log(`Elements: ${secondCategoryItemEl.length}`);

const thirdCategoryEl = categoriesEl.lastElementChild;
const thirdCategoryTitleEl = thirdCategoryEl.querySelector('h2');
console.log(`Category: ${thirdCategoryTitleEl.textContent}`);
const thirdCategoryItemEl = thirdCategoryEl.querySelectorAll('li');
console.log(`Elements: ${thirdCategoryItemEl.length}`);
