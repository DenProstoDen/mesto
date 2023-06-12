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
