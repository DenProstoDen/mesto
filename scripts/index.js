const root = document.querySelector('.root')
//popup id section
const formElement = document.querySelector('.popup__form');
const formElementPlace = document.querySelector('.popup__form_place')
const nameInput = document.querySelector('.popup__input_type_name');
const infoInput = document.querySelector('.popup__input_type_info');
const newNameInput = document.querySelector('.profile__name');
const newJobInput = document.querySelector('.profile__specialization');
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
  nameInput.value = newNameInput.textContent;
  infoInput.value = newJobInput.textContent;
}

function setProfileNodeTextValue() {
  newNameInput.textContent = nameInput.value;
  newJobInput.textContent = infoInput.value;
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


function renderCard(data, container){
  container.append(createCard(data));
}

initialCards.forEach(function(item) {
  renderCard(item, elements);
});

function setPlaceTextValue () {
  const newNameInput = inputNameFormAddNewCard.value;
  const newImage = inputLinkFormAddNewCard.value;
  renderCard(({name: newNameInput, link: newImage}), elements);
}

function handleFormSubmitPlace(evt) {
  evt.preventDefault();
  setPlaceTextValue();
  onClose(popupPlaceNode);
  evt.target.reset();
}

formElementPlace.addEventListener('submit', handleFormSubmitPlace);
root.addEventListener('click', closeButtonClick);
formElement.addEventListener('submit', handleProfileFormSubmit);