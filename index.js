const onOpen = () => {
    let popupOpen = document.querySelector('.popup');
    popupOpen.classList.add('popup__opened');
    console.log(popupOpen);
}

const onClose = () => {
    let popupClosed = document.querySelector('.popup');
    popupClosed.classList.remove('popup__opened')
}

const onColor = () => {
    let likeColor = document.querySelector('.element__like');
    likeColor.classList.toggle('element__like-active')
}
// const offColor = () => {
//     let unlikeColor = document.querySelector('.element__like');
//     unlikeColor.classList.remove('element__like-active')
// }