// export class formValidator {
//     constructor(config, formElement) {
//         this.formElement = formElement;

//         this.#ormSelector = config.formSelector;
//         this.#inputSelector = config.inputSelector;
//         this.#saveButtonSelector = config.saveButtonSelector;
//         this.#inactiveButtonClass = config.inactiveButtonClass;
//         this.#inputErrorClass = config.inputErrorClass;
//     }
//     showError(inputElement, errorElement) {
//         inputElement.classList.add(this.#inputErrorClass);
//         errorElement.textContent = inputElement.validationMessage;
//     }
//     hideError(inputElement, errorElement) {
//         inputElement.classList.remove(this.#inputErrorClass);
//         errorElement.textContent = inputElement.validationMessage;
//     }
//     #checkInputValidity(inputElement) {
//         const errorElement = this.formElement.querySelector(`#${inputElement.name}-error`);
//         if(!isInputValid) {
//             this.showError(inputElement, errorElement);
//         } else {
//             this.hideError(inputElement, errorElement);
//         }
//     }
//     disabledButton() {
//         this.#buttonElement.disabled = true;
//         this.#buttonElement.classList.add(this.#inactiveButtonClass);
//     }
//     enabledButton() {
//         this.#buttonElement.disabled = false;
//         this.#buttonElement.classList.remove(config.inactiveButtonClass);
//     }
//     toggleButtonState(isActive) {
//         if(!isActive) {
//             this.disabledButton();
//         } else {
//             this.enabledButton();
//         }
//     }
//     enableValidation() {
//         this.#setEventListener();
//     }
// }

function showError(inputElement, errorElement, config) {
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement, config) {
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}


function checkInputValidity(inputElement, formElement, config) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if(!isInputValid) {
        showError(inputElement, errorElement, config);
    } else {
        hideError(inputElement, errorElement, config);
    }
}


function disabledButton(buttonElement, config) {
    buttonElement.disabled = true;
    buttonElement.classList.add(config.inactiveButtonClass);
}

function enabledButton(buttonElement, config) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
}


function toggleButtonState(buttonElement, isActive, config) {
    if(!isActive) {
        disabledButton(buttonElement, config);
    } else {
        enabledButton(buttonElement, config);
    }
}


function setEventListener(formElement, config) {
    const inputList = formElement.querySelectorAll(config.inputSelector);
    const submitButtonElement = formElement.querySelector(config.saveButtonSelector);
    toggleButtonState(submitButtonElement, formElement.checkValidity(), config);

    [...inputList].forEach(function(inputElement){
        inputElement.addEventListener('input', function() {
            toggleButtonState(submitButtonElement, formElement.checkValidity(), config);
            checkInputValidity(inputElement, formElement, config);
        });
    });


    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        if(!formElement.checkValidity()) return;
    });
}


function enableValidation(config) {
    const formList = document.querySelectorAll(config.formSelector);
    [...formList].forEach(function (formElement) {
        setEventListener(formElement, config);
    }); 
}

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    saveButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_invalid',
    inputErrorClass: 'popup__input_state_invalid'
}



enableValidation(config);