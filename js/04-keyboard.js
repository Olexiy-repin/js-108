/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keyup', event => {
//   console.log(`event.code: ${event.code}, event.key: ${event.key}`);
// });

/*
 * Обробка комбінацій клавіш
 */

document.addEventListener('keydown', event => {
  event.preventDefault();

  if (event.shiftKey && event.code === 'KeyS') {
    console.log('Shift + S');
  }

  if ((event.metaKey || event.ctrlKey) && event.code === 'KeyS') {
    console.log('Ctrl + S or Command + S');
  }

  console.log(event);
});
