// Тема: Spread

// Напишіть програму, яка об'єднує два масиви в один, використовуючи оператор Spread, і виводить новий масив.

let ArrOne = [1, 2, 3];
let ArrTwo = [4, 5, 6];
let ArrComb = [...ArrOne, ...ArrTwo];
console.log(...ArrOne, ...ArrTwo);
console.log(ArrComb);

// Тема: Rest

// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest. Функція повинна вивести рядок і масив.

function restArr (str, ...arg){
    console.log(str);
    console.log(arg);
}
restArr('Test',1,2,3,4,)

// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.

function average(...numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const avg = sum / numbers.length; 
  return avg;
}

console.log(average(1, 2, 4, 6, 8));

// Тема: TypeOf

// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.

function showType(value) {
  console.log(`Тип аргументу: ${typeof value}`);
}

showType(123);          // number
showType("Привіт");     // string
showType(true);         // boolean
showType({ name: "Іра" }); // object
showType(undefined);    // undefined
showType(() => {});     // function

// Напишіть програму, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof. 

let value = "Привіт"; // можна змінити на будь-що: "Привіт", true, {}, тощо

if (typeof value === "number") {
  console.log("Це число");
} else if (typeof value === "string") {
  console.log("Це рядок");
} else {
  console.log("Це інший тип");
}

value = "Привіт";  // рядок
value = 123;       // число
value = true;      // інший тип