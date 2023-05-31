let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__name');
let infoInput = document.querySelector('.popup__info');
let popupOpen = document.querySelector('.popup');
// let likeColor = document.querySelector('.element__like');

const onOpen = () => {
    popupOpen.classList.add('popup__opened');
}

const onClose = () => {
    popupOpen.classList.remove('popup__opened');
}

// const onColor = () => {
//     likeColor.classList.toggle('element__like_active');
// }

function handleFormSubmit (evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = nameInput.value ;
    document.querySelector('.profile__specialization').textContent = infoInput.value;
    onClose();
}
formElement.addEventListener('submit', handleFormSubmit);
document.querySelector('.profile__pencil').addEventListener("click", onOpen);
// likeColor.addEventListener('click', onColor)

let buttons = document.querySelectorAll('.element__like');
console.log(buttons)