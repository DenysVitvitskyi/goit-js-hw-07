const inputElement = document.querySelector('#validation-input');

function replacementClass(oldClass, newClass) {
  inputElement.classList.remove(oldClass);
  inputElement.classList.add(newClass);
}

inputElement.addEventListener('blur', e => {
  if (e.currentTarget.value.length !== Number(e.currentTarget.dataset.length)) {
    return replacementClass('valid', 'invalid');
  } else {
      return replacementClass('invalid', 'valid');
  }
});