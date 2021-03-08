export default class Card {
  constructor(cardDataFromServer, cardSelector, myId, handleCardClick, handleCardDelete, handleCardLike) {
    this._cardSelector = cardSelector;
    this.cardData = cardDataFromServer;
    this._name = this.cardData.name;
    this._link = this.cardData.link;
    this._like = this.cardData.likes;
    this._likes = this.cardData.likes.length;
    this._cardId = this.cardData._id;
    this._ownerId = this.cardData.owner._id;
    this._myId = myId;
    this._handleCardClick = handleCardClick.bind(this);
    this._handleCardDelete = handleCardDelete.bind(this);
    this._handleCardLike = handleCardLike.bind(this);
  }

  _getTemplate() {
    const cardElement = this._cardSelector.content.querySelector(".element").cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._locationName = this._element.querySelector(".element__location");
    this._likeCounter = this._element.querySelector(".element__like-counter");
    this._likeButton = this._element.querySelector(".element__btn-like");
    this._deleteButton = this._element.querySelector(".element__btn-delete");
    if (!(this._ownerId === this._myId)) {
      this._deleteButton.remove();
      delete this._deleteButton;
    }
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this._locationName.textContent = this._name;
    this._likeCounter.textContent = this._likes;
    this.handleLikeButton(this.cardData);
    this._setEventListeners();
    return this._element;
  }

  isLikedByMe(cardData) {
    return cardData.likes.some((like) => like._id === this._myId);
  }

  handleLikeButton(cardData) {
    this.isLikedByMe(cardData) ? this._likeButton.classList.add("element__btn-like_active") : this._likeButton.classList.remove("element__btn-like_active");
    this._likeCounter.textContent = cardData.likes.length;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleCardLike();
    });
    if (this._ownerId === this._myId) {
      this._deleteButton.addEventListener("click", this._handleCardDelete);
    }
    this._cardImage.addEventListener("click", this._handleCardClick);
  }
}