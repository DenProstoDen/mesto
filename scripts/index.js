//popup id section
let formElement = document.querySelector('.popup__form');
let formElementPlace = document.querySelector('.popup__form_place')
let nameInput = document.querySelector('.popup__input_type_name');
let infoInput = document.querySelector('.popup__input_type_info');
let popup = document.querySelector('.popup');
let newName = document.querySelector('.profile__name');
let newJob = document.querySelector('.profile__specialization');
let profilePopup = document.querySelector('.profile__pencil');
let popupNode = document.querySelector('.popup-add')
let imgNode = document.querySelector('.img-add');

//popup place section
let placePopup = document.querySelector('.profile__add-button');
let closePopup = document.querySelector('.popup__close-button');
let root = document.querySelector('.root')
let placeNode = document.querySelector('.popup_place-add');



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


profilePopup.addEventListener('click', function (){
  setPopupValue();
  onOpen(popupNode);
});

const onOpen = (modal) => {
  modal.classList.add('popup_opened');
}
const onClose = (modal) => {
  modal.classList.remove('popup_opened');
}

function setPopupValue() {
  nameInput.value = newName.textContent;
  infoInput.value = newJob.textContent;
}

function setNodeTextValue() {
  newName.textContent = nameInput.value;
  newJob.textContent = infoInput.value;
}
// функция закрытия для всех popup элементов
const closeButtonClick = (evt) => {
  const target = evt.target;
  const currentPopup = target.closest('.popup');
  if (target.classList.contains('popup__close-button') || target === currentPopup) {
    onClose(currentPopup);
  }
}
root.addEventListener('click', closeButtonClick);

function handleFormSubmit (evt) {
    evt.preventDefault();
    setNodeTextValue();
    onClose(popupNode);
}

formElement.addEventListener('submit', handleFormSubmit);


placePopup.addEventListener('click', function(){
  onOpen(placeNode);
});


//template
const templateCards = document.querySelector('.template-cards').content.querySelector('.card');
const elements = document.querySelector('.elements');
const popupPicture = document.querySelector('.popup-image__picture');
const popupImgText = document.querySelector('.popup-image__text');
const popupImg = document.querySelector('.popup_img');
const popupPlaceName = document.querySelector('.popup__input_type_place');
const popupLinkImg = document.querySelector('.popup__input_type_link')




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
    onOpen(imgNode);
  });

  function setImgValue() {
    popupPicture.src = link;
    popupPicture.alt = name;
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
  const newName = popupPlaceName.value;
  const newImage = popupLinkImg.value;
  renderCard(({name: newName, link: newImage}), elements);
}

function handleFormSubmitPlace(evt) {
  evt.preventDefault();
  setPlaceTextValue();
  onClose(placeNode);
}

formElementPlace.addEventListener('submit', handleFormSubmitPlace);