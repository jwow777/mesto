// Объявление переменных
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

const page = document.querySelector('.page');

const authorName = document.querySelector(".profile__full-name");
const authorDescription = document.querySelector(".profile__description");

const сardsContainerElement = document.querySelector('.elements__container');	
const templateElement = document.querySelector('#card-template');

const popupA = document.querySelectorAll('.popup')[0];
const popupB = document.querySelectorAll('.popup')[1];
const popupC = document.querySelectorAll('.popup')[2];
const popupFormA = document.querySelectorAll('.popup__form')[0];
const popupFormB = document.querySelectorAll('.popup__form')[1];
const firstInputA = document.querySelectorAll('.popup__input')[0];
const firstInputB = document.querySelectorAll('.popup__input')[2];
const secondInputA = document.querySelectorAll('.popup__input')[1];
const secondInputB = document.querySelectorAll('.popup__input')[3];

const closeButtonA = document.querySelectorAll('.popup__button-close')[0];
const closeButtonB = document.querySelectorAll('.popup__button-close')[1];
const closeButtonC = document.querySelectorAll('.popup__button-close')[2];
const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.profile__button-add');

const popupImage = document.querySelector('.popup__image');
const popupDescription = document.querySelector('.popup__description');

// Открытие/Закрытие 1 popup
function togglePopupA () {
  popupA.classList.toggle('popup_opened');
};

// Открытие/Закрытие 2 popup
function togglePopupB () {
  popupB.classList.toggle('popup_opened');
};

// Открытие/Закрытие 3 popup
function togglePopupC () {
  popupC.classList.toggle('popup_opened');
};

// Сохранение данных в 2 форме
function submitFormAddCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  const inputPlace = firstInputB.value;
  const inputUrl = secondInputB.value;
  const newItemHTML = composeItem({ 
    name: inputPlace,
    link: inputUrl
  });
  сardsContainerElement.prepend(newItemHTML);

  togglePopupB();
};

function openPopupFormAddCard() {
  togglePopupB();

  // Обнуление значений input
  firstInputB.value = '';
  secondInputB.value = '';

  closeButtonB.addEventListener('click', togglePopupB);

  popupFormB.addEventListener('submit', submitFormAddCard);
};

addButton.addEventListener('click', openPopupFormAddCard);

// Сохранение данных в 1 форме
function submitFormEdit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Вставьте новые значения с помощью textContent
  authorName.textContent = firstInputA.value;
  authorDescription.textContent = secondInputA.value;
  
  togglePopupA();
};

function openPopupFormEdit() {
  togglePopupA();

  // Вставил в форму значения, которые уже на сайте
  firstInputA.value = authorName.textContent;
  secondInputA.value = authorDescription.textContent;

  closeButtonA.addEventListener('click', togglePopupA);

  popupFormA.addEventListener('submit', submitFormEdit);
};

editButton.addEventListener('click', openPopupFormEdit);

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
  linkElement.alt = item.name;
  
  linkElement.addEventListener('click', evt => {
    togglePopupC();
    
    popupImage.src = linkElement.src;
    popupImage.alt = nameElement.textContent;
    popupDescription.textContent = nameElement.textContent;

    closeButtonC.addEventListener('click', togglePopupC);
  });

  const likeButton = newCard.querySelector('.element__button-like');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__button-like_active');
  }); 

  const deleteButton = newCard.querySelector('.element__button-delete');
  deleteButton.addEventListener('click', evt => {
    const deleteCard = evt.target.closest('.element');
    deleteCard.remove();
  });

  return newCard;
};

renderList();