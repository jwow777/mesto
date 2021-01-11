import { Card, сardsContainerElement } from './Card.js';
import { FormValidator, config } from './FormValidator.js';

// Объявление переменных
const editButton = document.querySelector(".profile__btn-edit");
const editProfilePopup = document.querySelector(".popup_type_edit");
const editProfileForm = document.querySelector(".popup__form_type_edit");
const authorName = document.querySelector(".profile__full-name");
const authorDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(".popup__input_type_desc");
const closeButtonEditPopup = document.querySelector(".popup__btn-close_type_edit");

const addButton = document.querySelector(".profile__btn-add");
const addCardPopup = document.querySelector(".popup_type_add");
const addCardForm = document.querySelector(".popup__form_type_add");
const titleCardInput = document.querySelector(".popup__input_type_title");
const linkCardInput = document.querySelector(".popup__input_type_link");
const closeButtonAddCardPopup = document.querySelector(".popup__btn-close_type_add");

const editProfileFormValidator = new FormValidator(config, editProfileForm);
const addCardFormValidator = new FormValidator(config, addCardForm);

const openPopup = (popupElement) => {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
};

const closePopup = (popupElement) => {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
};

const closeByOverlay = (popupElement) => (evt) => {
  if (evt.target === popupElement) {
    popupElement.classList.remove("popup_opened");
  }
};

const popupList = [...(document.querySelectorAll(".popup"))];
popupList.forEach((popupElement) => {
  popupElement.addEventListener("click", closeByOverlay(popupElement));
});

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

function openPopupFormEdit() {
  openPopup(editProfilePopup);
  // Вставил в форму значения, которые уже на сайте
  nameInput.value = authorName.textContent;
  descriptionInput.value = authorDescription.textContent;
}

// Сохранение данных в 1 форме
function submitFormEdit() {
  authorName.textContent = nameInput.value;
  authorDescription.textContent = descriptionInput.value;
  
  closePopup(editProfilePopup);
}

function openPopupFormAddCard() {
  openPopup(addCardPopup);
}

function submitFormAddCard() {
  const name = titleCardInput.value;
  const link = linkCardInput.value;

  const newCard = new Card({name, link}).generateCard();
  сardsContainerElement.prepend(newCard);

  closePopup(addCardPopup);
  addCardForm.reset();
}

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();

editButton.addEventListener("click", () => openPopupFormEdit());
editProfileForm.addEventListener("submit", submitFormEdit);
closeButtonEditPopup.addEventListener("click", () => closePopup(editProfilePopup));

addButton.addEventListener("click", () => openPopupFormAddCard());
addCardForm.addEventListener("submit", submitFormAddCard);
closeButtonAddCardPopup.addEventListener("click", () => closePopup(addCardPopup));

export { closeByEscape };