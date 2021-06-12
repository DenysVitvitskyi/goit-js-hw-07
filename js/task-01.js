const listElement = document.getElementById('categories');
console.log(`В списке ${listElement.children.length} категории.`);
const getCataloge = listOfItems => {
  [...listOfItems.children].map(item => {
    const title = item.querySelector('h2').textContent;
    const elemAmount = item.querySelector('ul').children.length;
    console.log(`Категория: ${title}`);
    console.log(`Количество элементов: ${elemAmount}`);
  });
};
getCataloge(listElement);