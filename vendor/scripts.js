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

// Сохранение данных

// let fullName = document.querySelector('.profile__fullName');
// let description = document.querySelector('.profile__description');

// console.log(fullName.textContent);
// console.log(description.textContent);

let formElement = document.querySelector('.popup__container'); // Находим форму в DOM

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    // Находим поля формы в DOM
    let nameInput = document.querySelector('.');
    let jobInput = document.querySelector('.'); 

    // Получите значение полей из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
}

formElement.addEventListener('submit', formSubmitHandler); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»