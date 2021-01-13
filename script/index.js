import { initialCards } from "./initial-cards.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { closeByEscape } from "./util.js";

// Объявление переменных
const popupList = document.querySelectorAll(".popup");
const closeButton = document.querySelectorAll(".popup__btn-close");

const editButton = document.querySelector(".profile__btn-edit");
const editProfilePopup = document.querySelector(".popup_type_edit");
const editProfileForm = document.querySelector(".popup__form_type_edit");
const authorName = document.querySelector(".profile__full-name");
const authorDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(".popup__input_type_desc");

const addButton = document.querySelector(".profile__btn-add");
const addCardPopup = document.querySelector(".popup_type_add");
const addCardForm = document.querySelector(".popup__form_type_add");
const titleCardInput = document.querySelector(".popup__input_type_title");
const linkCardInput = document.querySelector(".popup__input_type_link");

const cardsContainerElement = document.querySelector(".elements__container");
const cardSelector = document.querySelector("#card-template");

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

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
  };
};

const openPopupFormEdit = () => {
  openPopup(editProfilePopup);
  // Вставил в форму значения, которые уже на сайте
  nameInput.value = authorName.textContent;
  descriptionInput.value = authorDescription.textContent;
};

// Сохранение данных в 1 форме
const submitFormEdit = (evt) => {
  evt.preventDefault();

  authorName.textContent = nameInput.value;
  authorDescription.textContent = descriptionInput.value;

  closePopup(editProfilePopup);
};

// Создание карточек
const addNewCard = (item, cardSelector) => {
  const newCard = new Card(item, cardSelector).generateCard();
  cardsContainerElement.prepend(newCard);
};

// Сохранение данных в 2 форме
const submitFormAddCard = (evt) => {
  evt.preventDefault();

  const name = titleCardInput.value;
  const link = linkCardInput.value;
  const item = {name, link};

  addNewCard(item, cardSelector);

  closePopup(addCardPopup);
  addCardForm.reset();
};

initialCards.forEach((item) => {
  addNewCard(item, cardSelector);
});

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();

closeButton.forEach((popupElement) => {
  popupElement.addEventListener('click', (evt) => {
    closePopup(evt.target.closest('.popup'));
  });
});

popupList.forEach((popupElement) => {
  popupElement.addEventListener("click", closeByOverlay(popupElement)); 
});

editButton.addEventListener("click", openPopupFormEdit);
editProfileForm.addEventListener("submit", submitFormEdit);

addButton.addEventListener("click", () => openPopup(addCardPopup));
addCardForm.addEventListener("submit", submitFormAddCard);

export { cardSelector, closePopup };
