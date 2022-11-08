const valueEl = document.querySelector('#value');
valueEl.textContent = 0;

const decrBtn = document.querySelector('button[data-action="decrement"]');
const onDecrement = event => {
  return (valueEl.textContent = +decrBtn.textContent + Number(valueEl.textContent));
};
decrBtn.addEventListener('click', onDecrement);

const incrBtn = document.querySelector('button[data-action="increment"]');
const onIncrement = event => {
  return (valueEl.textContent = Number(valueEl.textContent) + 1);
};
incrBtn.addEventListener('click', onIncrement);
