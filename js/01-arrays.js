/*
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'NodeJS'];

console.log(courses);

courses[3] = 'Python';
courses[4] = 'NodeJS';

console.log(courses);

console.log(courses.length);

const firstCourse = courses[0];

console.log(firstCourse);

const lastCourse = courses[courses.length - 1];

console.log(lastCourse);
