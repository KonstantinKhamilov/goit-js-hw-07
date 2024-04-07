// Выбираем виджет по классу '.widget'
const widget = document.querySelector(".widget");

// Внутри виджета выбираем элемент, который отображает текущий цвет
const colorSpan = widget.querySelector(".color");

// Внутри виджета выбираем кнопку по классу '.change-color'
const button = widget.querySelector(".change-color");

// Добавляем обработчик события "click" на кнопку
button.addEventListener("click", function (event) {
  // Отменяем стандартное поведение кнопки
  event.preventDefault();

  // Генерируем случайный цвет в формате HEX
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  // Применяем сгенерированный цвет к фону виджета
  widget.style.backgroundColor = randomColor;

  // Отображаем сгенерированный цвет в тексте
  colorSpan.textContent = randomColor;
});
