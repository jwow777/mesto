// Объявление переменных
const body = document.querySelector(".page");
const authorName = document.querySelector(".profile__full-name");
const authorDescription = document.querySelector(".profile__description");

const popupOpened = document.querySelector(".popup");
const popupOpeneda = document.querySelector(".popup").content;
const popupForm = popupOpened.querySelector(".popup__form");
const popupTitle = popupOpened.querySelector(".popup__title");
const firstInput = popupOpened.querySelectorAll(".popup__input")[0];
const secondInput = popupOpened.querySelectorAll(".popup__input")[1];
const popupClosed = popupOpened.querySelector(".popup__button-close");

// Функция появления popup
function popupOpen() {
  popupOpened.classList.add("popup_opened");
}
// Функция появления popup
function popupClose() {
  popupOpened.classList.remove("popup_opened");
}

popupClosed.addEventListener("click", popupClose);

// Универсальная форма
function bodyForm() {
  popupOpen();

  const formElement = popupOpeneda.cloneNode(true);

  // Добавление html-кода в конец перед body
  body.append(formElement);
}

// Сохранение данных
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Вставьте новые значения с помощью textContent
  authorName.textContent = firstInput.value;
  authorDescription.textContent = secondInput.value;

  popupClose();
}

popupForm.addEventListener("submit", formSubmitHandler);

const editButton = document.querySelector(".profile__button-edit");
editButton.addEventListener("click", function () {
  // Добавление значений атрибутам
  popupTitle.textContent = "Редактировать профиль";
  firstInput.placeholder = "Имя";
  secondInput.placeholder = "О себе";
  // Вставил в форму значения, которые уже на сайте
  firstInput.value = authorName.textContent;
  secondInput.value = authorDescription.textContent;

  bodyForm();
});


const addButton = document.querySelector(".profile__button-add");
addButton.addEventListener("click", function () {
  // Добавление значений атрибутам
  popupTitle.textContent = "Место";
  firstInput.placeholder = "Название";
  secondInput.placeholder = "Ссылка на картинку";
  // Обнуление значений input
  firstInput.value = '';
  secondInput.value = '';
  bodyForm();
});

// Добавляем карты на сайт
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const сardsContainerElement = document.querySelector('.elements__container');	
const templateElement = document.querySelector('#card-template');

function renderList() {
  const сardsItems = initialCards.map(composeItem);
  сardsContainerElement.append(...сardsItems);
};

function composeItem(item) {
  const newCard = templateElement.content.cloneNode(true);
  
  const nameElement = newCard.querySelector('.element__location');
  nameElement.textContent = item.name;
  const linkElement = newCard.querySelector('.element__image');
  linkElement.src = item.link;
  
  const likeButton = newCard.querySelector('.element__button-like');
  likeButton.addEventListener('click', evt => {
    likeButton.classList.toggle('element__button-like_active');
  }); 

  const deleteButton = newCard.querySelector('.element__button-delete');
  deleteButton.addEventListener('click', removeItem);

  return newCard;
};

function removeItem(event){
  const targetElement = event.target;
  const targetItem = targetElement.closest('.element');
  targetItem.remove();
};

renderList();