import './index.css';

import { Card } from "../scripts/Card.js";

import { FormValidator } from "../scripts/FormValidation.js";

import { config } from "../utils/configs.js";

import { PopupWithImage } from "../scripts/PopupWithImage.js";

import { PopupWithForm } from "../scripts/PopupWithForm.js";

import { UserInfo } from "../scripts/UserInfo.js";

import { Section } from "../scripts/Section.js";

import  Api  from "../scripts/Api.js";

import { PopupDeleteCard } from '../scripts/PopupDeleteCard.js'

import { Popup }  from "../scripts/Popup.js";

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

Promise.all([api.getName(), api.getCard()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach((element) => (element.meID = dataUser._id));
    cardSection.renderItems(dataCard);
    userInfo.setUserInfo({name: dataUser.name, job: dataUser.about, avatar: dataUser.avatar})
  })
  .catch((error) =>
    console.error(`Ошибка при попытке загрузить карточки ${error}`)
  );




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
      userInfo.setUserInfo({name: item.name, job: item.about, avatar: item.avatar})
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
    userInfo.setUserInfo({name: item.name, job: item.about, avatar: item.avatar});
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
})
popupDeleteCard.setEventListeners();



  const cardSection = new Section((item) => {
  const cardElement = createElement(item);
  cardSection.addItemAppend(cardElement);
  },
  ".elements__list"
  );

  const popupAdd = new PopupWithForm((data) =>{
    popupAdd.renderLoading(true);
    Promise.all([api.getName(), api.addCard({name: data["placeName"], link:  data["placeLink"]})])
    .then(([dataUser, dataCard]) => {
      dataCard.meID = dataUser._id;
      cardSection.addItem(createElement(dataCard));
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
    formElementProfile.disabledButton();
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
  formElementProfile.disabledButton();
});