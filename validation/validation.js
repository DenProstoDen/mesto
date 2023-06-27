function showError(inputElement, errorElement) {
    inputElement.classList.add('popup__input_state_invalid');
    errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement) {
    inputElement.classList.remove('popup__input_state_invalid');
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


function disbledButton(buttonElement) {
    buttonElement.disbled = "disbled";
    buttonElement.classList.add('popup__save-button_invalid');
}

function enabledButton(buttonElement) {
    buttonElement.disbled = false;
    buttonElement.classList.remove('popup__save-button_invalid');
}


function toggleButtonState(buttonElement, isActive) {
    if(!isActive) {
        disbledButton(buttonElement);
    } else {
        enabledButton(buttonElement);
    }
}


function setEventListener(formElement) {
    const inputList = formElement.querySelectorAll('.popup__input');
    const submitButtonElement = formElement.querySelector('.popup__save-button');
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
        console.log('Ок');
    });
}




function enableValidation() {
    const formList = document.querySelectorAll('.popup__form');
    [...formList].forEach(function (formElement) {
        setEventListener(formElement);
    });
}

enableValidation();