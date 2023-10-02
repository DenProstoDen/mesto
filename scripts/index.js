import { Card } from "./Card.js";

import { FormValidator } from "./FormValidation.js";

import { config } from "./configs.js";

import  { Popup }  from "./Popup.js";

import { PopupWithImage } from "./PopupWithImage.js";

import { PopupWithForm } from "../scripts/PopupWithForm.js";

import { UserInfo } from "../scripts/UserInfo.js";

import Section from "../scripts/Section.js";

const root = document.querySelector('.root')
//popup id section
const popupProfileNode = document.querySelector('.popup-add');
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileInfoInput = document.querySelector('.popup__input_type_info');
const newProfileName = document.querySelector('.profile__name');
const newProfileJob = document.querySelector('.profile__specialization');
const buttonOpenPopupProfile = document.querySelector('.profile__pencil');
// const formElementProfile = popupProfileNode.querySelector('.popup__form');
//popup place section
const buttonOpenPopupPlace = document.querySelector('.profile__add-button');
const popupPlaceNode = document.querySelector('.popup_place-add');

//template

const elements = document.querySelector('.elements');
const inputNameFormAddNewCard = document.querySelector('.popup__input_type_place');
const inputLinkFormAddNewCard = document.querySelector('.popup__input_type_link');




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

const openPopup = (modal) => {
  modal.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  root.addEventListener('click', closeButtonClick);
}
const closePopup = (modal) => {
  modal.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
  root.removeEventListener('click', closeButtonClick);
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
} 

buttonOpenPopupProfile.addEventListener('click', () => {
  setProfilePopupValue();
  openPopup(popupProfileNode);
});


function setProfilePopupValue() {
  const event = new Event('input');
  profileNameInput.value = newProfileName.textContent;
  profileInfoInput.value = newProfileJob.textContent;
  profileNameInput.dispatchEvent(event);
}

function setProfileNodeTextValue() {
  newProfileName.textContent = profileNameInput.value;
  newProfileJob.textContent = profileInfoInput.value;
}
// функция закрытия для всех popup элементов
const closeButtonClick = (evt) => {
  const target = evt.target;
  const currentPopup = target.closest('.popup');
  if (target.classList.contains('popup__close-button') || target === currentPopup) {
    closePopup(currentPopup);
  }
}
export function handleOpenPopup(name, link) {
  const popupImgNode = document.querySelector('.img-add');
  const popupImgPicture = document.querySelector('.popup-image__picture');
  const popupImgText = document.querySelector('.popup-image__text');

  openPopup(popupImgNode);
  popupImgPicture.src = link;
  popupImgPicture.alt = name;  
  popupImgText.textContent = name;
}

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    setProfileNodeTextValue();
    closePopup(popupProfileNode);
}

buttonOpenPopupPlace.addEventListener('click', () => {
  openPopup(popupPlaceNode);
});

function handleClickDelete (newCard) {
  newCard.remove();
}

const handleClickLike = evt => {
  evt.target.classList.toggle('card__like-button_active');
}

function renderCard(data, container, position = 'append'){
  const cardElement = new Card({data, handleClickDelete, handleClickLike, handleOpenPopup}, '.template-cards').createCard();
  switch (position) {
    case "append":
      container.append(cardElement);
      break;
    case "prepend":
      container.prepend(cardElement);
      break;
    case "before":
      container.before(cardElement);
      break;
    case "after":
      container.after(cardElement);
      break;
    default:
      break;
  }
}


initialCards.forEach(function(item) {
  renderCard(item, elements, 'append');
});

buttonOpenPopupProfile.addEventListener("click", () => {
  const info = newUserInfo.getUserInfo();
  popupProfile.setinputValues(info);
  editProfileForm.resetValidation();
  popupProfile.open();
});

const newUserInfo = new UserInfo({
  userName: "popup__input_type_name",
  userJob: "popup__input_type_info",
});