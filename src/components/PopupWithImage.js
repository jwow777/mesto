import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, popupImage, popupDescription) {
    super(popupSelector);
    this._popupImage = popupImage;
    this._popupDescription = popupDescription;
  }

  open(element) {
    this._popupImage.src = element._link;
    this._popupImage.alt = element._name;
    this._popupDescription.textContent = element._name;
    super.open();
  }
}