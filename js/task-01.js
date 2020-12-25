/* В HTML есть список категорий ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Животные</h2>

    <ul>
      <li>Кот</li>
      <li>Хомяк</li>
      <li>Лошадь</li>
      <li>Попугай</li>
    </ul>
  </li>
  <li class="item">
    <h2>Продукты</h2>

    <ul>
      <li>Хлеб</li>
      <li>Петрушка</li>
      <li>Творог</li>
    </ul>
  </li>
  <li class="item">
    <h2>Технологии</h2>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node</li>
    </ul>
  </li>
</ul>
Напиши скрипт, который выполнит следующие операции.
Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
        Например для первой категории получится:
Категория: Животные
Количество элементов: 4                
*/
               
// const itemsRef = document.querySelectorAll('.item'); // селектор по класу 
//маємо список NodeList, в ньому є .iterator. Беремо вираз у [] і маємо масив!!!
const itemsRef = [...document.querySelectorAll('.item')];
        //console.log(itemsRef, itemsRef.length);
console.log(`В списке ${itemsRef.length} категории.`);


            //const category = itemsRef.forEach(item => {   //forEach нічого не повертає
const category = itemsRef.map(item => {
    const titleRef = item.querySelector('h2'); // визов селектора йде по -"h2",  -НЕ по класу
            //console.log(`titleRef: ${titleRef}`);  //= titleRef: [object HTMLHeadingElement]
      //  console.log(titleRef);
    const listRef = item.querySelectorAll('li'); // визов селектора по -"ul li",  -НЕ по класу
            //console.log(`listRef: ${listRef}`);    //= listRef: [object HTMLUListElement]
      //  console.log(listRef, listRef.length);
    return {
        titleRef: titleRef.textContent, 
        listRef: listRef.length
        };   // саме дужки {} !!!     
});
category.forEach(entry => {  // entry - сущність
    console.log(`Категория: ${entry.titleRef}`,`\r\nКоличество элементов: ${entry.listRef}`)
});
            //console.log(`category: ${category}`); //= category:[object HTMLLIElement],[object HTMLLIElement],[object HTMLLIElement]
//console.log(category);
