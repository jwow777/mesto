import './index.css';

import {
  config, updateAvatarPopup, updateAvatarForm, avatarButton,
  editButton, editProfilePopup, editProfileForm,
  addButton, addCardPopup, addCardForm,
  cardsContainerElement, cardSelector,
  authorName, authorDescription, authorAvatar,
  nameInput, descriptionInput, deletePopup,
  openPopupImage, popupImage, popupDescription
} from "../utils/constants.js";

import Api from "../components/Api.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupDelete from "../components/PopupDelete.js";
import UserInfo from "../components/UserInfo.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20',
  headers: {
    authorization: '5e9e6ed0-2e3b-49ef-bceb-982a1b5626d9',
    'Content-Type': 'application/json'
  }
}); 

  const createCard = (cardData) => {
    const newCard = new Card(
      cardData, 
      cardSelector, 
      userInfo.getId(), 
      function handleCardClick() {
        popupFullImage.open(this);
      }, 
      function handleCardDelete() {
        popupDeleteCard.open(this);
      },
      function handleCardLike() {
        if (!this.isLike(cardData)) {
          api.like(cardData._id)
            .then(result => this.handleLikeButton(result))
            .catch(err => console.log(err)); 
        } else {
          api.notLike(cardData._id)
            .then(result => this.handleLikeButton(result))
            .catch(err => console.log(err)); 
        }
      }
    ).generateCard();
    return newCard
  }

const cardsList = new Section(
  {
    renderer: (cardData) => {
      const newCard = createCard(cardData);
      cardsList.addItemArr(newCard);
    }
  },
  cardsContainerElement
);

const editProfileFormValidator = new FormValidator(config, editProfileForm);
const addCardFormValidator = new FormValidator(config, addCardForm);
const updateAvatarFormValidator = new FormValidator(config, updateAvatarForm);

const popupEditProfile = new PopupWithForm(
  editProfilePopup,
  function handleSubmitForm(userData) {
    this.renderLoader(true);
    api.patchUserInfo(userData)
      .then((result) => {
        userInfo.setUserInfo(result);
        popupEditProfile.close();
      })
      .catch(err => console.log(err))
      .finally(() => this.renderLoader(false));
  }
);

const popupAddCard = new PopupWithForm(
  addCardPopup,
  function handleSubmitForm(cardData) {
    this.renderLoader(true);
    api.postCard(cardData)
      .then((result) => {
        const newCard = createCard(result);
        cardsList.addItem(newCard);
        popupAddCard.close();
      })
      .catch(err => console.log(err))
      .finally(() => this.renderLoader(false));
  }
);

const popupDeleteCard = new PopupDelete(
  deletePopup,
  function handleSubmitForm(evt) {
    evt.preventDefault();
    api.deleteCard(popupDeleteCard.cardId)
      .then(() => {
        popupDeleteCard.element.remove();
        delete popupDeleteCard.element;
        popupDeleteCard.close();
      })
      .catch(err => console.log(err)); 
  }
);

const popupUpdateAvatar = new PopupWithForm(
  updateAvatarPopup,
  function handleSubmitForm(userData) {
    this.renderLoader(true);
    api.patchUserAvatar(userData)
      .then((result) => {
        userInfo.setUserInfo(result);
        popupUpdateAvatar.close();
      })
      .catch(err => console.log(err))
      .finally(() => this.renderLoader(false));
  }
);

const popupFullImage = new PopupWithImage(openPopupImage, popupImage, popupDescription);

const userInfo = new UserInfo({
  userName: authorName,
  selfInfo: authorDescription,
  avatar: authorAvatar
});

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

const openPopupUpdateAvatar = () => {
  popupUpdateAvatar.open();
  updateAvatarFormValidator.resetValidation();
};

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards])=>{ 
    userInfo.setUserInfo(user); 
    cardsList.renderItems(cards);

    popupEditProfile.setEventListeners();
    editButton.addEventListener("click", openPopupFormEdit);

    popupAddCard.setEventListeners();
    addButton.addEventListener("click", openPopupAddCard);

    popupUpdateAvatar.setEventListeners();
    avatarButton.addEventListener("click", openPopupUpdateAvatar);

    popupDeleteCard.setEventListeners();
  })
  .catch(err => console.log(err));

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
updateAvatarFormValidator.enableValidation();

popupFullImage.setEventListeners();