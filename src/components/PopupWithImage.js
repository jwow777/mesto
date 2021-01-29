import { popupImage, popupDescription } from "../utils/constants.js";
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open(element) {
    popupImage.src = element._link;
    popupImage.alt = element._title;
    popupDescription.textContent = element._title;
    super.open();
  }
}