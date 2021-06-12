const controlArrayElement = document.querySelectorAll('#controls button');
const btnRenderElement = controlArrayElement[0];
const btnDestroyElement = controlArrayElement[1];
const inputElement = document.querySelector('input[type="number"]');
const boxesElement = document.querySelector('#boxes');

let inputValue = 0;

inputElement.addEventListener('input', onInputTargetInput);
btnRenderElement.addEventListener('click', onClickTargetBtn);
btnDestroyElement.addEventListener('click', destroyBoxes);

function onInputTargetInput(event) {
  inputValue = event.currentTarget.value;
  return Number(inputValue);
}

function createBoxes(amount) {
  let boxesArray = [];
  let increment = 0;

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${30 + increment}px`;
    newBox.style.height = `${30 + increment}px`;
    newBox.style.backgroundColor = '#' + randomColors();
    boxesArray.push(newBox);

    increment += 10;
  }

  boxesElement.append(...boxesArray);
}

function onClickTargetBtn() {
  return createBoxes(inputValue);
}

function destroyBoxes() {
  boxesElement.innerHTML = '';
  inputElement.value = '';
}

function randomColors() {
  return Math.floor(Math.random() * 16777215).toString(16);
}