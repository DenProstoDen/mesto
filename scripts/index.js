const root = document.querySelector('.root')
//popup id section
const formElementProfile = document.querySelector('.popup__form');
const formElementPlace = document.querySelector('.popup__form_place')
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileInfoInput = document.querySelector('.popup__input_type_info');
const newProfileName = document.querySelector('.profile__name');
const newProfileJob = document.querySelector('.profile__specialization');
const buttonOpenPopupProfile = document.querySelector('.profile__pencil');
const popupProfileNode = document.querySelector('.popup-add')
const popupImgNode = document.querySelector('.img-add');

//popup place section
const buttonOpenPopupPlace = document.querySelector('.profile__add-button');
const popupPlaceNode = document.querySelector('.popup_place-add');

//template
const templateCards = document.querySelector('.template-cards').content.querySelector('.card');
const elements = document.querySelector('.elements');
const popupImgPicture = document.querySelector('.popup-image__picture');
const popupImgText = document.querySelector('.popup-image__text');
const inputNameFormAddNewCard = document.querySelector('.popup__input_type_place');
const inputLinkFormAddNewCard = document.querySelector('.popup__input_type_link')


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


buttonOpenPopupProfile.addEventListener('click', function (){
  setProfilePopupValue();
  onOpen(popupProfileNode);
});

const onOpen = (modal) => {
  modal.classList.add('popup_opened');
}
const onClose = (modal) => {
  modal.classList.remove('popup_opened');
}

function setProfilePopupValue() {
  profileNameInput.value = newProfileName.textContent;
  profileInfoInput.value = newProfileJob.textContent;
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
    onClose(currentPopup);
  }
}


function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    setProfileNodeTextValue();
    onClose(popupProfileNode);
}


buttonOpenPopupPlace.addEventListener('click', function(){
  onOpen(popupPlaceNode);
});




function createCard ({name, link}) {
  const newCard = templateCards.cloneNode(true);
  const templateImg = newCard.querySelector('.card__img');
  const templateText = newCard.querySelector('.card__text');
  const likeButton = newCard.querySelector('.card__like-button');
  const deleteButton = newCard.querySelector('.card__delete-button');
  
  templateImg.src = link;
  templateImg.alt = name;
  templateText.textContent = name;


  likeButton.addEventListener('click', function(evt){
      evt.target.classList.toggle('card__like-button_active');
  })

  //попап картинка
  templateImg.addEventListener('click', () =>{
    setImgValue();
    onOpen(popupImgNode);
  });

  function setImgValue() {
    popupImgPicture.src = link;
    popupImgPicture.alt = name;
    popupImgText.textContent = name;
  }

  deleteButton.addEventListener('click', () => {
    newCard.remove();
  })

  return newCard;
}


function renderCard(data, container, position = 'append'){
  switch (position) {
    case "append":
      container.append(createCard(data));
      break;
    case "prepend":
      container.prepend(createCard(data));
      break;
    case "before":
      container.before(createCard(data));
      break;
    case "after":
      container.after(createCard(data));
      break;
    default:
      break;
  }
}

initialCards.forEach(function(item) {
  renderCard(item, elements, 'append');
});

function setPlaceTextValue () {
  const newProfileName = inputNameFormAddNewCard.value;
  const newImageInput = inputLinkFormAddNewCard.value;
  renderCard(({name: newProfileName, link: newImageInput}), elements, 'prepend');
}

function handleFormSubmitPlace(evt) {
  evt.preventDefault();
  setPlaceTextValue();
  onClose(popupPlaceNode);
  evt.target.reset();
}

formElementPlace.addEventListener('submit', handleFormSubmitPlace);
root.addEventListener('click', closeButtonClick);
formElementProfile.addEventListener('submit', handleProfileFormSubmit);