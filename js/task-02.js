'use strict';

// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
// ];

// const list = document.querySelector('#ingredients');

// ingredients.forEach(el => {

//     const item = document.createElement('li');

//     item.textContent = el;

//     list.appendChild(item);
// });


// console.log(list);



const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

// const list = document.querySelector('#ingredients');
// const items = [];

// ingredients.forEach(el => {

//     const item = document.createElement('li');

//     item.textContent = el;

//     items.push(item);
// });

// list.prepend(...items);
 
// console.log(list);




const list = document.querySelector('#ingredients');

const createElements = ingredients => {

  return ingredients.map(ingredient => {

    const item = document.createElement('li');

    item.textContent = ingredient;

    return item;
  });
};

const items = createElements(ingredients);

list.prepend(...items);
 
// console.log(list);





































