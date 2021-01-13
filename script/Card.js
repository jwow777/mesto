import { cardSelector } from "./index.js";
import { closeByEscape } from "./util.js";

const openPopupImage = document.querySelector(".popup_overlay_image");
const popupImage = document.querySelector(".popup__image");
const popupDescription = document.querySelector(".popup__description");

class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = this._cardSelector.content.querySelector(".element").cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__location").textContent = this._name;
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__image").alt = this._name;

    return this._element;
  }

  _handleLikeButton() {
    this._element.querySelector(".element__btn-like").classList.toggle("element__btn-like_active");
  }

  _handleDeleteButton() {
    this._element.remove();
    delete this._element;
  }

  _handleOpenPopup() {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupDescription.textContent = this._name;
    openPopupImage.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEscape);
  }

  _setEventListeners() {
    this._element.querySelector(".element__btn-like").addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._element.querySelector(".element__btn-delete").addEventListener("click", (evt) => {
      this._handleDeleteButton(evt);
    });

    this._element.querySelector(".element__image").addEventListener("click", () => {
      this._handleOpenPopup();
    });
  };
};

export { Card };