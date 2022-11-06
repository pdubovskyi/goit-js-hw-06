const formEl = document.querySelector('.login-form');

const OnformEl = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

formEl.addEventListener('submit', OnformEl);
