import './index.css';

import { Card } from "../scripts/Card.js";

import { FormValidator } from "../scripts/FormValidation.js";

import { config } from "../utils/configs.js";

import { PopupWithImage } from "../scripts/PopupWithImage.js";

import { PopupWithForm } from "../scripts/PopupWithForm.js";

import { UserInfo } from "../scripts/UserInfo.js";

import { Section } from "../scripts/Section.js";

import  Api  from "../scripts/Api.js";

// import PopupDeleteCard from '../scripts/PopupDeleteCard.js'

//popup id section
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileInfoInput = document.querySelector('.popup__input_type_info');
const inputLinkFormAddNewAvatar = document.querySelector('.popup__input_type_avatar')

//popup place section
const buttonOpenPopupPlace = document.querySelector('.profile__add-button');
const buttonOpenPopupProfile = document.querySelector('.profile__pencil');
const buttonOpenPopupAvatar = document.querySelector('.profile__avatar-button')
//template
const inputNameFormAddNewCard = document.querySelector('.popup__input_type_place');
const inputLinkFormAddNewCard = document.querySelector('.popup__input_type_link');

const apiConfig = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-77",
  headers:
  {
    authorization: '35b6e574-0c40-4e25-8a93-de8f952c7688',
    'Content-Type': 'application/json'
  }
}
const api = new Api(apiConfig);

function getProfileName() {
  api.getName()
  .then((item) => {
    const userName = item.name;
    const userJob = item.about;
    const userAvatar = item.avatar;
    document.querySelector('.profile__name').textContent = userName;
    document.querySelector('.profile__specialization').textContent = userJob;
    document.querySelector('.profile__avatar').src = userAvatar;
  })
}
getProfileName();

const profileSelectors = {
  userName: ".profile__name",
  userJob: ".profile__specialization",
  userAvatar: ".profile__avatar"
};







const formElementProfile = new FormValidator(formEditProfile, config);
formElementProfile.enableValidation();

const formElementPlace = new FormValidator(formEditPlace, config);
formElementPlace.enableValidation();

const formElementAva = new FormValidator(formEditAvatar, config)
formElementAva.enableValidation();

const popupWithImage = new PopupWithImage(".img-add");
popupWithImage.setEventListeners();

const popupImgNode = (name, link) => {
  popupWithImage.open(name, link);
};


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




const userInfo = new UserInfo(
  ".profile__name",
  ".profile__specialization",
  ".profile__avatar"
);

const popupAddProfile = new PopupWithForm(
  (data) => {
    api.editProfileInfo({ name: data.name, about: data.job }).then(() => {
    getProfileName();
    });
  },
    ".popup-add"
  )
  popupAddProfile.setEventListeners();


const popupAdd = new PopupWithForm((data) =>{
  api.addCard({name: data["placeName"], link:  data["placeLink"]})
  .then((item) => {
    createElement(item)
    api.getCard(createElement(item));
  })
  },
  ".popup_place-add"
);

popupAdd.setEventListeners();

const popupAvatar = new PopupWithForm(
    {
      handleFormSubmit: (data) => {
        userInfo.setUserAvatar(data);
        console.log(data)
      },
    },
  ".popup-avatar"
);
popupAvatar.setEventListeners();




const createElement = (element) => {
  const cardElement = new Card(element, ".template-cards", popupImgNode);
  const card = cardElement.generateCard();
  return card;
};



api.getCard()
.then((items) => {
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cards = createElement(item)
      cardSection.addItem(createElement(item));
    },
  },
  ".elements__list"
);
cardSection.renderItems();
});






buttonOpenPopupProfile.addEventListener("click", () => {
  popupAddProfile.open();
  const inputValues = userInfo.getUserInfo();
  profileNameInput.value = inputValues.name;
  profileInfoInput.value = inputValues.job;
  formElementProfile.disabledButton();
});

buttonOpenPopupPlace.addEventListener("click", () => {
  popupAdd.open();
  formElementProfile.disabledButton();
});

buttonOpenPopupAvatar.addEventListener("click", () => {
  popupAvatar.open();
  formElementProfile.disabledButton();
});