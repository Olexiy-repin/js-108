/*
? Напиши клас Storage який створює об'єкти для керування складом товарів.
? При виклику отримуватиме один аргумент - початковий масив товарів і
? записуватиме його властивість items.
?
? Додай методи класу:
? - getItems() - повертає масив товарів.
? - addItem(item) - отримує новий товар і додає його до поточних.
? - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */
class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter(el => el !== item);
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

console.log(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');

console.log(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');

console.log(storage.getItems()); // [ '🍎', '🍇', '🍑', '🍌' ]
