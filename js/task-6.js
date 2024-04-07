// Функция для генерации случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Получаем ссылки на необходимые элементы DOM
const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Функция для создания коллекции элементов
function createBoxes(amount) {
  // Проверяем, что количество элементов в допустимом диапазоне
  if (amount < 1 || amount > 100) {
    alert(`Невірне значення! Введіть від 1-го до ста!`);
    return;
  }

  // Создаем массив для хранения новых элементов
  let newBoxes = [];

  // Создаем нужное количество элементов
  for (let i = 0; i < amount; i++) {
    // Создаем новый элемент div
    const newBox = document.createElement("div");

    // Устанавливаем размеры элемента
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;

    // Устанавливаем случайный цвет фона
    newBox.style.backgroundColor = getRandomHexColor();

    // Добавляем новый элемент в массив
    newBoxes.push(newBox);
  }

  // Добавляем все новые элементы в DOM
  boxesContainer.append(...newBoxes);
}

// Функция для удаления всех элементов
function destroyBoxes() {
  // Удаляем все дочерние элементы
  boxesContainer.innerHTML = "";
}

// Обработчик события для кнопки "Create"
createButton.addEventListener("click", () => {
  // Удаляем все существующие элементы
  destroyBoxes();

  // Создаем новые элементы
  createBoxes(input.value);

  // Очищаем значение ввода
  input.value = "";
});

// Обработчик события для кнопки "Destroy"
destroyButton.addEventListener("click", destroyBoxes);
