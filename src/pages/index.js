import './index.css';

import {
  config,
  editButton, editProfilePopup, editProfileForm,
  addButton, addCardPopup, addCardForm,
  cardsContainerElement, cardSelector,
  authorName, authorDescription,
  nameInput, descriptionInput,
  openPopupImage, popupImage, popupDescription
} from "../utils/constants.js";

import { initialCards } from "../utils/initial-cards.js";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const createCard = (cardData) => {
  const newCard = new Card(cardData, cardSelector, handleCardClick).generateCard();
  return newCard
}

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const newCard = createCard(cardData);
      cardsList.addItem(newCard);
    }
  },
  cardsContainerElement
);

const editProfileFormValidator = new FormValidator(config, editProfileForm);
const addCardFormValidator = new FormValidator(config, addCardForm);

const popupEditProfile = new PopupWithForm(
  editProfilePopup,
  (userData) => {
    userInfo.setUserInfo(userData);
    popupEditProfile.close();
  },
  editProfileFormValidator
);

const popupAddCard = new PopupWithForm(
  addCardPopup,
  (cardData) => {
    const newCard = createCard(cardData);
    cardsList.addItem(newCard);
    popupAddCard.close();
  },
  addCardFormValidator
);

const popupFullImage = new PopupWithImage(openPopupImage, popupImage, popupDescription);

const userInfo = new UserInfo({
  userName: authorName,
  selfInfo: authorDescription
});

function handleCardClick() {
  popupFullImage.open(this);
}

const openPopupFormEdit = () => {
  popupEditProfile.open();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.userName;
  descriptionInput.value = userData.selfInfo;
  editProfileFormValidator.resetValidation();
};

const openPopupAddCard = () => {
  popupAddCard.open();
  addCardFormValidator.resetValidation();
};

cardsList.renderItems();

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();

popupEditProfile.setEventListeners();
editButton.addEventListener("click", openPopupFormEdit);

popupAddCard.setEventListeners();
addButton.addEventListener("click", openPopupAddCard);

popupFullImage.setEventListeners();