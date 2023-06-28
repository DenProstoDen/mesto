function showError(inputElement, errorElement) {
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement) {
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}



function checkInputValidity(inputElement, formElement) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if(!isInputValid) {
        showError(inputElement, errorElement);
    } else {
        hideError(inputElement, errorElement);
    }
}


function disabledButton(buttonElement) {
    buttonElement.disabled = true;
    buttonElement.classList.add(config.inactiveButtonClass);
}

function enabledButton(buttonElement) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
}


function toggleButtonState(buttonElement, isActive) {
    if(!isActive) {
        disabledButton(buttonElement);
    } else {
        enabledButton(buttonElement);
    }
}


function setEventListener(formElement) {
    const inputList = formElement.querySelectorAll(config.inputSelector);
    const submitButtonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(submitButtonElement, formElement.checkValidity());

    [...inputList].forEach(function(inputElement){
        inputElement.addEventListener('input', function() {
            toggleButtonState(submitButtonElement, formElement.checkValidity());
            checkInputValidity(inputElement, formElement);
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
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_invalid',
    inputErrorClass: 'popup__input_state_invalid'
}



enableValidation(config);