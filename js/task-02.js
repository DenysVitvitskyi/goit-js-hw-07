const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const createItemsArray = array => {
    return array.map(element => {
      const itemElement = document.createElement('li');
      itemElement.textContent = element;
      itemElement.classList.add('item');
      return itemElement;
    });
  };
  
  const listElement = document.querySelector('#ingredients');
  const itemsArray = createItemsArray(ingredients);
  listElement.append(...itemsArray);