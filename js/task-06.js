/**Задание 6
 * Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на
 * правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если 
неправильное - красным. Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
} */


 /* Варіант 3 */
const inputRef = document.querySelector("#validation-input");// визов селектора йде по -"#validation-input", по id # - значення елем.
      // const validLength = Number(inputRef.dataset.length);
const validLength = Number(inputRef.getAttribute("data-length"));

inputRef.oninput = function (event) {
  inputRef.classList.remove('invalid');
  inputRef.classList.remove('valid');

  if (this.value.length === validLength) {
        inputRef.classList.add('valid');
    
 } else if (this.value.length > 0  && this.value.length !== validLength) {
          inputRef.classList.add('invalid');
  }
}

 /* Варіант 2 */
//const inputRef = document.querySelector("#validation-input");// визов селектора йде по -"#validation-input", по id # - значення елем.
//      // const validLength = Number(inputRef.dataset.length);
//const validLength = Number(inputRef.getAttribute("data-length"));
// inputRef.oninput = function (event) {
//       //alert(typeof validLength);
//       //(Number(event.target.value) === 0) 
 
//   if (this.value.length === validLength) {
//     inputRef.classList.remove('invalid');
//     inputRef.classList.add('valid');
//   } else if (this.value.length === 0) {
//     inputRef.classList.remove('invalid');
//     inputRef.classList.remove('valid');
//     } else {
//     inputRef.classList.remove('valid');
//     inputRef.classList.add('invalid');
//   } 
// }

 /* Варіант 1 */
// const inputRef = document.getElementById("validation-input");
// const validLength = Number(inputRef.getAttribute("data-length"));
//         alert(typeof validLength);

// inputRef.oninput = function() {
//         alert(typeof inputRef.value.length);
  // if (inputRef.value.length !== "") {
  //   inputRef.classList.add("invalid");
  // if (inputRef.value.length === validLength) {
  //   inputRef.classList.remove("invalid");
  //   inputRef.classList.add("valid");
  //   } 
  // if (inputRef.value.length <= 0) {
  //    inputRef.classList.remove("invalid");; 
  //    inputRef.classList.remove("valid");
  //    }
// };
        

