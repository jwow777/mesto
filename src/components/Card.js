export default class Card {
  constructor(data, cardSelector, myId, handleCardClick, handleCardDelete, handleCardLike) {
    this._cardSelector = cardSelector;
    this._cardData = data;
    this._name = this._cardData.name;
    this._link = this._cardData.link;
    this._likes = this._cardData.likes.length;
    this._cardId = this._cardData._id;
    this._ownerId = this._cardData.owner._id;
    this._myId = myId;
    this._handleCardClick = handleCardClick.bind(this);
    this._handleCardDelete = handleCardDelete.bind(this);
    this._handleCardLike = handleCardLike.bind(this);
  }

  _myCard() {
    return this._ownerId === this._myId ? true : false;
  }

  _getTemplate() {
    const cardElement = this._cardSelector.content.querySelector(".element").cloneNode(true);

    return cardElement;
  }

  isLike(cardData) {
    return cardData.likes.some(like => {
      return like._id === this._myId;
    })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._locationName = this._element.querySelector(".element__location");
    this._likeCounter = this._element.querySelector(".element__like-counter");
    this._likeButton = this._element.querySelector(".element__btn-like");
    this._deleteButton = this._element.querySelector(".element__btn-delete");
    if (!this._myCard()) {
      this._deleteButton.style.display = 'none';
    }

    this._locationName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likeCounter.textContent = this._likes;

    this.handleLikeButton(this._cardData);
    this._setEventListeners();
    return this._element;
  }

  handleLikeButton(cardData) {
    if (this.isLike(cardData)) {
      this._likeButton.classList.add("element__btn-like_active");
    } else {
      this._likeButton.classList.remove("element__btn-like_active");
    }
    this._likeCounter.textContent = cardData.likes.length;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", this._handleCardLike);

    if (this._myCard()) {
      this._deleteButton.addEventListener("click", this._handleCardDelete);
    }

    this._cardImage.addEventListener("click", this._handleCardClick);
  }
}