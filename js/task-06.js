const inputEl = document.querySelector('#validation-input');

function swapClasses(oldClass, newClass) {
  inputEl.classList.remove(oldClass);
  inputEl.classList.add(newClass);
}

inputEl.addEventListener('blur', e => {
  if (e.currentTarget.value.length !== Number(e.currentTarget.dataset.length)) {
    return swapClasses('valid', 'invalid');
  }

  return swapClasses('invalid', 'valid');
});