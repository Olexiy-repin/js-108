/*
? Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
? так щоб вона приймала об'єкт з параметрами будинку,
? включаючи довжини сторін будинку.
? Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter(sides) {
  const { sideA, sideB, sideC, sideD } = sides;

  return sideA + sideB + sideC + sideD;
}

const houseSides = {
  sideA: 10,
  sideB: 15,
  sideC: 10,
  sideD: 15,
};

const perimeter = calculateHousePerimeter(houseSides);

console.log(`Периметр будинку: ${perimeter}`);
