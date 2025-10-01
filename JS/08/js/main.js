// Завдання 1.

// Перепишіть цей код використовуючи let const~

// // Замість var

// for (var i = 0; i < 5; i++) {

//     console.log(i);

// }


const max = 5;

for (let i = 0; i < max; i++) {
    
  console.log(i);

}

// // Замість var

// var message = 'test';

// function example() {

//     if (true) {

//         var message = 'Hello, world!';

//         console.log(message);

//     }

//     console.log(message); // Виведе 'Hello, world!'

// }

let message = 'test';

function example() {
  if (true) {
    message = 'Hello, world!';
    console.log(message);      
  }

  console.log(message);       
}

example();

// Завдання 2.

// Використовуючи for in  виведіть значення з об'єктку в console.log

// const person = {

//     name: 'John',

//     age: 25,

//     occupation: 'Developer'

// };

let obj = {

    name: 'John',

    age: 25,

    occupation: 'Developer'

}

for (const key in obj) {
    console.log(console.log(`For in work ${key} : ${obj[key]}`));
}



// Завдання 3.

// Використовуючи for of  та for in  виведіть занчення з об'єктів які знаходяться в масиві
// const students = [

//     { name: 'Alice', age: 20, grade: 'A' },

//     { name: 'Bob', age: 22, grade: 'B' },

//     { name: 'Charlie', age: 21, grade: 'C' }

// ];

const students = [

    { name: 'Alice', age: 20, grade: 'A' },

    { name: 'Bob', age: 22, grade: 'B' },

    { name: 'Charlie', age: 21, grade: 'C' }

];

for (const student of students) {
  console.log("Student:");
  for (const key in student) {
    console.log(`${key}: ${student[key]}`);
  }
}
