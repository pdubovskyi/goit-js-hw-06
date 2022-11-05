// const textInput = document.querySelector('#validation-input');

// Version #1
// const amount = document.querySelector('input[data-length="6"]');

// textInput.addEventListener('input', event => {
//   amount.dataset.length = event.currentTarget.value.length;
// });

// const handler = event => {
//   if (+amount.dataset.length === 6) {
//     textInput.classList.remove('invalid');
//     textInput.classList.add('valid');
//   } else {
//     textInput.classList.remove('valid');
//     textInput.classList.add('invalid');
//   }
// };
// textInput.addEventListener('blur', handler);

// Version#2
const textInput = document.getElementById('validation-input');
console.log(textInput);

console.log(textInput.value);

const handlerSecond = event => {
  if (textInput.value.length === Number(textInput.getAttribute('data-length'))) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
};

textInput.addEventListener('blur', handlerSecond);
