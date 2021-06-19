'use strict';

const parentDiv = document.getElementById('controls');
const boxesDiv = document.getElementById('boxes');
const inputEl = parentDiv.firstElementChild;
const renderBtn = inputEl.nextElementSibling;
const destroyBtn = parentDiv.lastElementChild;

let itemSize = 30;

const colors = ["red", "blue", "green", "yellow", "pink", "orange", "brown", "black"];
const randomizer = max => {
  return Math.floor(Math.random() * max);
};


const createBoxes = () => {
  const amount = inputEl.value;
  const items = [];
      for (let i = 0; i < amount; i += 1){
          const item = document.createElement('div');
        item.style.backgroundColor = colors[randomizer(colors.length)];
        item.style.width = `${itemSize}px`;
        item.style.height = `${itemSize}px`;
        itemSize += 10;
        items.push(item);
      };
  boxesDiv.append(...items);
};

const destroyBoxes = () => {
  boxesDiv.innerHTML = '';
  itemSize = 30;
};

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
































