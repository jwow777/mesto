import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._handleSubmitForm = handleSubmitForm;
  }

  open(cardData) {
    super.open();
    this.cardId = cardData._cardId;
    this.element = cardData._element;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._handleSubmitForm);
  }
}