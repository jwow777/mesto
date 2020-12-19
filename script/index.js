// Объявление переменных
const сardsContainerElement = document.querySelector(".elements__container");
const templateElement = document.querySelector("#card-template");

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

const imagePopup = document.querySelector(".popup_overlay_image");
const popupImage = document.querySelector(".popup__image");
const popupDescription = document.querySelector(".popup__description");
const closeButtonImagePopup = document.querySelector(".popup__btn-close_type_image");

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

const popupList = Array.from(document.querySelectorAll(".popup"));
popupList.forEach((popupElement) => {
  popupElement.addEventListener("click", closeByOverlay(popupElement));
});

function composeItem(item) {
  const newCard = templateElement.content.cloneNode(true);

  const nameElement = newCard.querySelector(".element__location");
  nameElement.textContent = item.name;
  const linkElement = newCard.querySelector(".element__image");
  linkElement.src = item.link;
  linkElement.alt = item.name;

  linkElement.addEventListener("click", () => {
    openPopup(imagePopup);

    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupDescription.textContent = item.name;
  });

  const likeButton = newCard.querySelector(".element__btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("element__btn-like_active");
  });

  const deleteButton = newCard.querySelector(".element__btn-delete");
  deleteButton.addEventListener("click", (evt) => {
    const deleteCard = evt.target.closest(".element");
    deleteCard.remove();
  });

  return newCard;
}

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
  // Обнуление значений input
  addCardForm.reset();
}

function submitFormAddCard() {
  const inputPlace = titleCardInput.value;
  const inputUrl = linkCardInput.value;
  const newItemHTML = composeItem({
    name: inputPlace,
    link: inputUrl
  });
  сardsContainerElement.prepend(newItemHTML);

  closePopup(addCardPopup);
}

function renderList() {
  const сardsItems = initialCards.map(composeItem);
  сardsContainerElement.append(...сardsItems);
}

renderList();

editButton.addEventListener("click", () => openPopupFormEdit());
editProfileForm.addEventListener("submit", submitFormEdit);
closeButtonEditPopup.addEventListener("click", () => closePopup(editProfilePopup));

addButton.addEventListener("click", () => openPopupFormAddCard());
addCardForm.addEventListener("submit", submitFormAddCard);
closeButtonAddCardPopup.addEventListener("click", () => closePopup(addCardPopup));

closeButtonImagePopup.addEventListener("click", () => closePopup(imagePopup));