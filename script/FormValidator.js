const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

class FormValidator {
  constructor({inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
  }

  _showInputError = (inputSelector) => {
    const errorElement = this._formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputSelector.validationMessage;
  };

  _hideInputError = (inputSelector) => {
    const errorElement = this._formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _isValid = (inputSelector) => {
    if (!inputSelector.validity.valid) {
      this._showInputError(inputSelector);
    } else {
      this._hideInputError(inputSelector);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputSelector) => {
      return !inputSelector.validity.valid;
    });
  };

  _toogleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  _setEventListeners = () => {
    this._inputList = [...(this._formSelector.querySelectorAll(this._inputSelector))];
    this._buttonElement = this._formSelector.querySelector(this._submitButtonSelector);

    this._formSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._toogleButtonState();
    this._inputList.forEach((inputSelector) => {
      inputSelector.addEventListener("input", () => {
        this._isValid(inputSelector);
        this._toogleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };
}

export { FormValidator, config };