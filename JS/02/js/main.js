let result1 = (5 + 3) * 2 - 7;
let result2 = (10 / 2) ** 2;
let result3 = 2 * (4 + 3) - (8 / 2);
let result4 = (15 % 4) + 5;
let result5 = 3 - (2 ** 4);

console.log(`(5 + 3) * 2 - 7 = ${result1}`)
console.log(`(10 / 2) ** 2 = ${result2}`)
console.log(`2 * (4 + 3) - (8 / 2) = ${result3}`)
console.log(`(15 % 4) + 5 = ${result4}`)
console.log(`3 - (2 ** 4) = ${result5}`)

let firstVariable = 2;
let secondVariable = 14;
let thirdVariable = 8;

let result6 = secondVariable + firstVariable;
let result7 = secondVariable - firstVariable;
let result8 = secondVariable * firstVariable;
let result9 = secondVariable / firstVariable;
let result10 = secondVariable % firstVariable;
let result11 = secondVariable ** firstVariable;

console.log(`14 + 2 = ${result6}`)
console.log(`14 - 2 = ${result7}`)
console.log(`14 * 2 = ${result8}`)
console.log(`14 / 2 = ${result9}`)
console.log(`14 % 2 = ${result10}`)
console.log(`14 ** 2 = ${result11}`)

console.log(`(14 + 2) * 2 - 14 = ${(result6)*firstVariable-secondVariable}`)

console.log(`(2 + 14 - 8) / (2 ** 4 - 14) = ${(firstVariable+secondVariable-thirdVariable)/(firstVariable**4-secondVariable)}`)