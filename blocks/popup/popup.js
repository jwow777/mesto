let popupOpened = document.querySelector('.popup');

let startFullName, startDescription, fullName, description; // Объявление переменных

// Функция появления popup и внесения данных пользователя в input
function popupOpen() {
  popupOpened.classList.add('popup_opened');

  startFullName = document.querySelector('.profile__full-name');
  startDescription = document.querySelector('.profile__description');

  fullName = document.querySelector('.popup__input[name="full-name"]');
  description = document.querySelector('.popup__input[name="description"]');

  fullName.setAttribute('value', startFullName.textContent), 
  description.setAttribute('value', startDescription.textContent);
}

// Функция закрытия popup
function popupClose() {
  popupOpened.classList.remove('popup_opened');
}

// Сохранение данных
let formElement = document.querySelector('.popup__container'); // Находим форму в DOM

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    // Вставьте новые значения с помощью textContent
    startFullName.textContent = fullName.value;
    startDescription.textContent = description.value;
    // Закрывает popup после нажатие на Сохранить
    popupClose();
}

let editButton = document.querySelector('.profile__button-edit');
let closeButton = document.querySelector('.popup__button-close');

editButton.addEventListener('click', popupOpen); 
closeButton.addEventListener('click', popupClose); 

formElement.addEventListener('submit', formSubmitHandler); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»