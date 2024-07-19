/*
 * - Подія input
 * - Подія blur
 * - Подія change
 */

const fieldEl = document.querySelector('.js-user-name');
const checkboxPolicyEl = document.querySelector('.js-policy-checkbox');

/*
? Виводь в консоль все що користувач вводить в input
*/
// const onFieldInput = () => {
//   console.log(fieldEl.value);
// };

// fieldEl.addEventListener('input', onFieldInput);

/*
? Користувач вводить в input своє ім'я після втрати
? фокусу отримує alert з повідомленням-привітанням
 */
// const onFieldBlur = () => {
//   const username = fieldEl.value;

//   alert(`Welcome ${username}!`);
// };

// fieldEl.addEventListener('blur', onFieldBlur);

// const onFieldChange = () => {
//   const username = fieldEl.value;

//   alert(`Welcome ${username}!`);
// };

// fieldEl.addEventListener('change', onFieldChange);

/*
? Після того, як користувач активує чекбокс, виводиться alert
*/
// const onCheckboxPolicyChange = () => {
//   if (checkboxPolicyEl.checked) {
//     alert('Done!');
//   }
// };

// checkboxPolicyEl.addEventListener('change', onCheckboxPolicyChange);
