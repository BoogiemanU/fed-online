// 1. Створення класу та об'єкта:

// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

class Person{
    constructor (name, age){
        this._name = name;
        this._age = age;
    }
    getAllInfo(){
        console.log(`Name ${this._name} age ${this._age}`);
    }
    // 2. Методи класу:

    // Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.
    sayHello() {
    console.log(`Привіт! Мене звати ${this._name}.`);
    }
}
// 3. Наслідування:

// Створіть клас Student, який наслідує від класу Person.

// Додайте властивість studentId до класу Student.

// Додайте метод study, який виводить повідомлення про вивчення студентом.

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this._studentId = studentId;
  }

  study() {
    console.log(` Name: ${this._name}  (ID: ${this._studentId})`);
  }
}

const student1 = new Student("Bob", 40, "ST123");

student1.sayHello(); 
student1.study();    
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.
let pers = new Person('John', '30');

console.log(pers);
pers.sayHello();

