/*Задание 3
Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

<ul id="gallery"></ul>
Используй массив объектов images для создания тегов img вложенных в li. 
Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
*/
const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


/* Є масив об'єктів images[] ==> в DOM елементів img{}
 * массив объектов images для создания тегов img    вложенных в li. */
  const img = images.map(image => {
      const liRef = document.createElement('li'); /**созданиe тегов img вложенных в li. */
      console.log(liRef, ':)LiRef');
         // const img = document.createElement('img');

/**разбирает указанный текст как HTML и вставляет полученные узлы(nodes) в DOM в позицию
 * cразу после открывающего тега li (перед первым потомком). */
        /*...можно собрать все данные в одну строку, через map.join, или reduce 
        и сразу вставить через insertAdjacentHTML */
      liRef.insertAdjacentHTML('afterBegin', `<img src = "${image.url}" alt = "${image.alt}">`);
      console.log(liRef);
      return liRef;
  });
  console.log(img);

  /***  в файлі HTML document. шукаємо список ul#gallery*/
const galleryRef = document.querySelector('#gallery'); //* ul#gallery, # - значення елем. по id //
console.log(galleryRef);   

galleryRef.append(...img);        // сюди  передаєм, але поелементно (доповнюєм)
console.log(galleryRef);


