const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const createItemsArr = arr => {
    return arr.map(el => {
      const itemEl = document.createElement('li');
      itemEl.textContent = el;
      itemEl.classList.add('item');
      return itemEl;
    });
  };
  
  const listEl = document.querySelector('#ingredients');
  const itemsArr = createItemsArr(ingredients);
  listEl.append(...itemsArr);