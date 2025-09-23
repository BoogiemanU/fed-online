// 1. Калькулятор 

// Створіть функції для кожної математичної операції (функція суми створена на уроці). Використовуючи switch напишіть програму яка отримує знак математичної операції (+, -, /, *) та 2 значення і запускає функцію для цієї

// математичної операції з 2 цифровими значеннями

function addition(a, b){
    return a+b;
}

function subtraction(a, b){
    return a-b;
}

function multiplication(a, b){
    return a*b;
}

function division(a, b){
    if (b===0){
        return "Ділення на нуль неможливе!";
    }
    return a/b;
}

let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));
let operator = prompt("Введіть математичну операцію (+, -, *, /):");

let result;

switch (operator) {
  case "+":
    result = addition(num1, num2);
    break;
  case "-":
    result = subtraction(num1, num2);
    break;
  case "*":
    result = multiplication(num1, num2);
    break;
  case "/":
    result = division(num1, num2);
    break;
  default:
    result = "Невідомий оператор!";
}

console.log("Результат:", result);


// 2. Параметри та колбеки:

// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

function hiUser(user) {
  console.log(`Вітаю ${user}`);
}

function wellcomUser(users, callback) {
  for (let i = 0; i < users.length; i++) {
    callback(users[i]); 
  }
}

const userList = ["Андрій", "Олена", "Марія", "Ігор"];

wellcomUser(userList, hiUser);


// 3. Стрілкові функції:

// Перепишіть попередню функцію в стрілкову

const hiUser2 = (user) => {
  console.log(`Вітаю ${user}`);
};

const wellcomUser2 = (users, callback) => {
  for (let i = 0; i < users.length; i++) {
    callback(users[i]);
  }
};

const userList2 = ["Андрій", "Олена", "Марія", "Ігор"];

wellcomUser(userList2, hiUser);


// 4. Параметри за замовчуванням:

// Створіть функцію, яка приймає параметр зі значенням за замовчуванням і виводить його.

function showMessage(message = "Привіт за замовчуванням!") {
  console.log(message);
}

showMessage("Вітаю, користувачу!");
showMessage();                      


// 5. Задача з колбеком:

// Створіть функцію, яка приймає стрінг значення і функцію-колбек, і викликає цю функцію-колбек, передаючи їй стрінг значення

function processString(str, callback) {
  callback(str);
}

function printString(value) {
  console.log("Отримано рядок:", value);
}

processString("Привіт, користувач!", printString);




// 6. Перепишіть стрілкову функцію в звичайну 

// const multiplyValues = (a, b, c) => a * b * c;

function multiplyValues(a, b, c) {
  return a * b * c;
}