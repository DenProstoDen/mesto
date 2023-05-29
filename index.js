const onOpen = () => {
    let popupOpen = document.querySelector('.popup');
    popupOpen.classList.add('popup__opened');
    console.log(popupOpen);
}

const onClose = () => {
    let popupClosed = document.querySelector('.popup');
    popupClosed.classList.remove('popup__opened')
}
