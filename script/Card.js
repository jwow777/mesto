import { closeByEscape } from './index.js';

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

const сardsContainerElement = document.querySelector(".elements__container");

const openPopupImage = document.querySelector(".popup_overlay_image");
const popupImage = document.querySelector(".popup__image");
const popupDescription = document.querySelector(".popup__description");
const popupImageCloseButton = document.querySelector(".popup__btn-close_type_image");

class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
  }

  _getTemplate() {
    const cardElement = document.querySelector('#card-template').content.querySelector('.element').cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__location').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;

    return this._element;
  }

  _likeButton() {
    this._element.querySelector('.element__btn-like').classList.toggle('element__btn-like_active');
  }

  _deleteButton(evt) {
    evt.target.closest(".element").remove();
  }

  _handleOpenPopup() {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupDescription.textContent = this._name;
    // заменить openPopupImage
    openPopupImage.classList.add('popup_opened');
    document.addEventListener("keydown", closeByEscape);
  }

  _handleClosePopup() {
    // заменить openPopupImage
    openPopupImage.classList.remove('popup_opened');
    document.removeEventListener("keydown", closeByEscape);
  }

  _setEventListeners() {
    this._element.querySelector('.element__btn-like').addEventListener('click', () => {
      this._likeButton();
    });

    this._element.querySelector('.element__btn-delete').addEventListener('click', (evt) => {
      this._deleteButton(evt);
    });

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupImageCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
  }
}

initialCards.forEach((item) => {
  const card = new Card(item);    
  const cardElement = card.generateCard();

  сardsContainerElement.append(cardElement);
});

export { сardsContainerElement, Card };