// Объявление переменных

let popupOpened = document.querySelector('.popup'),
    startFullName = document.querySelector('.profile__full-name'), 
    startDescription = document.querySelector('.profile__description'),
    fullName = document.querySelector('.popup__input[name="full-name"]'),
    description = document.querySelector('.popup__input[name="description"]'),
    formElement = document.querySelector('.popup__container'),
    editButton = document.querySelector('.profile__button-edit'),
    closeButton = document.querySelector('.popup__button-close');

// Функция появления popup и внесения данных пользователя в input
function popupOpen() {
  popupOpened.classList.add('popup_opened');

  fullName.value = startFullName.textContent;
  description.value = startDescription.textContent;
}

// Функция закрытия popup
function popupClose() {
  popupOpened.classList.remove('popup_opened');
}

// Сохранение данных
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    // Вставьте новые значения с помощью textContent
    startFullName.textContent = fullName.value;
    startDescription.textContent = description.value;
    // Закрывает popup после нажатие на Сохранить
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»

editButton.addEventListener('click', popupOpen); 
closeButton.addEventListener('click', popupClose); 