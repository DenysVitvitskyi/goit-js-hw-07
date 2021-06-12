const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
  };
  
  // ---------- Через свойство value ----------
  // refs.inputEl.addEventListener('input', () => !refs.inputEl.value ? refs.spanEl.textContent = 'незнакомец' : refs.spanEl.textContent = refs.inputEl.value);
  
  // ----------- Через объект event -----------
  refs.inputEl.addEventListener('input', e =>
    !e.currentTarget.value
      ? (refs.spanEl.textContent = 'незнакомец')
      : (refs.spanEl.textContent = e.currentTarget.value),
  );
  
  //  event.currentTarget.value === inputEl.value ---- зачем тогда заморачиваться через event?