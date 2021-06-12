'use strict';

const inputEl = document.getElementById("validation-input");
const requireLength = parseInt(inputEl.dataset.length);
// console.log(requireLength);

const checkValueFromInput = (e) => {

    if (inputEl.value.length === requireLength) {
        inputEl.classList.add('valid');
        
        inputEl.classList.replace('invalid', 'valid');
        
    }

    if (inputEl.value.length !== requireLength) {
        inputEl.classList.add('invalid');

        inputEl.classList.replace('valid', 'invalid');
    }

    if (inputEl.value === "") {
        inputEl.classList.remove('invalid');
    }
};

inputEl.addEventListener('blur', checkValueFromInput);



















