export default class FormValidator {
  constructor(config, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = [...this._formSelector.querySelectorAll(this._inputSelector)];
    this._buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
  }

  _showInputError(input) {
    const errorElement = this._formSelector.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = input.validationMessage;
  };

  _hideInputError(input) {
    const errorElement = this._formSelector.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity(input) {
    !input.validity.valid ? this._showInputError(input) : this._hideInputError(input);
  };

  _hasInvalidInput() {
    return this._inputList.some(input => !input.validity.valid);
  };

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach(input => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  };

  resetValidation() {
    this._inputList.forEach(input => this._hideInputError(input));
    this._toggleButtonState();
  }

  enableValidation() {
    this._formSelector.addEventListener("submit", evt => evt.preventDefault());
    this._setEventListeners();
  };
}