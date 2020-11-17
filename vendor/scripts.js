// Открытие и закрытие popup

let popupOpened = document.querySelector('.popup');

let editButton = document.querySelector('.button_edit');

editButton.addEventListener('click', function () {
  popupOpened.classList.add('popup_opened');
}); 

let closeButton = document.querySelector('.button_close');

closeButton.addEventListener('click', function () {
  popupOpened.classList.remove('popup_opened');
}); 

// Внесение в popup данных, которые уже на странице

let startFullName = document.querySelector('.profile__fullName').textContent;
let startDescription = document.querySelector('.profile__description').textContent;

let fullName = document.querySelector('.button_text[name="fullName"]');
let description = document.querySelector('.button_text[name="description"]');

fullName.setAttribute('value', startFullName);
description.setAttribute('value', startDescription);

// Сохранение данных

let formElement = document.querySelector('.popup__container'); // Находим форму в DOM

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    // Находим поля формы в DOM
    // Получите значение полей из свойства value
    let nameInput = document.querySelector('.button_text[name="fullName"]').value;
    let jobInput = document.querySelector('.button_text[name="description"]').value; 

    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    document.querySelector('.profile__fullName').textContent = nameInput;
    document.querySelector('.profile__description').textContent = jobInput;

    // Сохраняет и закрывает popup
    popupOpened.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»