const doing = document.querySelectorAll('#counter button');
const spanElement = document.querySelector('#value');

const btnDecr = doing[0];
const btnIncr = doing[1];
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
  spanElement.textContent = counterValue;
}

btnIncr.addEventListener('click', increment);
btnDecr.addEventListener('click', decrement);