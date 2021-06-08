'use strict';


const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

const connectInputWithSpan = (e) => {
    spanEl.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener('input', connectInputWithSpan);



































