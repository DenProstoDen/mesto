export class FormValidator {
    #config;
    #formSelector;
    #formElement;
    #inputSelector;
    #saveButtonSelector;
    #inactiveButtonClass;
    #inputErrorClass;
    #inputList
    #buttonElement

    constructor(formElement, config) {
        this.#config = config;
        this.#formElement = formElement;
        this.#formSelector = config.formSelector;
        this.#inputSelector = config.inputSelector;
        this.#saveButtonSelector = config.saveButtonSelector;
        this.#inactiveButtonClass = config.inactiveButtonClass;
        this.#inputErrorClass = config.inputErrorClass;
        this.#inputList = Array.from(this.#formElement.querySelectorAll(this.#inputSelector));
        this.#buttonElement = this.#formElement.querySelector(this.#saveButtonSelector);
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
        this.#buttonElement.disabled = true;
        this.#buttonElement.classList.add(this.#inactiveButtonClass);
    }

    enabledButton() {
        this.#buttonElement.disabled = false;
        this.#buttonElement.classList.remove(this.#inactiveButtonClass);
    }
    
    #toggleButtonState(isActive) {
        if(!isActive) {
            this.disabledButton(this.#buttonElement);
        } else {
            this.enabledButton(this.#buttonElement);
        }
    }

    #checkInputValidity(inputElement) {
        const isInputValid = inputElement.validity.valid;
        const errorElement = this.#formElement.querySelector(`#${inputElement.name}-error`);
        if(!isInputValid) {
            this.#showError(inputElement, errorElement);
        } else {
            this.#hideError(inputElement, errorElement);
        }
    }

    #setEventListener() {
        this.#toggleButtonState();

    [...this.#inputList].forEach((inputElement) =>{
            inputElement.addEventListener('input', () => {
                this.#toggleButtonState(this.#buttonElement, this.#formElement.checkValidity());
                this.#checkInputValidity(inputElement);
            });
        });
    }
    enableValidation() {
        this.#formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            });
        this.#setEventListener();
    }
}