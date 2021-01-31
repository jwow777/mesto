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
    this._cardImage = this._element.querySelector(".element__image");
    this._locationName = this._element.querySelector(".element__location");
    this._likeButton = this._element.querySelector(".element__btn-like");
    this._deleteButton = this._element.querySelector(".element__btn-delete");

    this._locationName.textContent = this._title;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;

    this._setEventListeners();
    return this._element;
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("element__btn-like_active");
  }

  _handleDeleteButton() {
    this._element.remove();
    delete this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._deleteButton.addEventListener("click", (evt) => {
      this._handleDeleteButton(evt);
    });

    this._cardImage.addEventListener("click", this._handleCardClick);
  }
}