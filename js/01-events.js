/*
 * Подія сlick
 *
 * - Іменування колбеків для слухачів
 * - handle*: handleSubjectEvent
 * - *Handler: subjectEventHandler
 * - on*: onSubjectEvent
 */

/*
? Натискаючи на кнопку "Click me" змусь
? червоний квадратик зміщуватись на 50px по діагоналі
*/

const btnEl = document.querySelector('.js-click');
const resetBtnEl = document.querySelector('.js-reset');
const boxEl = document.querySelector('.js-box');

let step = 0;

const onBtnClick = () => {
  step += 50;

  boxEl.style.transform = `translate(${step}px, ${step}px)`;

  if (step === 200) {
    btnEl.removeEventListener('click', onBtnClick);
  }
};

const onRestBtnClick = () => {
  step = 0;

  boxEl.style.transform = `translate(${step}px, ${step}px)`;

  btnEl.addEventListener('click', onBtnClick);
};

btnEl.addEventListener('click', onBtnClick);
resetBtnEl.addEventListener('click', onRestBtnClick);
