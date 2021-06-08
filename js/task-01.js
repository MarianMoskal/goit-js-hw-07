'use strict';

const list = document.querySelector('#categories');

const items = list.querySelectorAll('.item');

// const countCategories = (items) => {
//      let sum = 0;
//     for (let i = 1; i < items.length; i++) {
//         sum += i;
//     };
//     return `'У списку ${sum} категорії.'`; 
// };

const countCategories = (items) => {
    return `'У списку ${items.length} категорії.'`; 
};

console.log(countCategories(items));


items.forEach(item => {

    console.log('Категорія:', item.firstElementChild.innerHTML);

    const els = item.lastElementChild.children;

    console.log('Кількість елементів:', els.length);

});

















