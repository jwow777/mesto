export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._title = data.title;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick.bind(this);
  }

  _getTemplate() {
    const cardElement = this._cardSelector.content.querySelector(".element").cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__location").textContent = this._title;
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__image").alt = this._title;

    return this._element;
  }

  _handleLikeButton() {
    this._element.querySelector(".element__btn-like").classList.toggle("element__btn-like_active");
  }

  _handleDeleteButton() {
    this._element.remove();
    delete this._element;
  }

  _setEventListeners() {
    this._element.querySelector(".element__btn-like").addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._element.querySelector(".element__btn-delete").addEventListener("click", (evt) => {
      this._handleDeleteButton(evt);
    });

    this._element.querySelector(".element__image").addEventListener("click", this._handleCardClick);
  }
}