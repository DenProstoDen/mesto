const onOpen = () => {
    let popupOpen = document.querySelector('.popup');
    popupOpen.classList.add('popup__opened');
}

const onClose = () => {
    let popupClosed = document.querySelector('.popup');
    popupClosed.classList.remove('popup__opened')
}

const onColor = () => {
    let likeColor = document.querySelector('.element__like');
    likeColor.classList.toggle('element__like-active')
}


let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__name');
let infoInput = document.querySelector('.popup__info');

function handleFormSubmit (evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = nameInput.value ;
    document.querySelector('.profile__specialization').textContent = infoInput.value;
    onClose();
}
formElement.addEventListener('submit', handleFormSubmit); 