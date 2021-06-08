'use strict';

const inputEl = document.getElementById("validation-input");
const requireLength = parseInt(inputEl.dataset.length);
// console.log(requireLength);

const checkValueFromInput = (e) => {

    if (inputEl.value.length === requireLength) {
        inputEl.classList.add('valid');
        
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.replace('invalid', 'valid');
        }
    }

    if (inputEl.value.length !== requireLength) {
        inputEl.classList.add('invalid');

        if (inputEl.classList.contains('valid')) {
            inputEl.classList.replace('valid', 'invalid');
        }
    }

    // if (inputEl.value.trim() === "") {
    if (inputEl.value === "") {
        if (inputEl.classList.contains('valid') || inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('valid');
            inputEl.classList.remove('invalid');
        }
    }
};

inputEl.addEventListener('blur', checkValueFromInput);



















