// 1. Логічні оператори  порівняння та alert:

// Створіть змінні number1 та number2 і використайте оператори порівняння, щоб визначити, чи вони рівні.

// Виведіть результат за допомогою alert, щоб повідомити користувача про те, чи рівні числа.

let number1 = Number(prompt('Type first number', ''));
let number2 = Number(prompt('Type second number', ''));

alert(number1 === number2 ? 'Numbers are equals' : 'numbers are not equal');


// 2. Метод вводу інформації та логічні порівняння:

// Використовуючи prompt, запросіть у користувача введення числа.

// Перевірте, чи введене число парне чи непарне.

// Виведіть результат з використанням console.log.

let number = Number((prompt('Even numbers', '')));

console.log(number % 2 === 0 ? 'number is even' : 'number is odd');


// 3. Логічні порівняння та введення-виведення:

// Використовуючи prompt, запитайте у користувача його вік.

// Перевірте, чи вік менше 18 років.

// Виведіть відповідне повідомлення про те, чи може користувач використовувати певний ресурс.

let userAge = Number((prompt('How old are you', '18')));

console.log(userAge >= 18 ? `you can use this resource` : `You cannot use this resource.`)


// 4. Розрахунок вартості товару та console.log:

// Створіть змінну ціна та кількість товару і присвойте їм значення використовуючи prompt .

// Використовуйте математичні операції для обчислення вартості товару (ціна * кількість).

// Виведіть результат за допомогою console.log.

let productPrice = Number(prompt('Price of goods', '2.98'));;
let productQuantity = Number((prompt('Quantity of goods', '16')));

let totalCost = productPrice * productQuantity

console.log(`the total amount for the selected product was ${totalCost}`)

alert(`the total amount for the selected product was ${totalCost}`)

// 5. Розрахунок знижки на товар та alert:

// Використовуючи prompt, запросіть в користувача вартість товару.

// Розрахуйте знижку на товар у розмірі 50% від введеної вартості.

// Виведіть результат знижки за допомогою alert.


let productPrice1 = Number(prompt('What is the price of the product?', '0'));

alert(`With 50% sale your product cost is ${productPrice1 / 2}`);