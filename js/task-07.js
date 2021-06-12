const refs = {
    rangeEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
  };
  
  refs.rangeEl.addEventListener(
    'change',
    e => (refs.textEl.style.fontSize = e.currentTarget.value + 'px'),
  );