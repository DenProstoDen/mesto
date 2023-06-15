//popup id section
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let infoInput = document.querySelector('.popup__input_type_info');
let popup = document.querySelector('.popup');
let newName = document.querySelector('.profile__name');
let newJob = document.querySelector('.profile__specialization');
let openPopup = document.querySelector('.profile__pencil');

//popup place section
let openPlace = document.querySelector('.profile__add-button');
let closePopup = document.querySelector('.popup__close-button');
let popupPlace = document.querySelector('.popup_place');
let closePlace = document.querySelector('.popup_place__close-button');


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


const onOpen = () => {
    popup.classList.add('popup_opened');
    nameInput.value = newName.textContent;
    infoInput.value = newJob.textContent;
}

const onClose = () => {
    popup.classList.remove('popup_opened');
}

const onOpenPlace = () => {
    popupPlace.classList.add('popup_place_opened');
}

const onClosePlace = () => {
    popupPlace.classList.remove('popup_place_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    newName.textContent = nameInput.value ;
    newJob.textContent = infoInput.value;
    onClose();
}

formElement.addEventListener('submit', handleFormSubmit);
openPopup.addEventListener('click', onOpen);
openPlace.addEventListener('click', onOpenPlace);
closePlace.addEventListener('click', onClosePlace);
closePopup.addEventListener('click', onClose);

//template
const templateCards = document.querySelector('.template-cards').content.querySelector('.card');
const elements = document.querySelector('.elements');
const popupPlaceName = document.querySelector('.popup__input_type_place');
const popupLinkImg = document.querySelector('.popup__input_type_link')




function createCard ({name, link}) {
  const newCard = templateCards.cloneNode(true);
  const templateImg = newCard.querySelector('.card__img');
  const templateText = newCard.querySelector('.card__text');
  const likeButton = newCard.querySelector('.card__like-button');
  const deleteButton = newCard.querySelector('.card__delete-button');
  console.log(deleteButton)
  
  templateImg.src = link;
  templateImg.alt = name;
  templateText.textContent = name;


likeButton.addEventListener('click', function(evt){
    evt.target.classList.toggle('card__like-button_active');
})

//попап картинка

// templateImg.addEventListener('click', () =>{
  
// })

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

// formElement.addEventListener('submit', function (e) {
//   elements.preventDefault();

//   const newName = popupPlaceName.value;
//   const newImage = popupLinkImg.value;
//   renderCard(({name, link}), elements);
// })



openPlace.addEventListener('submit', renderCard);