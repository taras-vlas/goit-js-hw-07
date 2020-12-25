/*Задание 2    виконанати в   "use strict";
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, после чего вставит все li за одну операцию 
в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement().
*/

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',  
    'Приправы',
  ];


const ingredientRef = ingredients.map((ingredient,index,array) => {
//const ingredientRef = ingredients.forEach(ingredient => {
  const liRef = document.createElement('li'); //li - і'мя тега 
  //console.log( liRef);
  
  liRef.textContent = ingredient;


  
  return liRef;
  
});

 // console.log('ingredientRef',ingredientRef );
  
 
/***  Знаходимо і добавляєм/вставим вузол/список(ingredientRef)  в ul.ingredient
 * Знаходимо в DOM список, в який додаватимемо результат функції  ingredientRef  */
const idRef = document.querySelector('ul#ingredients');  // ul#ingredients - привязка до id
//console.log(idRef);
/**** Додаємо в DOM     */
idRef.append(...ingredientRef);        // сюди  передаєм, але поелементно (доповнюєм)
console.log(idRef);






