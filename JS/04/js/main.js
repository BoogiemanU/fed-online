// 1. Порівняння трьох чисел:

// Запитайте у користувача ввести три числа (ввести через prompt)

// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.

// Варіант 1

let numberOne = Number(prompt('Ведіть перше значення', ''));
let numberTwo = Number(prompt('Ведіть друге значення', ''));
let numberThree = Number(prompt('Ведіть третє значення', ''));

if (isNaN(numberOne) || isNaN(numberTwo) || isNaN(numberThree)) {
  console.log('Введіть дійсні цифри!!!!!!');
} 
    else {
    let maxNumber = numberOne;

    if (numberTwo > maxNumber) {
        maxNumber = numberTwo;
    }

    if (numberThree > maxNumber) {
        maxNumber = numberThree;
    }

    console.log(`Найбільше число — це: ${maxNumber}`);
}

// Варіант 2 

const numbers = [
  +prompt('Введіть перше значення', ''),
  +prompt('Введіть друге значення', ''),
  +prompt('Введіть третє значення', '')
];

if (numbers.some(isNaN)) {
  console.log('Введіть дійсні цифри!');
} else {
  console.log(`Найбільше число — це: ${Math.max(...numbers)}`);
}


// 2. Визначення сезону:

// Запитайте у користувача ввести номер місяця (від 1 до 12).

// Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.

let month = Number(prompt('Введіть номер місяця (від 1 до 12):', ''));

if (isNaN(month) || month < 1 || month > 12) {
  console.log('Введено некоректний номер місяця.');
} 
    else {
    let season = '';

    if (month === 12 || month === 1 || month === 2) {
        season = 'Зима';
    } else if (month >= 3 && month <= 5) {
        season = 'Весна';
    } else if (month >= 6 && month <= 8) {
        season = 'Літо';
    } else if (month >= 9 && month <= 11) {
        season = 'Осінь';
    }

  console.log('Цей місяць належить до сезону:', season);
}


// 3. Визначення розміру числа:

// Запитайте у користувача ввести число.

// Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.

let number = Number(prompt('Введіть будь-яке число:', ''));

if (isNaN(number)) {
  console.log('Введено некоректне значення.');
} else if (number > 0) {
  console.log('Число є додатнім.');
} else if (number < 0) {
  console.log('Число є відʼємним.');
} else {
  console.log('Це нуль.');
}


// 4. Перевірка величини кута:

// Запитайте у користувача ввести величину кута в градусах.

// Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.

let angle = Number(prompt('Введіть величину кута в градусах:', ''));

angle > 90 ? console.log(`Це тупий кут`) : console.log(`Це гострий кут`)


// 5. Оцінка студента:

// Запитайте у користувача ввести свою оцінку за тест (від 0 до 100).

// Визначте, яку оцінку отримає студент (A, B, C, D або F) за таких умов:

// 90-100: A

// 80-89: B

// 70-79: C

// 60-69: D

// менше 60: F

// Збільште оцінку студента на одиницю, використовуючи постфіксний інкремент.

// Виведіть у консоль повідомлення про оцінку до і після інкремента та визначте за допомогою тернарного оператора, чи студент зарахований чи ні (прохідний бал 60).

let score = Number(prompt('Введіть свою оцінку за тест (0–100):', ''));

if (isNaN(score) || score < 0 || score > 100) {
  console.log('Некоректна оцінка. Введіть число від 0 до 100.');
} else {

  let originalScore = score;

  score++;

  let grade =
    originalScore >= 90 ? 'A' :
    originalScore >= 80 ? 'B' :
    originalScore >= 70 ? 'C' :
    originalScore >= 60 ? 'D' : 
    originalScore < 60 ? 'F':``;

  let isPassed = score >= 60 ? 'Зараховано' : 'Не зараховано';

  console.log(`Оцінка до інкремента: ${originalScore}`);
  console.log(`Оцінка після інкремента: ${score}`);
  console.log(`Буквений бал (до інкремента): ${grade}`);
  console.log(`Результат після підвищення: ${isPassed}`);
}