// Написати гру "Камінь, ножниці, папір"  дані користувач отримує через prompt, а результат гри виводити використовуючи alert

const choices = ["камінь", "ножиці", "папір"];

let userChoice = prompt("Виберіть один із варіантів: камінь, ножиці або папір!").toLowerCase();

if (!choices.includes(userChoice)) {
    alert ("Неправильний вибір, спробуйте ще");
} else{
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice){
        result = "Нічия"
    } else if(
        (userChoice === "камінь" && computerChoice === "ножиці") ||
        (userChoice === "ножиці" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камінь")
    ) {result = "Ти переміг!!!!Вітаю"        
    } else {
        result = "Ти програв, спробуй ще раз!"
    }

    alert(`Ти вибрав: ${userChoice}\nКомпютер вибрав: ${computerChoice}\n${result}`);
}

// Завдання для Math.min та Math.max:

// Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.

function getMinNumber(a, b) {
  return Math.min(a, b);
}


// Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.

function getMaxNumber(a, b) {
  return Math.max(a, b);
}

// Завдання для Math.pow:

// Створіть функцію, яка підносить число до заданого ступеня.

// Виведіть результат у консоль.

function power(base, exponent) {
  const result = Math.pow(base, exponent); 
  console.log(`${base} у степені ${exponent} = ${result}`);
}

power(2, 4);



// Завдання для Math.floor та Math.ceil:

// Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.

function roundDown(number) {
  const result = Math.floor(number); 
  console.log(`Число ${number} округлено вниз = ${result}`);
}

roundDown(4.3);

// Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.

function roundUp(number) {
  const result = Math.ceil(number); 
  console.log(`Число ${number} округлено вгору = ${result}`);
}

roundUp(4.7);

// Завдання для Date.getYear:

// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік

// Виведіть результат у консоль.

function getBirthYear() {
  const age = prompt("Введіть свій вік:");
  const currentYear = new Date().getFullYear(); 
  const birthYear = currentYear - age;
  console.log(`Ваш рік народження: ${birthYear}`);
}

getBirthYear();


// Завдання для Date.toLocaleString:

// Створіть об'єкт Date для поточної дати та часу.

// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.

// Виведіть результат у консоль.

const now = new Date();

const localDateTime = now.toLocaleString();

console.log("Поточна дата і час:", localDateTime);


// Завдання для String.split та toUpperCase:

// Створіть рядок, який містить слова, розділені пробілами.

// Використайте метод split, щоб розбити рядок на масив слів.

// Виведіть отриманий масив у консоль у верхньому регістрі.

const text = "Приклад рядка Для split та toUpperCase";

const wordsArray = text.split(" "); 

const upperWordsArray = wordsArray.map(word => word.toUpperCase());

console.log(upperWordsArray);