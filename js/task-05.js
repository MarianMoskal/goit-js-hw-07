'use strict';

const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

const getNameFromInput = (e) => {
    console.log(inputEl.value);
    inputEl.value.trim() === "" ?
    outputEl.textContent = 'незнакомец':
    outputEl.textContent = inputEl.value;    
};

inputEl.addEventListener('input', getNameFromInput);














































