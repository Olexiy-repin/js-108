/*
? Напиши скрипт, який для об'єкта user, послідовно:
? - додає поле mood зі значенням 'happy'
? - замінює значення hobby на 'skydiving'
? - замінює значення premium на false
? - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// console.log(user);

// const userKeys = Object.keys(user);

// console.log(userKeys);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

//? Зведіть у квадрат кожен елемент цього об'єкта.

// const obj = { x: 2, y: 3, z: 4 };

// console.log(obj);

// const objKeys = Object.keys(obj);

// console.log(objKeys);

// for (const key of objKeys) {
//   obj[key] = obj[key] ** 2;
// }

// console.log(obj);

/*
? У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
? підсумовування всіх зарплат і збережіть результат у змінній sum.
? Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
*/

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

/*
? Метод splice().
?
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс в кінець колекції
? removeCourse(name) - видаляє курс з колекції
? updateCourse(oldName, newName) - змінює назву курса
*/

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

const addCourse = function (courseName) {
  if (courses.includes(courseName)) {
    console.log(`${courseName} вже є в колекціє курсів!`);

    return;
  }

  courses.push(courseName);
};

const removeCourse = function (courseName) {
  const idxOfCourse = courses.indexOf(courseName);

  if (idxOfCourse < 0) {
    console.log(`${courseName} не знайдено!`);

    return;
  }

  courses.splice(idxOfCourse, 1);
};

const updateCourse = function (oldCourseName, newCourseName) {
  const idxOfOldCourse = courses.indexOf(oldCourseName);

  courses.splice(idxOfOldCourse, 1, newCourseName);
};

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас вже є такий курс'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('React'); // 'Курс з такою назвою не знайдено'

updateCourse('HTML', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
