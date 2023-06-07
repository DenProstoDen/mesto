let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let infoInput = document.querySelector('.popup__input_type_info');
let popupOpened = document.querySelector('.popup');
let newName = document.querySelector('.profile__name');
let newJob = document.querySelector('.profile__specialization');
let openPopup = document.querySelector('.profile__pencil');
let closePopup = document.querySelector('.popup__close-button');



const onOpen = () => {
    popupOpened.classList.add('popup_opened');
}

const onClose = () => {
    popupOpened.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    newName.textContent = nameInput.value ;
    newJob.textContent = infoInput.value;
    onClose();
}

formElement.addEventListener('submit', handleFormSubmit);
openPopup.addEventListener("click", onOpen);
closePopup.addEventListener("click", onClose);
