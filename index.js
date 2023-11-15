const calculator = document.querySelector('.calculator'); // именуем селектор по классу
const result = document.querySelector('#result');  // именуем селектор по индификатору


calculator.addEventListener('click', function (event) {  // добавляем слушатель, при событии клика 
  if (!event.target.classList.contains('calculator__btn')) return; // проверяем есть ли такой класс
  console.log(event.target);  //смотрим какое именно событие вызвано
  let value = event.target.innerText;  //именуем отображаение содержимого элемента.

  switch (value) {  // заменяет собой сразу несколько if (если)
    case 'C': // здесь выполняются инструкции, если происходит событие (C)
      result.innerText = '';
      break;  // завершаем цикл

    case '=':  // здесь выполняются инструкции, если происходит событие (=)
      // Проверка выражения
      if (result.innerText.search(/[^0-9*/+-]/mi) != -1) return;  // выполняет поиск первого соответствия регулярному выражению внутри строки
      // если совпадений не будет, то метод search() вернет нам значение -1
      // Исполнение выражения
      result.innerText = eval(result.innerText);  // отоброжаем результат
      break;  // завершаем цикл
    default: // поведение остальных клавиш мы сделаем операцией по умолчанию 
      result.innerText += value;
  }
})

// cброс (клавиатура)
calculator.addEventListener('keydown', function (event) {
  if (event.key === 'Backspace') {
    result.innerText = '';  // обнуляется
  }
});

// равно (клавиатура)
calculator.addEventListener('keydown', function (event) {
  if (event.key === '=') {
    if (result.innerText.search(/[^0-9*/+-]/mi) != -1) return;  // выполняет поиск первого соответствия регулярному выражению внутри строки
    // если совпадений не будет, то метод search() вернет нам значение -1
    // Исполнение выражения
    result.innerText = eval(result.innerText);  // отоброжаем результат
  }
});


// вывод цифр (клавиатура)

document.addEventListener('keydown', function (event) {
  if (event.key == '0' || event.key == '1'
    || event.key == '2' || event.key == '3'
    || event.key == '4' || event.key == '5'
    || event.key == '6' || event.key == '7'
    || event.key == '8' || event.key == '9'
    || event.key == '+' || event.key == '-'
    || event.key == '*' || event.key == '/')
    document.getElementById("result").value += event.key;
})


