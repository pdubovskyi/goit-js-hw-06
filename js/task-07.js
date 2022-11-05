const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const OnChangeSize = event => {
  spanEl.style.fontSize = inputEl.value + 'px';
};

inputEl.addEventListener('input', OnChangeSize);
