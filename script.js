const form = document.querySelector('.form');

const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm');
const passwordError = document.querySelector('#password + p.help');

form.addEventListener('submit', e => {
  if (password.value !== passwordConfirm.value) {
    e.preventDefault();
    console.log('test3');
    passwordError.parentElement.classList.add('error');
    passwordConfirm.parentElement.classList.add('error');
  }
});

console.log('jas');
