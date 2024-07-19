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
