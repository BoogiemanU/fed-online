// Створіть HTML-сторінку з елементами header, section,  div, задайте елементам атрибути id, сlass.

// Виберіть ці елементи за допомогою 

// getElementById

// getElementsByClassName

// getElementsByTagName

// Створіть список ul з 5 елементами li всередині.

// За допомогою querySelector виберіть:

// - перший елемент списку

// - останній елемент списку

// - 3 елемент списку

// За допомогою querySelectorAll

// - всі елементи li в списку

// - конвертуйте вибрані елменти в массив

// Створіть на сторінці елемент який вибирається ціми селекторами

// // let listItems = document.querySelectorAll('ul.nav > li');

// // let listItem = document.querySelectorAll('li:nth-child(2)');

console.log(document);
console.log(window);

window.onload = function(){
    let idEl = document.getElementById('test');
    console.log(idEl);
    let classEl = document.getElementsByClassName('hero__content');
    console.log(classEl);
    let nameEl = document.getElementsByTagName('li');
    console.log(nameEl);

    let qSelOne = document.querySelector('ul li');
    console.log(qSelOne);
    let qSelTwo = document.querySelector('ul li:last-child');
    console.log(qSelTwo);
    let qSelThree = document.querySelector('ul li:nth-child(3)');
    console.log(qSelThree);

    let listItems = document.querySelectorAll('ul.nav > li');
    console.log(listItems)
    let listItem = document.querySelectorAll('li:nth-child(2)');
    console.log(listItem)

}