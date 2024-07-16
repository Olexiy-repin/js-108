/*
? Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
? - email - пошта, рядок
? - age - вік, число
? - numberOfPosts - кількість постів, число
? - topics - масив тем на яких спеціалізується блогер
?
? Клас чекає 4 параметри - email, age, numberOfPosts, topics.
?
? - Додай метод getInfo(), який, повертає рядок: Blogger ${email} is ${age} years old and has ${numPosts} posts.
? - Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
 */
class Blogger {
  constructor(email, age, numberOfPosts, topics) {
    this.email = email;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new Blogger('mango@mail.com', 24, 20, ['tech', 'cooking']);

console.log(mango);

console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

const poly = new Blogger('poly@mail.com', 19, 17, ['sports', 'gaming']);

console.log(poly);

console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts
