import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._inputList = [...this._popupForm.querySelectorAll(".popup__input")];
    this._handleSubmitForm = handleSubmitForm;
    this._submitTextLoading = this._popupForm.querySelector('.popup__button');
    this._submitTextDefault = this._submitTextLoading.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  renderLoader(isLoading) {
    if (isLoading) {
      this._submitTextLoading.textContent = 'Сохранение...';
    } else {
      this._submitTextLoading.textContent = this._submitTextDefault;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
  }
}