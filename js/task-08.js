const controlsArrEl = document.querySelectorAll('#controls button');
const btnRenderEl = controlsArrEl[0];
const btnDestroyEl = controlsArrEl[1];
const inputEl = document.querySelector('input[type="number"]');
const boxesEl = document.querySelector('#boxes');

let inputValue = 0;

// -------- Вешаем слушателей
inputEl.addEventListener('input', onInputTargetInput);
btnRenderEl.addEventListener('click', onClickTargetBtn);
btnDestroyEl.addEventListener('click', destroyBoxes);

// -------- Возвращает input.value
function onInputTargetInput(event) {
  inputValue = event.currentTarget.value;
  return Number(inputValue);
}

// -------- Создаёт divs
function createBoxes(amount) {
  let boxesArr = [];
  let increment = 0;

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${30 + increment}px`;
    newBox.style.height = `${30 + increment}px`;
    newBox.style.backgroundColor = '#' + randomColors();
    boxesArr.push(newBox);

    increment += 10;
  }

  boxesEl.append(...boxesArr);
}

// -------- Загоняет input.value в качестве аргумента в createBoxes()
function onClickTargetBtn() {
  return createBoxes(inputValue);
}

// -------- Функция очищает родительский div от созданного контента
function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}

// -------- Функция создает рандомные цвета
function randomColors() {
  return Math.floor(Math.random() * 16777215).toString(16);
}