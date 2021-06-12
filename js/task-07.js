const replacement = {
    rangeElement: document.querySelector('#font-size-control'),
    textElement: document.querySelector('#text'),
  };
  
  replacement.rangeElement.addEventListener(
    'change',
    e => (replacement.textElement.style.fontSize = e.currentTarget.value + 'px'),
  );