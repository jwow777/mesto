export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeByOverlay = this._closeByOverlay.bind(this);
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("click", this._closeByOverlay);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("click", this._closeByOverlay);
  }

  _handleEscClose(evt) {
    const ESCAPE_KEY = "Escape";
    if (evt.key === ESCAPE_KEY) {
      this.close();
    }
  }

  _closeByOverlay(evt) {
    if (evt.target === this._popupSelector) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.querySelector(".popup__btn-close").addEventListener("click", this.close.bind(this));
  }
}