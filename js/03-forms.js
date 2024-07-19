/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 */

/*
? Оброби форму та збережи відгук користувача в об'єкт
*/
const formEl = document.querySelector('.js-form');

const onFormSubmit = event => {
  event.preventDefault();

  const formData = {
    email: formEl.elements.email.value,
    password: formEl.elements.password.value,
    comment: formEl.elements.comment.value,
  };

  console.log(formData);

  formEl.reset();
};

formEl.addEventListener('submit', onFormSubmit);
