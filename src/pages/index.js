import './index.css';

import { Card } from "../components/Card.js";

import { FormValidator } from "../components/FormValidation.js";

import { config } from "../utils/configs.js";

import { PopupWithImage } from "../components/PopupWithImage.js";

import { PopupWithForm } from "../components/PopupWithForm.js";

import { UserInfo } from "../components/UserInfo.js";

import { Section } from "../components/Section.js";

import  Api  from "../components/Api.js";

import { PopupDeleteCard } from '../components/PopupDeleteCard.js'

import { Popup }  from "../components/Popup.js";

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

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__specialization",
  ".profile__avatar"
);

const popupAddProfile = new PopupWithForm(
  (data) => {
    popupAddProfile.renderLoading(true);
    api.editProfileInfo({ name: data.name, about: data.job })
    .then((item) => {
      userInfo.setUserInfo(item)
      popupAddProfile.close();
    })
    .catch((error) => console.error(
      `Ошибка пользователя ${error}`
    ))
    .finally(() => {
      popupAddProfile.renderLoading(false);
    });
  },
    ".popup-add"
  )
  popupAddProfile.setEventListeners();


const popupAvatar = new PopupWithForm((data) => {
  popupAvatar.renderLoading(true);
  api.changeAvatar({avatar: data["avatar"]})
  .then((item) => {
    userInfo.setUserInfo(item);
    popupAvatar.close();
  })
  .catch(error => console.error(`Ошибка аватара ${error}`))
  .finally(() => {popupAvatar.renderLoading(false);
  });
}, ".popup-avatar")
  
popupAvatar.setEventListeners();


const createElement = (data) => {
  const like = (cardId) => {
    return api.addLike(cardId);
  };
  const removeLike = (cardId) => {
    return api.removeLike(cardId);
  };
  const cardElement = new Card(data, ".template-cards", popupImgNode, popupDeleteCard.open, like, removeLike);
  const card = cardElement.generateCard();
  return card;
};

const popupDeleteCard = new PopupDeleteCard('.popup-delete', ({card, cardID}) => {
  api.deleteCard(cardID)
  .then(() => {
    card.cardTrash();
    popupDeleteCard.close();
  })
  .catch((error) =>
  console.error(`Ошибка при удалении карточки ${error}`)
);
})
popupDeleteCard.setEventListeners();



  const cardSection = new Section((item) => {
  const cardElement = createElement(item);
  cardSection.addItemAppend(cardElement);
  },
  ".elements__list"
  );

  let meID;
  
  Promise.all([api.getName(), api.getCard()])
  .then(([dataUser, dataCard]) => {
    meID = dataUser._id;
    cardSection.renderItems(dataCard);
    userInfo.setUserInfo(dataUser);
  })
  .catch((error) =>
    console.error(`Ошибка загрузки карточки ${error}`)
  );



  const popupAdd = new PopupWithForm((data) =>{
    popupAdd.renderLoading(true);
    api
    .addCard({name: data["placeName"], link:  data["placeLink"]})
    .then((dataCard) => {
      console.log(dataCard)
      cardSection.addItem(createElement(dataCard));
      popupAdd.close();
    })
    .catch(error => console.error(`Ошибка карточки ${error}`))
    .finally(() => {
      popupAdd.renderLoading(false);
    });
  },  
    ".popup_place-add"
  );
  
  popupAdd.setEventListeners();


  buttonOpenPopupPlace.addEventListener("click", () => {
    popupAdd.open();
    formElementPlace.disabledButton();
  });
  

buttonOpenPopupProfile.addEventListener("click", () => {
  popupAddProfile.open();
  const inputValues = userInfo.getUserInfo();
  profileNameInput.value = inputValues.name;
  profileInfoInput.value = inputValues.job;
  formElementProfile.disabledButton();
});

buttonOpenPopupAvatar.addEventListener("click", () => {
  popupAvatar.open();
  formElementAva.disabledButton();
});