/*
 * Деструктуризація об'єкта в параметрах функції
 */

const user = {
  username: 'Jacob',
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

//? Без деструктуризації
// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.username}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }

// getUserName(user);

//? З деструктуризацією
// function getUserName(obj) {
//   const {
//     username,
//     skills: { html, css, js },
//   } = obj;

//   console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`);
// }

// getUserName(user);

//? Деструктуризація параметрів функції
// function getUserName({ username, skills: { html, css, js } } = { skills: {} }) {
//   // let { username, skills: { html, css, js } } = {};

//   if (username === undefined) {
//     return;
//   }

//   console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`);
// }

// getUserName(user);
