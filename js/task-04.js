/**Задание 4
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */


let counterValue = 0;

const buttonRef = {
  subtraction: document.querySelector("[data-action='decrement']"), //пошук все элементы внутри elem
  span: document.querySelector("#value"),
  addition: document.querySelector("[data-action='increment']"),
};

const decrement = () => {
  counterValue -= 1;

  buttonRef.span.textContent = counterValue;  
};

const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;//дає ссилку на елемент по його ідентификатору (строка - ID); 
};

buttonRef.subtraction.addEventListener("click", decrement);
buttonRef.addition.addEventListener("click", increment);//'+'слушателя события на элемент; /'input' имя события;




