function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');


const onBtnClick = event => {
  spanEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
};

btnEl.addEventListener('click', onBtnClick);
