// push:

// Завдання 1. Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).


let onePush = [];
onePush.push(1,3,'One', true);
console.log(onePush);

// Завдання 2. Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

function elementArr(arr, element ){
    arr.push(element);
    return arr;
}

let numbersOne = [1,2,3];
elementArr(numbersOne, 4);

console.log(numbersOne);

// pop:

// Завдання 1. Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

let onePop = [1,2,3,4,5,6];
onePop.pop();
console.log(onePop);



// Завдання 2. Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

function elementArr(arr) {
  arr.pop();   
  return arr;  
}

let numbersTwo = ['Bob', 'Tom', 'Mimi'];
elementArr(numbersTwo);

console.log(numbersTwo);

// unshift:

// Завдання 1. Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

let oneUnshift = [1,2,3,4,5,6];
oneUnshift.unshift(-1);
console.log(oneUnshift);

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

function elementoArr(arr, element ){
    arr.unshift(element);
    return arr;
}

let numbersThree = [1,2,3];
elementoArr(numbersThree, -1);

console.log(numbersThree);

// shift:

// Завдання 1. Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

let oneShift = [1,2,3,4];
oneShift.shift();
console.log(oneShift);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

function elemArr(arr){
    arr.shift();
    return arr;
}

let numbersFour = [1,2,3,4,5];
elemArr(numbersFour);
console.log(numbersFour);

// fill:

// Завдання 1. Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.

let fillArr = Array (15);
fillArr.fill('+');
fillArr.fill(2, 3, 5);
fillArr.fill(3, 6, 9);
fillArr.fill(1, 10, 14);
fillArr.fill(90, 0, 1);
console.log(fillArr);

// Завдання 2. Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.

function almArr(arr, value, startIndex, endIndex){
    arr.fill(value, startIndex, endIndex);
    return arr;
}

let numbersFive = [1,2,3,4,5,6];
almArr(numbersFive, '*', 2, 5);
console.log(numbersFive);


// splice:

// Завдання 1. Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.

let animals = ["кіт", "собака", "папуга", "риба", "хом’як"];

let removed = animals.splice(1, 2);

console.log(animals);

console.log(removed);


// Завдання 2. Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.

function removeElements(arr, startIndex, count) {
  let removed = arr.splice(startIndex, count);
  return removed; 
}

let fruits = ["яблуко", "банан", "вишня", "груша", "апельсин"];
let deleted = removeElements(fruits, 1, 2);

console.log(fruits);
console.log(deleted);

// reverse:

// Завдання 1. Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.

let newReverse = [1,2,3,4,5,6];
newReverse.reverse();
console.log(newReverse);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

function elemtArr(arr){
    arr.reverse();
    return arr;
}

let numbersSix = [1,2,3,4,5];
elemtArr(numbersSix);
console.log(numbersSix);

// concat:

// Завдання 1. Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.

let firstArr = [1,2,3];
let secondArr = ['+', 4,5,6];
firstArr = firstArr.concat(secondArr);
console.log(firstArr);


// Завдання 2. Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.

function elArr(arr1, arr2){
    return arr1.concat(arr2);
}

let steamed = [2,4,6];
let unpaired = [1,3,5];
let combinet = elArr(steamed, unpaired);
console.log(combinet);


// includes:

// Завдання 1. Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.

let oneIncludes = [1,2,3,'Bob']
console.log(oneIncludes.includes(1));
console.log(oneIncludes.includes('Tom'));
console.log(oneIncludes.includes('Bob'));

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.

function containsElement(arr, element) {
  return arr.includes(element); 
}

let fruts = ["яблуко", "банан", "вишня"];

console.log(containsElement(fruts, "банан"));  
console.log(containsElement(fruts, "груша"));  

// filter:

// Завдання 1. Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише парні числа.

let numbSeven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbSeven.filter(function(num) {
  return num % 2 === 0; 
});

console.log(evenNumbers);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву, що містить елементи, які задовольняють умову.

function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn); 
}

let words = ["кіт", "собака", "риба", "папуга"];

let longWords = filterArray(words, function(word) {
  return word.length > 4;
});

console.log(longWords);

// map:

// Завдання 1. Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.

let numbEight = [1, 2, 3, 4, 5];

let squares = numbEight.map(function(num) {
  return num * num;
});

console.log(squares);


// Завдання 2. Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує стрінг до значення.

function mapToString(arr, transformFn) {
  return arr.map(function(element) {
    return transformFn(element).toString(); 
  });
}

let fruites = ["яблуко", "банан", "вишня"];

let stringFruits = mapToString(fruites, function(fruit) {
  return "Фрукт: " + fruit;
});

console.log(stringFruits);