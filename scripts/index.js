let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_type_name');
let infoInput = document.querySelector('.popup__input_type_info');
let popupOpen = document.querySelector('.popup');

const onOpen = () => {
    popupOpen.classList.add('popup_opened');
}

const onClose = () => {
    popupOpen.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = nameInput.value ;
    document.querySelector('.profile__specialization').textContent = infoInput.value;
    onClose();
}
formElement.addEventListener('submit', handleFormSubmit);
document.querySelector('.profile__pencil').addEventListener("click", onOpen);
document.querySelector('.popup__close-button').addEventListener("click", onClose);