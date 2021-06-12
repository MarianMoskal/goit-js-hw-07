'use strict';
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Створити</button>
//   <button type="button" data-action="destroy">Очистити</button>
// </div>

// <div id="boxes"></div>

const parentDiv = document.getElementById('controls');
const inputEl = parentDiv.firstElementChild;
const renderBtn = inputEl.nextElementSibling;
// console.log(renderBtn);
const destroyBtn = parentDiv.lastElementChild;
const boxesDiv = document.getElementById('boxes');

const pattern = 30;
const subPattern = 10;
let result = [];

const colors = ["red", "blue", "green", "yellow", "pink", "orange"];
const randomizer = max => {
  return Math.floor(Math.random() * max);
};

const createBoxes = (amount) => {

    for (let i = 0; i < amount; i += 1){
        const item = document.createElement('div');
       
        item.style.backgroundColor = colors[randomizer(colors.length)];
        
       
        // console.log(item.style.height)
        if (item.style.height >= `${pattern}px`) {
            
            item.style.height = `${pattern + subPattern}px`;
            console.log('hello');
        } else {
            item.style.height = `${pattern}px`;

            console.log(parseInt(item.style.width = item.style.width + `${subPattern}px`));
            };
        //     if (item.style.width > `${pattern}px`) {
        //         item.style.width += `${subPattern}px`;
        //     } else {
        //         item.style.width = `${pattern}px`;
        // };
        
        //  console.log(item);
        result.push(item);
    };
    
    return result;
    
};

renderBtn.addEventListener('click', createBoxes(6));

boxesDiv.append(...result);

const destroyBoxes = () => {

};


console.log(result);





























