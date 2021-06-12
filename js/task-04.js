const actions = document.querySelectorAll('#counter button');
const spanEl = document.querySelector('#value');

const bthDecr = actions[0];
const btnIncr = actions[1];
let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  updateCounter();
};

const increment = () => {
  counterValue += 1;
  updateCounter();
};

function updateCounter() {
  spanEl.textContent = counterValue;
}

btnIncr.addEventListener('click', increment);
bthDecr.addEventListener('click', decrement);