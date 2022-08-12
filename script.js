const button = document.getElementById('btn');
const inputRange = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');
const inputText = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const circleButton = document.getElementById('e_btn');
circleButton.style.display = 'none';

const changeColor = function () {
    console.log('Вы нажали на кнопку!');
    square.style.backgroundColor = `${inputText.value}`;
    inputText.value = '';
};

button.addEventListener('click', changeColor);

rangeSpan.textContent = '50%';

const changeParams = function (event) {
    rangeSpan.textContent = event.target.value + '%';
    circle.style.height = `${rangeSpan.textContent}`;
    circle.style.width = `${rangeSpan.textContent}`;
};

inputRange.addEventListener('input', changeParams);
