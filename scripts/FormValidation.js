export class FormValidator {
    #config;
    #formSelector;
    #formElement;
    #inputSelector;
    #saveButtonSelector;
    #inactiveButtonClass;
    #inputErrorClass;
    #inputList
    #formList

    constructor(config, formElement) {
        this.#config = config;
        this.#formSelector = config.formSelector;
        this.#inputSelector = config.inputSelector;
        this.#saveButtonSelector = config.saveButtonSelector;
        this.#inactiveButtonClass = config.inactiveButtonClass;
        this.#inputErrorClass = config.inputErrorClass;
        this.#formElement = formElement;
        // this.#inputList = Array.from(this.#formSelector.querySelectorAll(this.#inputSelector));
        // this.formList = this.formElement.querySelector(this.#formSelector);
    }

    #showError(inputElement, errorElement) {
        inputElement.classList.add(this.#inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    #hideError(inputElement, errorElement) {
        inputElement.classList.remove(this.#inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    disabledButton() {
        this.buttonElement.disabled = true;
        this.buttonElement.classList.add(this.#inactiveButtonClass);
    }

    enabledButton() {
        this.buttonElement.disabled = false;
        this.buttonElement.classList.remove(this.#inactiveButtonClass);
    }
    
    #toggleButtonState(isActive) {
        if(!isActive) {
            this.disabledButton(this.buttonElement);
        } else {
            this.enabledButton(this.buttonElement);
        }
    }

    #checkInputValidity(inputElement, formElement) {
        const isInputValid = inputElement.validity.valid;
        const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

        if(!isInputValid) {
            this.#showError(inputElement, errorElement);
        } else {
            this.#hideError(inputElement, errorElement);
        }
    }




    #setEventListener(formElement) {
        const inputList = formElement.querySelectorAll(this.#inputSelector);
        this.buttonElement = formElement.querySelector(this.#saveButtonSelector);
        
        this.#toggleButtonState(this.buttonElement, formElement.checkValidity());

        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        [...inputList].forEach((inputElement) =>{
            inputElement.addEventListener('input', () => {
                this.#toggleButtonState(this.buttonElement, formElement.checkValidity());
                this.#checkInputValidity(inputElement, formElement);
            });
        });
    }
    enableValidation() {
    const formList = document.querySelectorAll(this.#formSelector);
    [...formList].forEach((formItem) => {
        this.#setEventListener(formItem);
     }); 
    }
}