function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

const onBtnClick = event => {
  const getRandomColor = getRandomHexColor();
  spanEl.textContent = getRandomColor;
  document.body.style.backgroundColor = getRandomColor;
};

btnEl.addEventListener('click', onBtnClick);
