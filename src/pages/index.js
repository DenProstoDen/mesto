import './index.css';

import { Card } from "../scripts/Card.js";

import { FormValidator } from "../scripts/FormValidation.js";

import { config } from "../scripts/configs.js";

import { PopupWithImage } from "../scripts/PopupWithImage.js";

import { PopupWithForm } from "../scripts/PopupWithForm.js";

import { UserInfo } from "../scripts/UserInfo.js";

import { Section } from "../scripts/Section.js";

//popup id section
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileInfoInput = document.querySelector('.popup__input_type_info');


//popup place section
const buttonOpenPopupPlace = document.querySelector('.profile__add-button');
const buttonOpenPopupProfile = document.querySelector('.profile__pencil');
//template
const cards = document.querySelector('.elements__list')
const inputNameFormAddNewCard = document.querySelector('.popup__input_type_place');
const inputLinkFormAddNewCard = document.querySelector('.popup__input_type_link');



const formElementProfile = new FormValidator(formEditProfile, config);
formElementProfile.enableValidation();

const formElementPlace = new FormValidator(formEditPlace, config);
formElementPlace.enableValidation();


const popupWithImage = new PopupWithImage(".img-add");
popupWithImage.setEventListeners();

const popupImgNode = (name, link) => {
  popupWithImage.open(name, link);
};

const formList = document.querySelectorAll('.popup__form');
formList.forEach((form) => {
  const formValidator = new FormValidator(form, config);
  formValidator.enableValidation()
})



const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];



const Selectors = {
  userName: ".profile__name",
  userJob: ".profile__specialization",
};

const userInfo = new UserInfo(Selectors);

const popupAddProfile = new PopupWithForm(
  {
      handleFormSubmit: (userData) => {
        userInfo.setUserInfo(userData);
      },
    },
    ".popup-add"
  );
  popupAddProfile.setEventListeners();


const popupAdd = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      const newCard = {
        name: data[inputNameFormAddNewCard.name],
        link: data[inputLinkFormAddNewCard.name],
      };
      const cardAddElement = createElement(newCard);
      cardSection.addItem(cardAddElement);
    },
  },
  ".popup_place-add"
);

popupAdd.setEventListeners();

const createElement = (element) => {
  const cardElement = new Card(element, ".template-cards", popupImgNode);
  const card = cardElement.generateCard();
  return card;
};

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardSection.addItem(createElement(item));
    },
  },
  cards
);
cardSection.renderItems();


buttonOpenPopupProfile.addEventListener("click", () => {
  popupAddProfile.open();
  const inputValues = userInfo.getUserInfo();
  profileNameInput.value = inputValues.name;
  profileInfoInput.value = inputValues.job;
  const event = new Event("input");
  profileNameInput.dispatchEvent(event);
  profileInfoInput.dispatchEvent(event);
});

buttonOpenPopupPlace.addEventListener("click", () => {
  popupAdd.open();
  formElementProfile.disabledButton();
});