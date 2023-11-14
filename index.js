const calculator = document.querySelector('.calculator'); // именуем селектор по классу
const result = document.querySelector('#result');  // именуем селектор по индификатору

calculator.addEventListener('click', function (event) {  // добавляем слушатель, при событии клика 
  if (!event.target.classList.contains('calculator__btn')) return; // проверяем есть ли такой класс
  console.log(event.target);  //смотрим какое именно событие вызвано
  let value = event.target.innerText;  //именуем отображаение содержимого элемента.

  switch (value) {  // заменяет собой сразу несколько if (если)
    case 'C': // здесь выполняются инструкции, если происходит событие (C)
      result.innerText = '';  // обнуляется
      break;  // завершаем цикл

    case '=':  // здесь выполняются инструкции, если происходит событие (=)
      // Проверка выражения
      if (result.innerText.search(/[^0-9*/+-]/mi) != -1) return;  // выполняет поиск первого соответствия регулярному выражению внутри строки
      // если совпадений не будет, то метод search() вернет нам значение -1
      // Исполнение выражения
      result.innerText = eval(result.innerText).toFixed(2);  // оставляем только 2 знака после десятичной точки
      break;  // завершаем цикл

    default: // поведение остальных клавиш мы сделаем операцией по умолчанию 
      result.innerText += value;
  }
});