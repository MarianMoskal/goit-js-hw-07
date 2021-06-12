'use strict';

let counterValue = parseInt((document.getElementById('value')).textContent);
const counter = document.getElementById('value');
console.log(counter.textContent);

const buttons = document.querySelectorAll('button');
const decBtn = buttons[0];
const inkBtn = buttons[1];

const increment = () => {    
    
    counter.textContent = counterValue += 1;
    // console.log(counterValue);
};


inkBtn.addEventListener('click', increment);

const decrement = () => { 
     counter.textContent = counterValue -= 1;
    // console.log(counterValue);
};

decBtn.addEventListener('click', decrement);
























