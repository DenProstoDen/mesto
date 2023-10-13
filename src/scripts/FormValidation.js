export class FormValidator {

    constructor(formElement, config) {
        this._config = config;
        this._formElement = formElement;
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._saveButtonSelector = config.saveButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._saveButtonSelector);
    }

    _showError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    _hideError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.remove(this._errorClass);
    }
    
    _isValid(input) {
        if (!input.validity.valid) {
        this._showError(input);
        } else {
        this._hideError(input);
        }
    }

    _hasInvalidValue() {
        return this._inputList.some((input) => !input.validity.valid);
    }

    disabledButton() {
        this._buttonElement.disabled = true;
        this._buttonElement.classList.add(this._inactiveButtonClass);
    }

    _toggleButtonState() {
        if (this._hasInvalidValue()) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
          } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    }

    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((input) => {
          input.addEventListener("input", () => {
            this._isValid(input);
            this._toggleButtonState();
          });
        });
    }

    enableValidation() {
        this._setEventListeners();
    }
}