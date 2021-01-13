import { closePopup } from "./index.js";

const ESCAPE_KEY = "Escape";

export const closeByEscape = (evt) => {
  if (evt.key === ESCAPE_KEY) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  };
};