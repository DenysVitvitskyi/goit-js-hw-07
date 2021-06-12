const setText = {
    inputElement: document.querySelector('#name-input'),
    spanElement: document.querySelector('#name-output'),
  };

  setText.inputElement.addEventListener('input', e => {
      if (!e.currentTarget.value) {
          setText.spanElement.textContent = 'незнакомец';
      } else {
          setText.spanElement.textContent = e.currentTarget.value;
      }
    });