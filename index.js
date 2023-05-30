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

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = document.querySelector('.element');
let jobInput = document.querySelector('.popup__info');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    nameInput.value = document.querySelector('.profile__name').textContent;
    jobInput.value = document.querySelector('.profile__specialization').textContent;
    // Вставьте новые значения с помощью textContent
    
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 